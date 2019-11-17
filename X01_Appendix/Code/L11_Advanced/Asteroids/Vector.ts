namespace L11_AsteroidsAdvanced {
    export class Vector {
        x: number;
        y: number;

        constructor(_x: number, _y: number) {
            this.set(_x, _y);
        }

        static getDifference(_vec0: Vector, _vec1: Vector): Vector {
            return new Vector(_vec0.x - _vec1.x, _vec0.y - _vec1.y);
        }
        
        get length(): number {
            return Math.hypot(this.x, this.y);
        }
        
        set(_x: number, _y: number): void {
            this.x = _x;
            this.y = _y;
        }

        scale(_factor: number): void {
            this.x *= _factor;
            this.y *= _factor;
        }

        add(_addend: Vector): void {
            this.x += _addend.x;
            this.y += _addend.y;
        }

        random(_minLength: number, _maxLength: number): void {
            let length: number = _minLength + Math.random() * (_maxLength - _minLength);
            let direction: number = Math.random() * 2 * Math.PI;

            this.set(Math.cos(direction), Math.sin(direction));
            this.scale(length);
        }


    }
}