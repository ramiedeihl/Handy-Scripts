//One time page refresh after first page load
window.onload = function() {
    if(!window.location.hash) {
        window.location = window.location + '#loaded';
        window.location.reload();
    }
}
// ------------------------------------------

// Test for variable

if (typeof pagetype === 'undefined') {
    // pagetype doesn't exist
}

// ------------------------------------------