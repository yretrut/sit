const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();

// в этой лабе функции такие же как и в 4, только здесь данные храняться не в массиве, а в формате json-файла
let students = [];

router.get('/students', (req, res) => {
    const jsStudent = fs.readFileSync('student.json', 'utf-8');
    res.send(jsStudent);
});

router.post('/students', (req, res) => {
    const addStudent = {id, firstName, lastName, group} = req.body;
    students.push(addStudent);
    fs.writeFile('student.json', JSON.stringify(students), () => {});

});

router.get('/students/:id', (req, res) => {
    const id = Number(req.params.id);
    const content = fs.readFileSync("student.json", "utf8");
    const students = JSON.parse(content);
    const foundStudent = students.find((student) => student.id === id);
    res.send(foundStudent);
});

router.put('/students/:id', (req, res) => {
    const id = Number(req.params.id);
    const content = fs.readFileSync("student.json", "utf8");
    const students = JSON.parse(content);
    const student = students.find((student) => student.id === id);
    student.firstName = req.body.firstName;
    student.lastName = req.body.lastName;
    student.group = req.body.group; 
    fs.writeFile('student.json', JSON.stringify(students), () => {});
});

router.delete('/students/:id', (req, res) => {
    const id = Number(req.params.id);
    const content = fs.readFileSync("student.json", "utf8");
    var students = JSON.parse(content);
    students = students.filter((student) => student.id !== id);
    fs.writeFile('student.json', JSON.stringify(students), () => {});
});

module.exports = router;
