const express = require('express');
const router = express.Router();
const Employee = require('../models/employee')

// getting all 
router.get('/', async (req, res) => {
    try {
        const employees = await Employee.find();
        res.json({employees});
    } catch (err) {
        res.status(500).json({message: message.err})
    }
})
// getting one
router.get('/:id', (req, res) => {
    res.send(req.params.id)
})
// creating one
router.post('/', async (req, res) => {
    const employee = new Employee({
        name: req.body.name,
        lastname: req.body.lastname,
        age: req.body.age,
        position: req.body.position,
    })
    try {
        const newEmployee = await employee.save();
        res.status(201).json({newEmployee});
    } catch (err) {
        res.status(400).json({message: message.err})
    }
})
// updating one
router.patch('/:id', (req, res) => {
    
})
// delete one
router.delete('/:id', (req, res) => {
    
})

module.exports = router;