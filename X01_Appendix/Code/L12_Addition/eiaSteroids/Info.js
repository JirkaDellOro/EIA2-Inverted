"use strict";
/**
 * eiaSteroids
 *
 * @see Main.ts for details
 */
var L12_eiaSteroids;
(function (L12_eiaSteroids) {
    /**
     * The user interface overlay displaying the energy bar, the charge bar, the score and text.
     * Also keeps the score.
     */
    class Info {
        static init(_canvas) {
            Info.barEnergy = new L12_eiaSteroids.Bar(new L12_eiaSteroids.Vector(_canvas.width / 2 - 80, 30), new L12_eiaSteroids.Vector(-300, 30));
            Info.barCharge = new L12_eiaSteroids.Bar(new L12_eiaSteroids.Vector(_canvas.width / 2 + 80, 30), new L12_eiaSteroids.Vector(300, 30));
        }
        static display(ship) {
            L12_eiaSteroids.crc2.save();
            L12_eiaSteroids.crc2.textAlign = "right";
            L12_eiaSteroids.crc2.font = "40px Consolas";
            Info.barEnergy.draw(ship.energy, "#80ff8080", ship.energy <= 0 ? "grey" : "white");
            Info.barCharge.draw(ship.charged, L12_eiaSteroids.getColorCharge(ship.charged, 0.8), ship.coolDown > 0 ? "grey" : "white");
            L12_eiaSteroids.crc2.fillStyle = "white";
            L12_eiaSteroids.crc2.fillText(Info.score.toString(), L12_eiaSteroids.crc2.canvas.width / 2 + 60, 44);
            L12_eiaSteroids.crc2.restore();
            if (L12_eiaSteroids.gamestate == L12_eiaSteroids.GAMESTATE.START) {
                Info.displayStartText();
            }
            if (L12_eiaSteroids.gamestate == L12_eiaSteroids.GAMESTATE.OVER) {
                Info.displayOverText();
            }
        }
        static displayStartText() {
            L12_eiaSteroids.crc2.save();
            L12_eiaSteroids.crc2.fillStyle = "white";
            L12_eiaSteroids.crc2.font = "120px Consolas";
            L12_eiaSteroids.crc2.textAlign = "center";
            L12_eiaSteroids.crc2.strokeText("eiaSteroids", L12_eiaSteroids.crc2.canvas.width / 2, L12_eiaSteroids.crc2.canvas.height * 0.38);
            L12_eiaSteroids.crc2.font = "40px Consolas";
            L12_eiaSteroids.crc2.textAlign = "left";
            let text = [
                "heading:     mouse",
                "charge guns: hold",
                "fire guns:   release",
                "thrust:      shift",
                "start:       space"
            ];
            let y = L12_eiaSteroids.crc2.canvas.height * 0.62;
            for (let line of text)
                L12_eiaSteroids.crc2.fillText(line, 50, y += 40);
            L12_eiaSteroids.crc2.restore();
        }
        static displayOverText() {
            L12_eiaSteroids.crc2.save();
            L12_eiaSteroids.crc2.fillStyle = "white";
            L12_eiaSteroids.crc2.font = "120px Consolas";
            L12_eiaSteroids.crc2.textAlign = "center";
            L12_eiaSteroids.crc2.strokeText("GAME OVER", L12_eiaSteroids.crc2.canvas.width / 2, L12_eiaSteroids.crc2.canvas.height * 0.38);
            L12_eiaSteroids.crc2.font = "40px Consolas";
            L12_eiaSteroids.crc2.fillText("press F5 to restart", L12_eiaSteroids.crc2.canvas.width / 2, L12_eiaSteroids.crc2.canvas.height * 0.62);
            L12_eiaSteroids.crc2.restore();
        }
    }
    Info.score = 0;
    L12_eiaSteroids.Info = Info;
})(L12_eiaSteroids || (L12_eiaSteroids = {}));
//# sourceMappingURL=Info.js.map