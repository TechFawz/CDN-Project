const express = require('express');
const app = express();
const fetch = require('node-fetch');
const PORT = 8080;
const mongoose = require("mongoose");
const  cors = require('cors');
const bodyParser = require('body-parser');

let REQUEST_COUNT = 0

app.use(cors());
app.use(bodyParser.json());

app.post('/', (req, res) => {    
    REQUEST_COUNT++;
    const file = req.body.params.fileName
    const data = {
        "file" : file
    }
    
    if(REQUEST_COUNT%2 == 0){
        fetch('http://localhost:8000/', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
        .then((json) => {         
            console.log(json.path)
            res.sendFile(file, {root: json.path})
        }) 
        .catch(err => console.log(err));
    } else {
        fetch('http://localhost:4200/', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
        .then((json) => {     
            console.log(json.path)       
            res.sendFile(file, {root: json.path})
        })        
        .catch(err => console.log(err));
    }
})

app.get("/videos", async (req, res) => {
    const result = {}
        const videos = await  DataBase.collection("videos").find({});
        await videos.forEach(video => {
            result[video._id] = video
        })
        res.send(result);
    })

app.get("/admin_login", (req, res) => {

    const data = req.query;
    DataBase.collection("Admin_Details").findOne({LoginId:data.id , password: data.password},(err,result)=>{
        if(err)throw err

        else
        {
            if(result!=null)
            {
                res.send({status:200,name:result.name});
            }
            else
            {
                res.send({status:401,name:""});
            }
        }
  
    })
})

app.get("/user_login", (req, res) => {

    const data = req.query;
    DataBase.collection("User_Details").findOne({LoginId:data.id , password: data.password},(err,result)=>{
        if(err)throw err
        else
        {
            if(result!=null)
            {
                res.send({status:200,name:result.name});
            }
            else
            {
                res.send({status:401,name:""});
            }
        }
    })
})

var DataBase;

function DB_CONECTION()
{
    mongoose.connect("mongodb://localhost:27017/cdn-backend", (err, db) => {
        if (err)
        {
            console.log("ERROR");
            DB_CONECTION();
        }

        else {
            DataBase = db;
            console.log("mongodb running successfully");
        }
    });
}

app.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`)
    DB_CONECTION();
})