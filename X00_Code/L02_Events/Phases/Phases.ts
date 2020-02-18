namespace L02_Phases {
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        // create button and add to DOM
        let button: HTMLButtonElement = document.createElement("button");
        button.textContent = "Click";
        document.body.appendChild(button);

        // install listeners to all ancestors of button in DOM
        installListenersInDOM(button);

        // window is not a member of the DOM-tree, so install listeners separately  
        window.addEventListener("click", handleClick);
        window.addEventListener("click", handleClick, true);
    }

    function handleClick(_event: Event): void {
        if (_event.currentTarget == window && _event.eventPhase == 1)
            console.warn("Event started: " + _event.type);
        console.groupCollapsed("Event-Phase = " + _event.eventPhase + " | CurrentTarget = " + _event.currentTarget);
        console.log("Target: " + _event.target);
        console.log("Path: " + _event.composedPath());
        console.groupEnd();
    }

    function installListenersInDOM(_target: HTMLElement): void {
        while (true) {
            _target.addEventListener("click", handleClick);
            _target.addEventListener("click", handleClick, true);
            if (_target.parentElement)
                _target = _target.parentElement;
            else
                break;
        }
    }
}