const express = require('express');
const fs = require("node:fs");
const path = require("node:path")
const { findPackageJSON } = require('node:module');


const app = express(); 

class Server {

    constructor(port)
    {
        console.log("Construct Server Instance")
        this.port = port;
        this.runServer();
    }
    

    pullQuestions(path)
    {
        fs.readFile(path, 'utf-8', (err, data) => {
            if (err)
            {
                console.error(err)
                return;
            }
            
            console.log("Read Data from file")

            return JSON.stringify(data);

        })
    }


    async apiQuestions() {
        app.get('/api/getQuestions', async (req, res) => {
            try {
                const data = await this.pullQuestions("questions.json");
                console.log(JSON.stringify(data))
                res.send(JSON.stringify(data));

            } catch (err) {
                console.error(err);
                res.status(500).send("Internal Server Error");
            }
        });
    }



    runServer()
    {
 
        this.apiQuestions();

        app.listen(this.port, () => {
            console.log('Server is running on http://localhost:' + this.port);  
        });

    }

}


const server = new Server(8080);





