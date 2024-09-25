"use strict";
var ClassExample;
(function (ClassExample) {
    class Person {
        name;
        age;
        constructor(_name, _age) {
            this.name = _name;
            this.age = _age;
        }
        getInfo() {
            return this.name;
        }
    }
    class Docent extends Person {
        skills = [];
        getInfo() {
            return "Prof. " + super.getInfo() + ", age: " + this.age;
        }
        addSkill(_skill) {
            this.skills.push(_skill);
        }
    }
    class Student extends Person {
        static nextNumber = 0;
        matriculation;
        constructor(_name, _age) {
            super(_name, _age);
            this.matriculation = Student.nextNumber;
            Student.nextNumber++;
        }
        getInfo() {
            return this.matriculation + ": " + super.getInfo();
        }
    }
    let courses = [];
    let course = { name: "Physics", students: [] };
    course.docent = new Docent("Einstein", 71);
    course.docent.addSkill("Relativity");
    let student = new Student("Heisenberg", 49);
    course.students.push(new Student("Hawking", 8), student);
    courses.push(course);
    courses.push({
        name: "Art",
        students: [student, new Student("Dali", 46)]
    });
    for (let course of courses) {
        console.log("Course: " + course.name);
        if (course.docent)
            console.log("• Docent: " + course.docent.getInfo());
        else
            console.warn("• No docent assigned to this course");
        for (let student of course.students)
            console.log("• Student " + student.getInfo());
    }
})(ClassExample || (ClassExample = {}));
//# sourceMappingURL=ClassExample.js.map