namespace L12_DragDrop {
    window.addEventListener("load", hndLoad);
    let drag: HTMLElement;

    function hndLoad(_event: Event): void {
        console.log("Start DragDrop");

        drag = <HTMLElement>document.querySelector("div#drag span");
        let picker: HTMLInputElement = <HTMLInputElement>document.querySelector("input");
        picker.addEventListener("change", hndChange);

        initDraggable();
        initDroppables();
    }

    function hndChange(_event: Event): void {
        drag.style.backgroundColor = (<HTMLInputElement>_event.target).value;
    }

    function initDraggable(): void {
        drag.draggable = true;
        drag.addEventListener("dragstart", hndDragStart);
    }

    function hndDragStart(_event: DragEvent): void {
        if (!_event.dataTransfer)
            return;

        let color: string = <string>drag.style.backgroundColor;
        _event.dataTransfer.setData("color", color);
    }

    function initDroppables(): void {
        let drops: NodeListOf<HTMLElement> = document.querySelectorAll("div#drop span");
        for (let drop of drops) {
            drop.addEventListener("drop", hndDrop);
            drop.addEventListener("dragover", hndDragOver);
        }
    }

    function hndDragOver(_event: DragEvent): void {
        _event.preventDefault();
    }
    function hndDrop(_event: DragEvent): void {
        if (!_event.dataTransfer)
            return;
            
        let color: string = _event.dataTransfer.getData("color");
        console.log(color);
        (<HTMLElement>_event.target).style.backgroundColor = color;
    }
}