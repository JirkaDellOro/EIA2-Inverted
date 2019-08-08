let f = {
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
//# sourceMappingURL=JSON_Beispiel.js.map