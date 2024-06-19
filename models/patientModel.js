const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const patientSchema = mongoose.Schema({
    patientName : { type: String, required: false},
    patientPhoneNumber : { type: String, required: false},
    patientEmail : { type: String, required: false},
    patientPassword : { type: String, required: false},
    patientAddress : { type: String, required: false},
})

patientSchema.pre('save',async function(next){
    const Patient = this;
    if(Patient.isModified('patientPassword')){
        Patient.patientPassword = await bcrypt.hash(Patient.patientPassword, 6);
    }
    next();
});

patientSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.patientPassword);
}




module.exports = mongoose.model('Patient', patientSchema);



// {
//     "patientName" : "patient1",
//     "patientPhoneNumber" : "123456",
//     "patientEmail" :  "patient1@gmail.com",
//     "patientPassword" : "patient1",
//     "patientAddress" : "pune"
// }