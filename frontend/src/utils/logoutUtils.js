export const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("role");
};

export const handleExpire = () => {
    console.log("happening")
    if (window.confirm("Session Expired! Please login again!")) {
        handleLogout();
    }
}