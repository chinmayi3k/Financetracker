import express from 'express';

import {Trans} from '../models/Transaction.js';

export const router=express.Router();


router.get('/',async(req,res)=>{
    try{const transaction=await Trans.find();
    res.json(transaction); }
    catch(err){
        res.send(err);
    }
 });


router.post('/',async(req,res)=>{
    const trans_new= new Trans({
        tran_id:req.body.tran_id,
        type:req.body.type,
        budget:req.body.budget

    })
    try{
        const t1=await trans_new.save();
        res.send(t1);
    }
    catch(err){
        res.send(err);
    }
 });
