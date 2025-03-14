// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file. Use the fs module to read the file and send it to the client.
// The comments.html file should be in the same directory as the comments.js file.
// You can use the following code to create the server:
// const http = require('http');
// const fs = require('fs');
// const server = http.createServer((req, res) => {         fs.readFile('comments.html', (err, data) => {             res.writeHead(200, {'Content-Type': 'text/html'});             res.write(data);             res.end();         });     }); server.listen(3000, () => {     console.log('Server is running on port 3000'); });
// The comments.html file should contain the following HTML code:   <!DOCTYPE html>     <html>     <head>         <title>Comments</title>     </head>     <body>         <h1>Comments</h1>         <ul>             <li>Comment 1</li>             <li>Comment 2</li>             <li>Comment 3</li>         </ul>     </body>     </html>  When you run the server, you should see the comments.html file in the browser.  The server should be running on port 3000.          const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
    fs.readFile('comments.html', (err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    });
});     