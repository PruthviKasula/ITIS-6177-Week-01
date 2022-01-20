/*Creating simple nodeJS server using http in-built module
1.Import the http module
2.Create http server
3.send the reponse
4.listen to server
*/
const http = require("http")
const port = 8080
  
const server = http.createServer((request, response) => {
    response.write("Hello World")
    response.end();
})
  
server.listen(port, () => {
    console.log('Server is running and listening at http://localhost:${port}');
})