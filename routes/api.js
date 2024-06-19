const  express = require('express');
const router = express.Router();
const doctorController = require('../controllers/doctorController.js');
const patientController = require('../controllers/patientController.js');
const appointmentController = require('../controllers/appointmentController.js');


// doctor routes 
router.post('/addDoctor', doctorController.addDoctor);

router.post('/loginDoctor', doctorController.loginDoctor);

router.get('/getAllDoctors', doctorController.getAllDoctors);


 
// patient routes
router.post('/addPatient', patientController.addPatient);

router.post('/loginPatient', patientController.loginPatient);

router.get('/getAllPatient', patientController.getAllPatient);


// appointment routes
router.post('/addAppointment', appointmentController.addAppointment);

router.get('/getAllAppointments', appointmentController.getAllAppointments);

router.get('/getAppointmentByPatientId', appointmentController.getAppointmentByPatientId);

router.get('/getAppointmentByDoctorId', appointmentController.getAppointmentByDoctorId);

router.put('/updateAppointment/:id', appointmentController.updateAppointment);


module.exports = router;

