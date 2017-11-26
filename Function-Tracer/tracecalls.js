//To save the console log to a file and download it.

(function(console){

    console.save = function(data, filename){

        if(!data) {
            console.error('Console.save: No data')
            return;
        }

        if(!filename) filename = 'console.json'

        if(typeof data === "object"){
            data = JSON.stringify(data, undefined, 4)
        }

        var blob = new Blob([data], {type: 'text/json'}),
            e    = document.createEvent('MouseEvents'),
            a    = document.createElement('a')

        a.download = filename
        a.href = window.URL.createObjectURL(blob)
        a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':')
        e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
        a.dispatchEvent(e)
    }
})(console)


// window.location.href returns the current url..
var urlname = "Active Javascript Fucntions of : " + window.location.href;
var filename = window.location.href;

//Loop for window object

for (var prop in window) 
{  
  


	if (typeof(window[prop]) === 'function')  
	{
    
		(function(prop) 
		{
      
			var original_prop = window[prop];
      
			window[prop] = function() 
			{ 
				//var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
                                //var ARGUMENT_NAMES = /([^\s,]+)/g;
                                //var fnStr = original_prop.toString().replace(STRIP_COMMENTS, '');
                                //var result = fnStr.slice(fnStr.indexOf('(')+1, fnStr.indexOf(')')).match(ARGUMENT_NAMES);
                                var par = arguments[1];
				urlname+= "\r\n"+"Function Name :  "+prop+ "\r\n"+"Parameters : " + par +"\r\n";
				console.log("Function Name : " + prop);
                                console.log("Parameters : " + par); 
				return original_prop.apply(window, arguments); 
			}
    
		})(prop);
  
	}


}

window.onbeforeunload = function(){

//To print the time and date so that identifying the data becomes easy..
var currentdatetime= new Date,
    dformat = [currentdatetime.getMonth()+1,
               currentdatetime.getDate(),
               currentdatetime.getFullYear()].join('/')+' '+
              [currentdatetime.getHours(),
               currentdatetime.getMinutes(),
               currentdatetime.getSeconds()].join(':');
console.save(urlname,filename+"-"+currentdatetime+".json");
}




