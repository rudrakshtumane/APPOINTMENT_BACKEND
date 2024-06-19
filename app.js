const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/api.js');
const app = express();  
const port = 5001;

app.use(bodyParser.json());
app.use(express.json());

connectDB = async ()=>{
    try {
        await mongoose.connect('mongodb+srv://rudrakshtumane100:vOGC5McrkxGRw0uU@cluster0.jiq2wbt.mongodb.net/APPOINTMENT_BACKEND');
        console.log('database connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:',error);
    }
}
connectDB();

app.use('/api',apiRoutes);
app.listen(port, () => console.log(`server listening on port ${port}!`));
















