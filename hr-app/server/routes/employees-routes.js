const express = require('express');

const employeesControllers = require('../controllers/employees-controllers');
// const fileUpload = require('../configs/cloudinary-setup');
const router = express.Router();

// get all 
router.get('/', employeesControllers.getAllEmployees);
// get one
router.get('/:id', employeesControllers.getEmployeeId)
// create one
router.post('/', employeesControllers.createEmployee);
// update one
router.put('/:id', employeesControllers.updateEmployee);
// delete one
router.delete('/:id', employeesControllers.deleteEmployee);

module.exports = router;