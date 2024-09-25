"use strict";
/**
 * eiaSteroids
 *
 * @see Main.ts for details
 */
var eiaSteroids;
(function (eiaSteroids) {
    /**
     * The user interface overlay displaying the energy bar, the charge bar, the score and text.
     * Also keeps the score.
     */
    class Info {
        static score = 0;
        static barEnergy;
        static barCharge;
        static init(_canvas) {
            Info.barEnergy = new eiaSteroids.Bar(new eiaSteroids.Vector(_canvas.width / 2 - 80, 30), new eiaSteroids.Vector(-300, 30));
            Info.barCharge = new eiaSteroids.Bar(new eiaSteroids.Vector(_canvas.width / 2 + 80, 30), new eiaSteroids.Vector(300, 30));
        }
        static display(ship) {
            eiaSteroids.crc2.save();
            eiaSteroids.crc2.textAlign = "right";
            eiaSteroids.crc2.font = "40px Quantum";
            Info.barEnergy.draw(ship.energy, "#80ff8080", ship.energy <= 0 ? "grey" : "white");
            Info.barCharge.draw(ship.charged, eiaSteroids.getColorCharge(ship.charged, 0.8), ship.coolDown > 0 ? "grey" : "white");
            eiaSteroids.crc2.fillStyle = "white";
            eiaSteroids.crc2.fillText(Info.score.toString(), eiaSteroids.crc2.canvas.width / 2 + 60, 44);
            eiaSteroids.crc2.restore();
            if (eiaSteroids.gamestate == eiaSteroids.GAMESTATE.START) {
                Info.displayStartText();
            }
            if (eiaSteroids.gamestate == eiaSteroids.GAMESTATE.OVER) {
                Info.displayOverText();
            }
        }
        static displayStartText() {
            eiaSteroids.crc2.save();
            eiaSteroids.crc2.fillStyle = "white";
            eiaSteroids.crc2.font = "120px Quantum";
            eiaSteroids.crc2.textAlign = "center";
            eiaSteroids.crc2.strokeText("eiaSteroids", eiaSteroids.crc2.canvas.width / 2, eiaSteroids.crc2.canvas.height * 0.38);
            eiaSteroids.crc2.font = "40px Quantum";
            let text = [
                ["heading: ", " mouse"],
                ["charge guns: ", " hold"],
                ["fire guns: ", " release"],
                ["thrust: ", " shift"],
                ["start: ", " space"]
            ];
            let y = eiaSteroids.crc2.canvas.height * 0.7;
            for (let line of text) {
                eiaSteroids.crc2.textAlign = "right";
                eiaSteroids.crc2.fillText(line[0], eiaSteroids.crc2.canvas.width / 2, y);
                eiaSteroids.crc2.textAlign = "left";
                eiaSteroids.crc2.fillText(line[1], eiaSteroids.crc2.canvas.width / 2, y);
                y += 40;
            }
            eiaSteroids.crc2.restore();
        }
        static displayOverText() {
            eiaSteroids.crc2.save();
            eiaSteroids.crc2.fillStyle = "white";
            eiaSteroids.crc2.font = "110px Quantum";
            eiaSteroids.crc2.textAlign = "center";
            eiaSteroids.crc2.strokeText("GAME OVER", eiaSteroids.crc2.canvas.width / 2, eiaSteroids.crc2.canvas.height * 0.38);
            eiaSteroids.crc2.font = "40px Quantum";
            eiaSteroids.crc2.fillText("press F5 to restart", eiaSteroids.crc2.canvas.width / 2, eiaSteroids.crc2.canvas.height * 0.62);
            eiaSteroids.crc2.restore();
        }
    }
    eiaSteroids.Info = Info;
})(eiaSteroids || (eiaSteroids = {}));
//# sourceMappingURL=Info.js.map