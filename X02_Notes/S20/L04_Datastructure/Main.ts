namespace A4 {
    // --------------------- Daten in einzelnen Variablen
    // let studi0name: string = "Wieck";
    // let studi0firstname: string = "Dominik";
    // let studi0matrikel: number = 123654;

    // let studi1name: string = "Hänle";
    // let studi1firstname: string = "Dominik";
    // let studi1matrikel: number = 666999;

    // --------------------- Daten in einzelnen Variablen vom Typ Array, die jeweils einen Studi beschreiben
    // let studi0: (string | number)[] = ["Wieck", "Dominik", 123456];
    // let studi1: (string | number)[] = ["Hänle", "Dominik", 666999];
    // logStudi(studi0);
    // logStudi(studi1);

    // --------------------- Daten in einem Array, welches als Elemente Arrays enthält, die jeweils einen Studi beschreiben
    let studi: (string | number)[][] = [];

    studi.push(["Wieck", "Dominik", 123456]);
    studi.push(["Hänle", "Dominik", 666999]);
    studi.push(["Weibert", "Angelina", 987654]);

    console.group("for-in");
    for (let i in studi) {
        console.log(i);
        logStudi(studi[i]);
    }
    console.groupEnd();

    console.group("for-of");
    for (let s of studi) {
        logStudi(s);
    }
    console.groupEnd();

    function logStudi(_studi: (string | number)[]): void {
        console.log(_studi[0], _studi[1], _studi[2]);
    }

    // --------------------- Interface, das eine gut lesbare und sichere Struktur für einen Studi festlegt 

    interface Studi {
        name: string;
        firstname: string;
        matrikel: number;
    }

    // --------------------- Daten in einzelnen Variablen vom Typ Studi, die jeweils einen Studi beschreiben
    // let oStudi0: Studi = {name: "Wieck", firstname: "Dominik", matrikel: 123456};
    // let oStudi1: Studi = {name: "Hänle", firstname: "Dominik", matrikel: 666999};
    // let oStudi2: Studi = {name: "Weibert", firstname: "Angelina", matrikel: 987654};

    // --------------------- Daten in einem Array, welches als Elemente Studi-Objekte enthält
    let oStudis: Studi[] = [];

    oStudis.push({ name: "Wieck", firstname: "Dominik", matrikel: 123456 });
    oStudis.push({ name: "Hänle", firstname: "Dominik", matrikel: 666999 });
    oStudis.push({ name: "Weibert", firstname: "Angelina", matrikel: 987654 });

    console.table(oStudis);

    console.group("fetch by key");
    for (let s of oStudis) {
        logStudiObject(s);
    }
    console.groupEnd();

    function logStudiObject(_studi: Studi): void {
        console.log(_studi.name, _studi.firstname, _studi.matrikel);
    }
}