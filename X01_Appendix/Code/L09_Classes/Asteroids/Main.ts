namespace L09_Asteroids {
    window.addEventListener("load", handleLoad);

    let crc2: CanvasRenderingContext2D;
    let asteroidPaths: Path2D[];

    function handleLoad(_event: Event): void {
        console.log("Asteroids starting");
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        asteroidPaths = createShapes(shapes);
        console.log(asteroidPaths);

        for (let path of asteroidPaths) {
            crc2.stroke(path);
            crc2.translate(100, 0);
        }
        crc2.stroke(ufo);
    }

    function createShapes(_shapes: number[][][]): Path2D[] {
        let paths: Path2D[] = [];
        for (let type of _shapes) {
            let path: Path2D = new Path2D();
            let first: boolean = true;
            console.group(type);
            for (let coordinates of type) {
                console.log(coordinates);
                if (first)
                    path.moveTo(coordinates[0], coordinates[1]);
                else
                    path.lineTo(coordinates[0], coordinates[1]);
                first = false;
            }
            console.groupEnd();
            path.closePath();
            paths.push(path);
        }
        return paths;
    }
}