namespace L12_AsteroidsAddition {
  export class Info {
    public static score: number = 0;
    private static barEnergy: Bar;
    private static barCharge: Bar;

    public static init(_canvas: HTMLCanvasElement): void {
      Info.barEnergy = new Bar(new Vector(_canvas.width / 2 - 80, 30), new Vector(-300, 30));
      Info.barCharge = new Bar(new Vector(_canvas.width / 2 + 80, 30), new Vector(300, 30));
    }

    public static display(ship: Ship): void {
      crc2.save();
      crc2.textAlign = "right";
      crc2.font = "40px Consolas";
      Info.barEnergy.draw(ship.energy, "#80ff8080", ship.energy <= 0 ? "grey" : "white");
      Info.barCharge.draw(ship.charged, getColorCharge(ship.charged, 0.8), ship.coolDown > 0 ? "grey" : "white");
      crc2.fillStyle = "white";
      crc2.fillText(Info.score.toString(), crc2.canvas.width / 2 + 60, 44);
      crc2.restore();

      if (gamestate == GAMESTATE.START) {
        Info.displayStartText();
      }
      if (gamestate == GAMESTATE.OVER) {
        Info.displayOverText();
      }
    }

    private static displayStartText(): void {
      crc2.save();
      crc2.fillStyle = "white";
      crc2.font = "120px Consolas";
      crc2.textAlign = "center";
      crc2.strokeText("eiaSteroids", crc2.canvas.width / 2, crc2.canvas.height * 0.38);

      crc2.font = "40px Consolas";
      crc2.textAlign = "left";
      let text: string[] = [
        "heading:     mouse", 
        "charge guns: hold", 
        "fire guns:   release", 
        "thrust:      shift", 
        "start:       space"];
      let y: number =  crc2.canvas.height * 0.62;
      for (let line of text)
        crc2.fillText(line, 50, y += 40);
      crc2.restore();
    }

    
    private static displayOverText(): void {
      crc2.save();
      crc2.fillStyle = "white";
      crc2.font = "120px Consolas";
      crc2.textAlign = "center";
      crc2.strokeText("GAME OVER", crc2.canvas.width / 2, crc2.canvas.height * 0.38);

      crc2.font = "40px Consolas";
      crc2.fillText("press F5 to restart", crc2.canvas.width / 2, crc2.canvas.height * 0.62);

      crc2.restore();
    }
  }
}