const express = require('express');
const axios = require('axios');
const mongoose = require('mongoose');
const Room = require('../models/Room'); // Path to your Vehicle model
const apiKey = process.env.API_KEY;

const router = express.Router();


// Protected route for vehicle registration lookup
router.get('/classic',  async (req, res) => {
    // const roomcode = req.params.roomcode; // Capture the input parameter

    try{
        const result = await axios.get(`https://apihubs.in/api/api?roomcode=&roomtype=0&apikey=${apiKey}`);
        res.json({
            "error": "false",
            "code": "200",
            "message": "data found",
            "data" : result.data.data.data
        });

    }catch(err){
        // console.log(err)
        res.json({
            "error": "true",
            "code": "500",
            "message": "Data Not found",
            "data" : ''
        });
    }
    
});


// Protected route for vehicle registration lookup
router.get('/popular',  async (req, res) => {
    // const roomcode = req.params.roomcode; // Capture the input parameter

    try{
        const result = await axios.get(`https://apihubs.in/api/api?roomcode=&roomtype=1&apikey=${apiKey}`);
        res.json({
            "error": "false",
            "code": "200",
            "message": "data found",
            "data" : result.data.data.data
        });

    }catch(err){
        // console.log(err)
        res.json({
            "error": "true",
            "code": "500",
            "message": "Data Not found",
            "data" : ''
        });
    }
    
});


// Protected route for vehicle registration lookup
router.get('/quick',  async (req, res) => {
    // const roomcode = req.params.roomcode; // Capture the input parameter

    try{
        const result = await axios.get(`https://apihubs.in/api/api?roomcode=&roomtype=2&apikey=${apiKey}`);
        res.json({
            "error": "false",
            "code": "200",
            "message": "data found",
            "data" : result.data.data.data
        });

    }catch(err){
        // console.log(err)
        res.json({
            "error": "true",
            "code": "500",
            "message": "Data Not found",
            "data" : ''
        });
    }
    
});



// Protected route for vehicle registration lookup
router.get('/result/:roomcode',  async (req, res) => {
    const roomcode = req.params.roomcode; // Capture the input parameter

    try{
        const result = await axios.get(`https://apihubs.in/api/api?roomcode=${roomcode}&roomtype=result&apikey=${apiKey}`);
        res.json({
            "error": "false",
            "code": "200",
            "message": "data found",
            "data" : result.data.data.data
        });

    }catch(err){
        // console.log(err)
        res.json({
            "error": "true",
            "code": "500",
            "message": "Data Not found",
            "data" : ''
        });
    }
    
});

module.exports = router;
