import express from 'express';
import mongoose from 'mongoose';
import {router} from './router/Endpoints.js';

        const app=express();
        app.use(express.json());
       
        const url="mongodb://localhost/InvestmentTracker";
        mongoose.connect(url,{useNewUrlParser:true});
        const con=mongoose.connection;
        con.on('open',()=>console.log("connected to db"));


        const port=process.env.PORT||6600
        app.listen(port,()=>{console.log(`listening started ${port}`)});

        app.use('/Transactions',router);
