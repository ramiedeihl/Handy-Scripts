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

// add multiple values to a cookie

document.cookie = "myCookie=" + JSON.stringify({foo: 'bar', baz: 'poo'});

// CHECK FOR COOKIE

if (document.cookie.indexOf("tt_typeahead") >= 0) {
  // They've been here before.
  alert("hello again");
	}
	
	else {
  // set a new cookie

  document.cookie = "tt_typeahead=products; expires=Thu, 18 Dec 2015 12:00:00 UTC";
  alert("this is your first time");
  window.location.reload();
  
}
