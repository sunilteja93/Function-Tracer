// Code to inject tracecalls.js code in the webpage 


//Creates the script tag
var s = document.createElement('script');

//Gets the tracecalls.js
s.src = chrome.extension.getURL('tracecalls.js');

s.onload = function() 
{
    this.parentNode.removeChild(this);
};

(document.head || document.documentElement).appendChild(s);