const express = require ('express');
const cors = require ('cors');
const mongoose = require('mongoose')
const PassengerModel = require('./models/Passenger');
const AirplaneModel = require('./models/Aircraft');



const app = new express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://2200033309:Waluigi@cluster0.0fifzmf.mongodb.net/MRD?retryWrites=true&w=majority&appName=Cluster0/MRD");

// const tesst = 'qwe'

app.get('/getUsers', async (req, res) => {
    PassengerModel.find()
    .then(passengers => res.json(passengers))
    .catch(err => res.json(err))
})

app.get('/getFlights', async (req, res) => {
    AirplaneModel.find()
    .then(passengers => res.json(passengers))
    .catch(err => res.json(err))
})


app.get('/home', (req, res)=> {
    res.send("Home Page");
})

app.post('/sign', async (req, res) => {
    const user = new PassengerModel(req.body);
    console.log('i')
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

app.post('/login', async(req, res)=>{
    const{email,password}=req.body

    try{
        const check=await PassengerModel.findOne({email:email})

        if(check){
            const checkpas = await PassengerModel.findOne({email:email,password:password})
            if(checkpas){
                res.json(checkpas)
            }
            else{
                res.json("Password Incorrect")
            }
        }
        else{
            res.json("NotExisting")
        }
    }
    catch(e){
        console.log(e);
    }

})


app.listen(8081,()=>(console.log("You should be running")));

