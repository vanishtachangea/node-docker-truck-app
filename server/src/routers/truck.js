const express = require('express');
const router = new express.Router();
const Truck = require('../models/truck');


router.post('/trucks', async(req,res)=>{
    try{
        await Truck.insertMany(req.body, (error,trucks)=>{
            if(error)
            {
                res.status(400).send(error);
            }
            res.status(200).send(trucks);
        })
    }
    catch(e){
        res.status(400).send(e);
    }
})

router.get('/trucks',async (req, res)=>{
    try{
        const trucks = await Truck.find({});
        res.status(201).send(trucks);
    }
    catch(e)
    {
        res.status(500).send();
    }
})

router.get('/trucks/:id',async (req, res)=>{
    try{
        const trucks = await Truck.findById(req.params.id);
        res.status(201).send(trucks);
    }
    catch(e)
    {
        res.status(500).send();
    }
})



router.put('/trucks/:id',async (req, res)=>{
    try{
        const truck = await Truck.findByIdAndUpdate(req.params.id, req.body, {new:true,runValidators:true});
        if(!truck)
        {
            return res.status(404).send();
        }
        res.status(201).send(truck);
    }
    catch(e)
    {
        res.status(500).send();
    }
})

router.delete('/trucks/:id',async (req, res)=>{
    try{
        const truck = await Truck.findByIdAndDelete(req.params.id);
        if(!truck)
        {
            return res.status(404).send();
        }
        res.status(201).send(truck);
    }
    catch(e)
    {
        res.status(500).send();
    }
})

module.exports = router;