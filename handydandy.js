// PIXI JS from CDN

<script src="https://cdnjs.cloudflare.com/ajax/libs/pixi.js/4.5.1/pixi.min.js"></script>



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

// ---------------------------------------
// XMLHttpRequest

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       document.getElementById("demo").innerHTML = xhttp.responseText;
    }
};
xhttp.open("GET", "filename", true);
xhttp.send();

// ---------------------------------------
// JSON P example

<html>
    <head>
    </head>
    <body>
        <div id = 'twitterFeed'></div>
        <script>
        function myCallback(dataWeGotViaJsonp){
            var text = '';
            var len = dataWeGotViaJsonp.length;
            for(var i=0;i<len;i++){
                twitterEntry = dataWeGotViaJsonp[i];
                text += '<p><img src = "' + twitterEntry.user.profile_image_url_https +'"/>' + twitterEntry['text'] + '</p>'
            }
            document.getElementById('twitterFeed').innerHTML = text;
        }
        </script>
        <script type="text/javascript" src="http://twitter.com/status/user_timeline/padraicb.json?count=10&callback=myCallback"></script>
    </body>
</html>