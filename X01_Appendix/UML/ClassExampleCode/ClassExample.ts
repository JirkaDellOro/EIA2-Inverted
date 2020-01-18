namespace ClassExample {
  interface Course {
    name: string;
    docent?: Docent;
    students: Student[];
  }

  class Person {
    public name: string;
    protected age: number;
    public constructor(_name: string, _age: number) {
      this.name = _name;
      this.age = _age;
    }
    public getInfo(): string {
      return this.name;
    }
  }

  class Docent extends Person {
    private skills: string[] = [];
    public getInfo(): string {
      return "Prof. " + super.getInfo() + ", age: " + this.age;
    }
    public addSkill(_skill: string): void {
      this.skills.push(_skill);
    }
  }

  class Student extends Person {
    private static nextNumber: number = 0;
    private matriculation: number;
    public constructor(_name: string, _age: number) {
      super(_name, _age);
      this.matriculation = Student.nextNumber;
      Student.nextNumber++;
    }
    public getInfo(): string {
      return this.matriculation + ": " + super.getInfo();
    }
  }

  let courses: Course[] = [];
  let course: Course = { name: "Physics", students: [] };
  course.docent = new Docent("Einstein", 71);
  course.docent.addSkill("Relativity");

  let student: Student = new Student("Heisenberg", 49);
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
}