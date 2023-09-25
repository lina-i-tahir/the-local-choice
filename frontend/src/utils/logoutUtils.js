export const handleLogout = () => {
    localStorage.clear();
};

export const handleExpire = () => {
    console.log("happening")
    if (window.confirm("Session Expired! Please login again!")) {
        handleLogout();
    }
}