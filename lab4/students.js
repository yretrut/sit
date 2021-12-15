const express = require("express");
const router = express.Router();

var students = [];

router.get('/students', (req, res) => {res.send(students);}); // Вывод всех данных о студентах

router.post('/students', (req, res) => { // Ввод информации о студентах
    const newStudent = {id, firstName, lastName, group} = req.body;
    students.push(newStudent);
});

router.get('/students/:id', (req, res) => { // Вывод информации о студенте по его id
    const id = Number(req.params.id);
    const findStudent = students.find((student) => student.id === id);
    res.send(findStudent);
});

router.put('/students/:id', (req, res) => { // Обновление данных о студенте по его id
    const id = Number(req.params.id);
    const student = students.find((student) => student.id === id);
    student.firstName = req.body.firstName;
    student.lastName = req.body.lastName;
    student.group = req.body.group; 
});

router.delete('/students/:id', (req, res) => { // Удаление данных о студенте по его id
    const id = Number(req.params.id);
    students = students.filter((student) => student.id !== id);
});

module.exports = router;