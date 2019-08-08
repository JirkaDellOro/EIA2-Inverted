interface Student {
	name: string;
	mat: number;
	enr: boolean;
}

interface Professor {
	name: string;
}

interface Course {
	name: string;
	students: Student[];
	prof: Professor;
}

interface Faculty {
	name: string;
	courses: Course[];
}

let f: Faculty =
{
	name: "DM",
	courses: [
		{
			name: "EIA2",
			prof: {
				name: "Lukas Scheuerle"
			},
			students: [
				{
					name: "Anna",
					mat: 12345,
					enr: true
				},
				{
					name: "Tobias",
					mat: 54321,
					enr: true
				}
			]
		}
	]
};


console.log(JSON.stringify(f, null, "    "));