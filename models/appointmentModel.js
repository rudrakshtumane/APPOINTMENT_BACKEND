
const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'Patient', required: true},
    doctorId: {type: mongoose.Schema.Types.ObjectId, ref: 'Doctor',  required: true},
    appointmentDateTime: { type: Date, required: true},
    status: { type: String,  enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending'}
});


// {
//     "patientId":{"$oid" : "666a938f5eb1b85e2b8215c7"},
//     "doctorId":{"$oid" : "666818b20e566d097230eb59"},
//     "appointmentDateTime": "2024-06-18T12:44:01Z",
//     "status": "Pending"
// }



module.exports = mongoose.model('Appointment', appointmentSchema);