const mongoose = require('mongoose');
const Doctor = require('../models/doctorModel');

async function addDoctor(req,res){
    try {
        const newDoctor = new Doctor(req.body)
        result = await newDoctor.save()
       return res.status(200).send(result)
    } catch (error) {
        
       return res.status(500).send(error)
    }
}

async function loginDoctor(req,res){
    try {
        const {doctorEmail,doctorPassword} = req.body;
        const doctor = await Doctor.findOne({doctorEmail});
        if(!doctor || !(await doctor.comparePassword(doctorPassword))){
         
            return res.status(400).send({message:"user does not exist"});
        }
        return res.status(200).send({message:"Doctor Login Successful"});
        
    } catch (error) {  
        
       return res.status(500).send(error);
    }
    
}

async function getAllDoctors(req,res){
    try {
        const result = await Doctor.find();
        
       return res.status(200).send(result);
    } catch (error) {
        
       return res.status(500).send(error);
    }
}

module.exports = {addDoctor,loginDoctor,getAllDoctors};