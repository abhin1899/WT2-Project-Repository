const { spawn } = require('child_process');
const express = require('express');
const bodyParser = require('body-parser');
const { check, validationResult } = require('express-validator/check');
const fs = require("fs");

const app = express();
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

global.requests = 0;


app.get('/api/v1/test',(req,res) => {
    res.status(200).send("hello node");
});

app.post('/api/v1/compile', [
    // language must not be empty
    check('language').not().isEmpty(),
    // code must not be empty
    check('code').not().isEmpty()
  ], (req, res) => {
    requests++;
    var language = req.body.language; //get language from post
    var code = req.body.code; //get code from post
    var input = req.body.input;

    // console.log(input);
    // console.log(language);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        var output = {"output": "Invalid or Empty Input"};
        res.status(200).send(output);
        console.log("Bad Input Recieved");
    }
    else{
        var stream1 = fs.createWriteStream("temp.c");
        stream1.write(code);

        var stream2 = fs.createWriteStream("temp.txt");
        stream2.write(input);


        const ls = spawn('gcc', ['temp.c','&&','./a.out < temp.txt'],{shell: true});

        // todo set a timeout...

        ls.stdout.on('data', (data) => {
            console.log(`stdout: ${data}`);
            console.log("Code Compiled successfully");
            var output = {"output": data.toString()};
            console.log(output);
            res.status(200).send(output);
        });
          
        ls.stderr.on('data', (data) => {
            console.error(`stderr: ${data}`);
            var output = {"output": data.toString()};
            res.status(200).send(output);
        });
          
        ls.on('close', (code,foo) => {
            console.log(`child process exited with code ${code}`);
        });
          
        
    }
});

app.listen('8080', () => {
    console.log('Server started on port 8080');
});

