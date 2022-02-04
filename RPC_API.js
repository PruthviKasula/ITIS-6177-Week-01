const express = require('express')
const func = express()
const port = 3000
//root route to run a command on terminal
const { exec } = require('child_process');

func.get('/', (request, response) => {
    response.send('First Remote procedure call')
    try{ 
        //EXEC command to open the file explorer in your computer 
        //'start .'-> goes to current project folder
        //'start' -> opens a new cmder termiinal
        //'start C:\\' -> goes to C folder      
        exec('start .', function (err, stdout, stderr) {
            if (err) {
              console.error(`exec error: ${err}`);
              return;
            }
            console.log('Opened file explorer successfully!')
            process.exit(0);
        })
    }catch(exception){
        console.log("ex : "+exception);
        }
})

func.listen(port, () => {
    console.log(`Go to the browser and open http://localhost:${port} and see if it opens file explorer`)  
})