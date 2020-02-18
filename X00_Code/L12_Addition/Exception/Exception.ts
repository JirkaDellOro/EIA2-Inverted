namespace L12_Exception {

    interface Greet {
        greet: string;
    }

    let greets: Greet[] = [{ greet: "Hi" }, { greet: "Hallo" }, { greet: "Servus" }];

    try {
        greet();
    } catch (_error) {
        console.log("Catch in caller:", _error);
    }

    function greet(): void {
        try {
            console.log("Try");
            let input: string | null = prompt("Lass dich grüßen!", "Gib hier eine Zahl ein");
            let greet: string = greets[Number(input)].greet;
            alert(greet);
            return;
        } catch (_error) {
            alert("Tschüss!");
            console.log("Catch in greet:", _error);
            throw (new Error("Mein Fehler..."));
        } finally {
            console.log("Finally: Das mach' ich trotzdem noch...!");
        }
        console.log("Done"); // diese Anweisung wird nie ausgeführt...
    }
}