// Get the current URL path
var path = window.location.pathname;

// Redirect the user based on the URL path
if (path === "/site1") {
    window.location.href = "site1/index.html";
} else if (path === "/site2") {
    window.location.href = "site2/index.html";
} else {
    // If the path does not match any of the above, redirect the user to the main site
    window.location.href = "index.html";
}

