# Function-Tracer

Google Chrome Extension to trace javascript active window function calls (Dynamic analysis of javascript)

Components needed : 

- Tracecalls-Extension(Folder)
- icon.png
- inject.js
- manifest.json
- tracecalls.js

Sample File : 

- Inorder to understand the functionality of extension a sample file of a website is stored in the "Samples" folder

Features of the extension :

- The log is saved into a JSON file with the URL and the timestamp and asks for download when the tab is closed, so that the developer can access the log later. 

Directions to install:
 

- Open chrome browser.

- When the browser is open navigate to the top right corner and click the chrome menu.

- Click settings in the menu.

- In the left part under the Chrome name you will find 3 options ->History, ->Extensions and ->Settings

- Select the ->Extensions and the extensions page appears.

- Check the developer mode option and then hit the "Load unpacked extension..." button

- A file selector appears. From that select the folder "Tracecalls-Extension" 

- The extension is now installed successfully and the logo of extension appears in the top right corner.

- Open any webpage and hit "F12" to see the console log. 

- All active functions are logged in the console with the name of the function and the parameters.

- An added feature of this extension is that the console log will be saved into a file and then asks for download on tab close and when we migrate from one tab to another.

- For ease of identification the log file is saved with the current url of the webpage and the then time stamp is added to the filename.
