const express = require ('express');
const cors = require ('cors');
const mongoose = require('mongoose')
const PassengerModel = require('./models/Passenger');
const AirplaneModel = require('./models/Aircraft');



const app = new express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://2200033309:Waluigi@cluster0.0fifzmf.mongodb.net/MRD?retryWrites=true&w=majority&appName=Cluster0/MRD");


app.get('/getUsers', async (req, res) => {
    PassengerModel.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.get('/home', (req, res)=> {
    res.send("Home Page");
})

app.post('/sign', async (req, res) => {
    const user = new PassengerModel(req.body);
    try{
        await user.save()
    }catch(err){
        return console.log(err)
    } 
    })


app.post('/createflight', async (req, res) => {
    console.log("Fligjt landed")
    const planes = new AirplaneModel(req.body);
    try{
        await planes.save()
    }catch(err){
        return console.log(err)
    } 
    })
    // }
    // catch(err){
    //     console.log(err)
    // }


// app.post('/insert', async(req, res)=>{
//     console.log(req.body);
    

//     const{email,password}=req.body

//     try{
//         const check=await collection.findOne({email:email})

//         if(check){
//             res.json("exist")
//         }
//         else{
//             col.insertOne(req.body);
//             res.json("NotExisting")
//         }
//     }
//     catch(e){
//         console.log(e);
//     }

//     res.send("successfully received");
// })

// app.post('/login', async(req, res)=>{
//     const{email,password}=req.body

//     try{
//         const check=await collection.findOne({email:email})

//         if(check){
//             res.json("exist")
//         }
//         else{
//             res.json("NotExisting")
//         }
//     }
//     catch(e){
//         console.log(e);
//     }

// })

// app.get('/showall', async(req,res) => {
//     const result  = await col.find(). toArray();
//     res.send(result);
// })
app.listen(8081,()=>(console.log("You should be running")));

