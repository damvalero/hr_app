const mongoose =require('mongoose');

const employeeSchema = new mongoose.Schema({
name: {
    type: String,
    required: true
},
lastname: {
    type: String,
    required: true
},
age: {
    type: String,
    required: true
},
position: {
    type: String,
    required: true
},
// hiredDate: {
//     type: Date,
//     required: true,
//     default: Date.now,
// },
});

//model accept two values first name of the model in the db, second the schema
module.exports = mongoose.model('Employee', employeeSchema)
