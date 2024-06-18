export const isAdminSubdomain = () => {
    const host = window.location.host; // e.g., admin.domainname.com
    const subdomain = host.split('.')[0]; // 'admin'
    return subdomain === 'admin';
};
