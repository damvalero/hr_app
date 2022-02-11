const Employee = require('../models/employee');
// const { cloudinary } = require('../configs/cloudinary-setup');

// get all
const getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.json({ employees });
    } catch (err) {
        res.status(500).json({ message: message.err })
    }
}

// get one
const getEmployeeId = async (req, res, next) => {
    const employeeId = req.params.id;

    let employee;
    try {
        employee = await Employee.findById(employeeId);
    } catch (err) {
        res.status(500).json({ message: err.message })
        return next(err)
    }
    if (employee == null) {
        return res.status(404).json({ message: "Could not find employee for this id" })
    }

    res.status(200).json(employee);
}

// create one
const createEmployee = async (req, res) => {
    const { name, lastname, age, position, gender, civil,
        address, highestDegree, profession, experience,
        languages } = req.body;

    const createdEmployee = new Employee({
        name, lastname, age, position, gender, civil,
        address, highestDegree, profession, experience,
        languages
    })
    try {
        const newEmployee = await createdEmployee.save();
        res.status(201).json({ employee: newEmployee });
    } catch (err) {
        res.status(400).json({ message: err })
    }
}

// delete
const deleteEmployee = async (req, res) => {
    const employeeId = req.params.id;

    let employee;
    try {
        employee = await Employee.findById(employeeId);
    } catch (err) {
        res.status(500).json({ message: err.message })
        return next(err)
    }
    if (employee == null) {
        return res.status(404).json({ message: "Could not find employee for this id" })
    }

    try {
        await employee.remove()
    } catch (err) {
        res.status(500).json({ message: err.message })
        return next(err)
    }

    res.status(200).json({ message: "Employee deleted." });
}

//update
const updateEmployee = async (req, res) => {
    const { name, lastname, age, position, gender, civil,
        address, highestDegree, profession, experience,
        languages } = req.body;
    const employeeId = req.params.id;
    const employeeChanges = { name, lastname, age, position, gender, civil,
        address, highestDegree, profession, experience,
        languages };

    let employee;
    try {
        employee = await Employee.findByIdAndUpdate(employeeId, employeeChanges)
    } catch (err) {
        res.status(500).json({ message: err.message });
        return next(err)
    }

    res.status(200).json({ message: "Employee updated" })
}

exports.getAllEmployees = getAllEmployees;
exports.getEmployeeId = getEmployeeId;
exports.createEmployee = createEmployee;
exports.deleteEmployee = deleteEmployee;
exports.updateEmployee = updateEmployee;