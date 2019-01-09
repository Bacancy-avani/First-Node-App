// Modules
const http = require('http');
const fs = require('fs');
const url = require('url');

// Server configuration
const hostname = '127.0.0.1';
const port = 8080;

// Render page
     
    const server = http.createServer(function(request, response) {  
    	let reqUrl = url.parse(request.url).pathname; 
    	console.log(reqUrl)
    	if(reqUrl === '/') {
    		reqUrl = './index.html'
    	} else if(reqUrl === '/favicon.ico') {
    		reqUrl = '.'+reqUrl;
    	} else {
    		reqUrl = '.'+reqUrl;
    	}
    	

    	let query = url.parse(request.url,true).query;
    	if(Object.keys(query).length !== 0) {
    		response.end(`<h3>Welcome!!! ${query.name}</h3>`);
    		//response.end();
    		//server.close();
    	} else {
    		fs.readFile(reqUrl, function (err, html) {
		   		if (err) {
		        	throw err; 
		   		}  
		        response.writeHeader(200, {"Content-Type": "text/html"});  
		        response.write(html);  
		        response.end();  
	     	});
    	}

    	
     	
    }).listen(port, hostname, () => {
    	// Console
	  	console.log(`Server running at http://${hostname}:${port}/`);
		
	
});
    