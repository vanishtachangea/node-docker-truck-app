const express = require('express');
const router = new express.Router();
const User = require('../models/user');

router.get('/users', async (req, res) => {
    try {
        const users = await User.find({}).limit(parseInt(req.query.limit)).skip(parseInt(req.query.skip));
        res.status(201).send(users);
    }
    catch (e) {
        res.status(500).send();
    }
})

router.post('/users', async (req, res) => {
    const user = new User(req.body);
    try {
        await user.save();
        res.status(201).send(user);
    }
    catch (e) {
        res.status(400).send(e);
    }
})
module.exports = router;