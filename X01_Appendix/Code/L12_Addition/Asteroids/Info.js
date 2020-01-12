"use strict";
/**
 * eiaSteroids
 *
 * @see Main.ts for details
 */
var L12_AsteroidsAddition;
(function (L12_AsteroidsAddition) {
    /**
     * The user interface overlay displaying the energy bar, the charge bar, the score and text.
     * Also keeps the score.
     */
    class Info {
        static init(_canvas) {
            Info.barEnergy = new L12_AsteroidsAddition.Bar(new L12_AsteroidsAddition.Vector(_canvas.width / 2 - 80, 30), new L12_AsteroidsAddition.Vector(-300, 30));
            Info.barCharge = new L12_AsteroidsAddition.Bar(new L12_AsteroidsAddition.Vector(_canvas.width / 2 + 80, 30), new L12_AsteroidsAddition.Vector(300, 30));
        }
        static display(ship) {
            L12_AsteroidsAddition.crc2.save();
            L12_AsteroidsAddition.crc2.textAlign = "right";
            L12_AsteroidsAddition.crc2.font = "40px Consolas";
            Info.barEnergy.draw(ship.energy, "#80ff8080", ship.energy <= 0 ? "grey" : "white");
            Info.barCharge.draw(ship.charged, L12_AsteroidsAddition.getColorCharge(ship.charged, 0.8), ship.coolDown > 0 ? "grey" : "white");
            L12_AsteroidsAddition.crc2.fillStyle = "white";
            L12_AsteroidsAddition.crc2.fillText(Info.score.toString(), L12_AsteroidsAddition.crc2.canvas.width / 2 + 60, 44);
            L12_AsteroidsAddition.crc2.restore();
            if (L12_AsteroidsAddition.gamestate == L12_AsteroidsAddition.GAMESTATE.START) {
                Info.displayStartText();
            }
            if (L12_AsteroidsAddition.gamestate == L12_AsteroidsAddition.GAMESTATE.OVER) {
                Info.displayOverText();
            }
        }
        static displayStartText() {
            L12_AsteroidsAddition.crc2.save();
            L12_AsteroidsAddition.crc2.fillStyle = "white";
            L12_AsteroidsAddition.crc2.font = "120px Consolas";
            L12_AsteroidsAddition.crc2.textAlign = "center";
            L12_AsteroidsAddition.crc2.strokeText("eiaSteroids", L12_AsteroidsAddition.crc2.canvas.width / 2, L12_AsteroidsAddition.crc2.canvas.height * 0.38);
            L12_AsteroidsAddition.crc2.font = "40px Consolas";
            L12_AsteroidsAddition.crc2.textAlign = "left";
            let text = [
                "heading:     mouse",
                "charge guns: hold",
                "fire guns:   release",
                "thrust:      shift",
                "start:       space"
            ];
            let y = L12_AsteroidsAddition.crc2.canvas.height * 0.62;
            for (let line of text)
                L12_AsteroidsAddition.crc2.fillText(line, 50, y += 40);
            L12_AsteroidsAddition.crc2.restore();
        }
        static displayOverText() {
            L12_AsteroidsAddition.crc2.save();
            L12_AsteroidsAddition.crc2.fillStyle = "white";
            L12_AsteroidsAddition.crc2.font = "120px Consolas";
            L12_AsteroidsAddition.crc2.textAlign = "center";
            L12_AsteroidsAddition.crc2.strokeText("GAME OVER", L12_AsteroidsAddition.crc2.canvas.width / 2, L12_AsteroidsAddition.crc2.canvas.height * 0.38);
            L12_AsteroidsAddition.crc2.font = "40px Consolas";
            L12_AsteroidsAddition.crc2.fillText("press F5 to restart", L12_AsteroidsAddition.crc2.canvas.width / 2, L12_AsteroidsAddition.crc2.canvas.height * 0.62);
            L12_AsteroidsAddition.crc2.restore();
        }
    }
    Info.score = 0;
    L12_AsteroidsAddition.Info = Info;
})(L12_AsteroidsAddition || (L12_AsteroidsAddition = {}));
//# sourceMappingURL=Info.js.map