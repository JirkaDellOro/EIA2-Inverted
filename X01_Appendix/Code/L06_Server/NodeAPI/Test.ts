namespace L06_NodeAPI {
    let x: number = 0
    console.log("Log", x);
    x++;
    console.warn("Warn", x);
    x++;
    console.error("Error", x);

    console.log("Args", process.argv[2]);

    console.log("Computer", process.env.COMPUTERNAME);
    console.log("User", process.env.USERNAME);
    console.log("Port", process.env.PORT);

    process.addListener("exit", handleExit);
    setTimeout(handleTimeout, 2000);

    function handleTimeout(_event: Event): void {
        console.log("Timeout", _event);
    }

    function handleExit(_event: number): void {
        console.log("Exit", _event);
    }

}