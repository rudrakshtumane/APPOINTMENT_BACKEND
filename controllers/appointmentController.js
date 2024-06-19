const mongoose = require('mongoose');
const Appointment = require('../models/appointmentModel');



async function addAppointment(req, res){
    try{
        const newAppointment = new Appointment(req.body)
        result = await newAppointment.save()

      return  res.status(200).send({message: "appointment created successfully", result})
    }
    catch(error){
     return   res.status(500).send(error)
    }
   
};

async function getAllAppointments(req,res){
    try {
        const result = await Appointment.find();
        
       return res.status(200).send(result);
    } catch (error) {
        
       return res.status(500).send(error);
    }
}

async function getAppointmentByPatientId(req, res) {
    
    try {
        const patientId = req.query.patientId;
        console.log(patientId);
        const result = await Appointment.find({patientId});
         res.status(200).send(result);

    } 
    catch (error) {
         res.status(500).send(error);
    }
}


async function getAppointmentByDoctorId(req, res) {
    const doctorId = req.query.doctorId;
    try {
        const result = await Appointment.find({ doctorId});
        return res.status(200).send(result);

    } 
    catch (error) {
        return res.status(500).send(error);
    }
}

async function updateAppointment(req,res){
  
    try {
        const {id} = req.params;
        const {status} = req.body;
        if(!['Pending','Accepted','Rejected'].includes(status)){
            return res.status(400).json({message: "Invalid status"});
        }
        const updatedAppointment = await Appointment.findByIdAndUpdate(
            id,
            {status},
            {new: true}
        );
    if(!updatedAppointment){
        return res.status(404).json({message: "Appointment not found"});
    }
    res.status(200).json(updatedAppointment);
    } catch (error) {
        console.error('Error updating appointment:',error);
        if(error instanceof mongoose.Error.ValidationError){
            res.status(400).json({message: 'Validation Error', details: error.errors});
        } else if (error instanceof mongoose.Error.CastError){
            res.status(400).json({message: 'Invalid ID format', details: error.errors});
        } else {
            res.status(500).json({message: 'Internal server error'});
        }
    }
};

async function deleteAppointment(req,res){
    try {
        const result = await Appointment.findByIdAndDelete(req.params.id);
        return res.status(200).send({message: "Appointment deleted successfully", result});
    } catch (error) {
        return res.status(500).send(error);
    }
}

module.exports = {
    addAppointment,
    getAppointmentByPatientId,
    getAppointmentByDoctorId,
    getAllAppointments,
    updateAppointment,
    deleteAppointment

}