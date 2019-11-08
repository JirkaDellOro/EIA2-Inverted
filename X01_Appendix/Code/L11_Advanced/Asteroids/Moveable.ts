namespace L11_AsteroidsAdvanced {
    export class Moveable {
        position: Vector;
        velocity: Vector;
        expendable: boolean = false;
        hitRadius: number = 0;

        constructor(_hitRadius: number = 0, _position?: Vector) { // zweiten Parameter erst später einführen
            this.hitRadius = _hitRadius;

            if (_position) // nach Einführung zweiter Paramter
                this.position = new Vector(_position.x, _position.y);
            else
                this.position = new Vector(0, 0); // nur mit dieser Zeile anfangen

            // set velocity in pixel per second
            this.velocity = new Vector(0, 0);

        }

        isHitBy(_partner: Moveable): boolean {
            let difference: Vector = Vector.difference(this.position, _partner.position);
            if (this.hitRadius + _partner.hitRadius < difference.length)
                return false; // no collision

            return true;
        }

        hit(): void {
            console.log("Hit: ", this);
            this.expendable = true;
        }

        move(_timeslice: number): void {
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;
        }

        draw(): void {
            // defined in subclasses
        }
    }
}