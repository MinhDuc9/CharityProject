require('dotenv').config();
const { google } = require('googleapis');
const bcrypt = require('bcrypt');

const Admin = require('../models/Admin');
const { json } = require('express');

// Define your OAuth2 client with your credentials
const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URI,
);

class AdminController {
    // [POST] /admin/login
    login(req, res, next) {
        const { username, password } = req.body;

        Admin.findOne({ username: username })
            .then((data) => {
                if (data !== null) {
                    const myPlaintextPassword = password;
                    bcrypt.compare(
                        myPlaintextPassword,
                        data.password,
                        function (err, result) {
                            if (result) {
                                console.log(
                                    'Password match, setting session adminId:',
                                    data._id,
                                );
                                req.session.adminId = data._id;
                                console.log(
                                    'Session after setting adminId:',
                                    req.session,
                                );

                                res.json({ message: 'Login successful' });
                            } else {
                                res.status(401).json({
                                    message: 'Invalid username or password',
                                });
                            }
                        },
                    );
                } else {
                    res.status(401).json({
                        message: 'Invalid username or password',
                    });
                }
            })
            .catch((err) => {
                res.status(500).json({ message: err });
            });
    }

    // [GET] /admin/dashboard
    dashBoard(req, res, next) {
        console.log('Session data in dashboard:', req.session);
        const adminId = req.session.adminId;

        console.log('Test console: ', req.session.adminId);

        if (adminId) {
            // Ensure that the session is correctly checked
            res.status(200).send('Ok');
        } else {
            res.status(401).send('Out dated'); // Use 401 status for unauthorized
        }
    }

    // [POST] /admin/signup
    async signUp(req, res, next) {
        const { username, password } = req.body;

        // Hash the password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        const newAdmin = new Admin({
            username,
            password: hashedPassword,
        });

        await newAdmin.save();

        res.send('Yes');
    }

    // [GET] /admin/auth
    authenticate(req, res, next) {
        const scopes = [
            'https://www.googleapis.com/auth/drive.metadata.readonly',
        ];

        const authUrl = oauth2Client.generateAuthUrl({
            access_type: 'offline', // This parameter is correct for getting refresh tokens
            scope: scopes,
            response_type: 'code', // Ensures the response contains the authorization code
        });

        res.redirect(authUrl);
    }

    // [GET] /admin/authCallBack
    async authCallBack(req, res, next) {
        const code = req.query.code;
        try {
            console.log('Checked code', code);
            const { tokens } = await oauth2Client.getToken(code);
            oauth2Client.setCredentials(tokens);
            console.log('OAuth2 tokens received and set:', tokens);

            // Store tokens in session
            req.session.tokens = tokens;

            // Redirect to send lists of items in drive folder
            res.redirect('/admin/lists');
        } catch (error) {
            console.error('Error during OAuth2 callback', error);
            res.status(500).send('Error during OAuth2 callback');
        }
    }

    // [GET] /admin/lists
    async listFolderItems(req, res, next) {
        const folderId = process.env.DRIVE_FOLDER; // Use the actual folder ID from the URL
        try {
            // Set the tokens from session to the OAuth2 client
            if (req.session.tokens) {
                oauth2Client.setCredentials(req.session.tokens);
            } else {
                return res
                    .status(401)
                    .send('Unauthorized: No tokens found in session');
            }

            // Check if token is expired and refresh if necessary
            const expiryDate = oauth2Client.credentials.expiry_date;
            if (expiryDate && expiryDate <= Date.now()) {
                console.log('Token is expiring, refreshing...');
                const { credentials } = await oauth2Client.refreshAccessToken();
                oauth2Client.setCredentials(credentials);
                // Update session with new tokens
                req.session.tokens = credentials;
                req.session.save((err) => {
                    if (err) {
                        console.error('Session save error after refresh:', err);
                    }
                    console.log('Tokens after refresh:', credentials);
                });
            }

            const drive = google.drive({ version: 'v3', auth: oauth2Client });
            const response = await drive.files.list({
                q: `'${folderId}' in parents and trashed = false`,
                fields: 'files(id, name, mimeType)',
            });

            const files = response.data.files;

            if (files.length) {
                res.json(files);
            } else {
                res.send('No files found in the folder.');
            }
        } catch (error) {
            console.error('Error listing files:', error);
            res.status(500).send(`Internal Server Error: ${error.message}`);
        }
    }
}

module.exports = new AdminController();
