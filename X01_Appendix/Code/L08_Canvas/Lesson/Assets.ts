namespace L08_Canvas_Assets {
    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        fillCanvas("#f00");
        // fillCanvas("rgb( 98%, 50%, 45% )");
        // fillCanvas("hwb(60, 50%, 80%)");
        drawArc();
        drawPath();
        drawLines();
        drawGradient();
        drawPattern();
    }

    function fillCanvas(_color: string): void {
        crc2.fillStyle = _color;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    function drawArc(): void {
        crc2.beginPath();
        crc2.arc(100, 100, 20, 0, 1.5 * Math.PI);
        crc2.closePath();
        crc2.stroke();
    }

    function drawPath(): void {
        let path: Path2D = new Path2D();
        path.arc(60, 60, 50, 0, 2 * Math.PI);
        crc2.stroke(path);
    }

    function drawLines(): void {
        crc2.beginPath();
        crc2.moveTo(2.1, 1);
        crc2.lineTo(2.1, 10);
        crc2.moveTo(4.5, 1);
        crc2.lineTo(4.5, 10);
        crc2.moveTo(7.5, 1);
        crc2.lineTo(10.5, 10);
        crc2.moveTo(1, 12);
        crc2.lineTo(10, 12);
        crc2.moveTo(1, 14.5);
        crc2.lineTo(10, 14.5);
        crc2.stroke();
    }

    function drawGradient(): void {
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, 100);

        gradient.addColorStop(0, "black");
        gradient.addColorStop(.5, "red");
        gradient.addColorStop(1, "gold");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, 200, 100);
    }

    function drawPattern(): void {
        let pattern: CanvasRenderingContext2D = <CanvasRenderingContext2D>document.createElement("canvas").getContext("2d");

        pattern.canvas.width = 40;
        pattern.canvas.height = 20;

        pattern.fillStyle = "#fec";
        pattern.fillRect(0, 0, pattern.canvas.width, pattern.canvas.height);
        pattern.moveTo(0, 10);
        pattern.lineTo(10, 10);
        pattern.lineTo(20, 0);
        pattern.lineTo(30, 0);
        pattern.lineTo(40, 10);
        pattern.lineTo(30, 20);
        pattern.lineTo(20, 20);
        pattern.lineTo(10, 10);
        pattern.stroke();

        crc2.fillStyle = <CanvasPattern>crc2.createPattern(pattern.canvas, "repeat");
        crc2.fillRect(0, 0, 200, 150);
    }
}