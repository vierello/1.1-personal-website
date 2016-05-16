//alert('Beagles are great');


function changeImage() {
  var image = document.getElementById('myImage');
  if (image.src.match("adult")) {
    image.src = "/Users/V/Documents/code/1.1-personal-website/assets/puppy.jpg";
  } else {
    image.src = "/Users/V/Documents/code/1.1-personal-website/assets/adult.jpg";
  }
}

function blink() {
 var blinks = document.getElementsByTagName('blink');
  for (var i = blinks.length - 1; i >= 0; i--) {
    var s = blinks[i];
    s.style.visibility = (s.style.visibility === 'visible') ? 'hidden' : 'visible';
  }
  window.setTimeout(blink, 1000);
}
if (document.addEventListener) document.addEventListener("DOMContentLoaded", blink, false);
else if (window.addEventListener) window.addEventListener("load", blink, false);
else if (window.attachEvent) window.attachEvent("onload", blink);
else window.onload = blink;
