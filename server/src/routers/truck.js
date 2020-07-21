const express = require('express');
const router = new express.Router();
const Truck = require('../models/truck');
const TruckType = require('../models/truckType');


router.post('/trucks', async (req, res) => {
    try {
        await Truck.insertMany(req.body, (error, trucks) => {
            if (error) {
                res.status(400).send(error);
            }
            res.status(200).send(trucks);
        })
    }
    catch (e) {
        res.status(400).send(e);
    }
})


//Get All
//Get /trucks?limit=10&skip=20
router.get('/trucks', async (req, res) => {
    try {
        await Truck.find({}).limit(parseInt(req.query.limit)).skip(parseInt(req.query.skip))
            .populate({path:'truckType', options:{
                limit:2
            } }).populate()
            .exec((error, trucks) => {
                if (error) {
                    res.status(400).send(error);
                }
                res.status(200).send(trucks);
            })
    }
    catch (e) {
        res.status(500).send(e);
    }
})

//Get by TruckTypeId
router.get('/trucks/trucktype/:id', async (req, res) => {
     try {
         await Truck.find({truckType:req.params.id}).limit(parseInt(req.query.limit)).skip(parseInt(req.query.skip))
             .populate('truckType'
 
         )
             .exec((error, trucks) => {
                 if (error) {
                     res.status(400).send(error);
                 }
                 res.status(200).send(trucks);
             })
     }
     catch (e) {
         res.status(500).send(e);
     }
 })
/*
router.get('/trucks', async (req, res) => {
   try {
       const trucks = await Truck.find({});
       res.status(201).send(trucks);
   }
   catch (e) {
       res.status(500).send();
   }
})*/

//Get by TruckId
router.get('/trucks/:id', async (req, res) => {
    try {
        const trucks = await Truck.findById(req.params.id);
        res.status(201).send(trucks);
    }
    catch (e) {
        res.status(500).send();
    }
})

router.put('/trucks/:id', async (req, res) => {
    try {
        const truck = await Truck.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!truck) {
            return res.status(404).send();
        }
        res.status(201).send(truck);
    }
    catch (e) {
        res.status(500).send();
    }
})

router.delete('/trucks/:id', async (req, res) => {
    try {
        const truck = await Truck.findByIdAndDelete(req.params.id);
        if (!truck) {
            return res.status(404).send();
        }
        res.status(201).send(truck);
    }
    catch (e) {
        res.status(500).send();
    }
})

module.exports = router;