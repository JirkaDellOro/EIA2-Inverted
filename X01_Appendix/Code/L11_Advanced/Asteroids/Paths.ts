namespace L11_AsteroidsAdvanced {
    export let asteroidPaths: Path2D[];
    export let ufoPath: Path2D;

    export let shapesAsteroids: number[][][] = [
        [
            [30, 1], [50, 15], [71, 1], [88, 31], [67, 40], [84, 63], [59, 93], [30, 79], [19, 87], [2, 63], [15, 43], [8, 20]
        ],
        [
            [39, 1], [53, 28], [78, 15], [91, 41], [76, 59], [78, 82], [44, 94], [15, 83], [1, 55], [14, 14]
        ],
        [
            [39, 0], [57, 26], [68, 7], [86, 31], [88, 70], [53, 58], [54, 96], [26, 91], [28, 76], [2, 56], [15, 19]
        ],
        [
            [37, 3], [70, 14], [62, 34], [83, 31], [78, 76], [55, 96], [20, 84], [7, 67], [5, 27], [20, 15], [39, 39]
        ]
    ];

    export function createPaths(): void {
        asteroidPaths = createAsteroidPaths(shapesAsteroids);
        ufoPath = createUfoPath();
    }

    function createAsteroidPaths(_shapes: number[][][]): Path2D[] {
        let paths: Path2D[] = [];
        for (let type of _shapes) {
            let path: Path2D = new Path2D();
            let first: boolean = true;
            // console.group(type);
            for (let coordinates of type) {
                // console.log(coordinates);
                if (first)
                    path.moveTo(coordinates[0], coordinates[1]);
                else
                    path.lineTo(coordinates[0], coordinates[1]);
                first = false;
            }
            // console.groupEnd();
            path.closePath();
            paths.push(path);
        }
        return paths;
    }

    function createUfoPath(): Path2D {
        let path: Path2D = new Path2D();
        path.moveTo(20, 13);
        path.lineTo(27, 3);
        path.lineTo(38, 3);
        path.lineTo(43, 13);
        path.lineTo(59, 25);
        path.lineTo(45, 35);
        path.lineTo(18, 35);
        path.lineTo(4, 25);
        path.lineTo(20, 13);
        path.lineTo(43, 13);
        path.closePath();

        path.moveTo(4, 25);
        path.lineTo(59, 25);
        path.closePath();
        return path;
    }
}