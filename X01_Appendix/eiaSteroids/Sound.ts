/**
 * eiaSteroids 
 * 
 * @see Main.ts for details
 */
namespace eiaSteroids {
  interface Sounds {
    [id: string]: HTMLAudioElement;
  }

  /**
   * Handles and plays the sounds 
   */
  export class Sound {
    public static atmoDelay: number = 0;
    private static sounds: Sounds = {};
    private static atmoBeat: number = 1;

    public static init(): void {
      let audioElements: NodeListOf<HTMLAudioElement> = document.querySelectorAll("audio");
      for (let element of audioElements)
        Sound.sounds[element.id] = element;
    }

    public static play(_id: string): void {
      Sound.sounds[_id].play();
    }

    public static playAtmo(_delay: number = Sound.atmoDelay): void {
      Sound.play("beat" + Sound.atmoBeat);
      Sound.atmoBeat = (Sound.atmoBeat == 1) ? 2 : 1;
      Sound.atmoDelay = _delay;
      if (Sound.atmoDelay > 0)
        window.setTimeout(Sound.playAtmo, Sound.atmoDelay * 1000);
    }

    public static breakAsteroid(_size: number): void {
      let sound: string = "bangMedium";
      if (_size > 0.9)
        sound = "bangLarge";
      if (_size < 0.3)
        sound = "bangSmall";
      this.play(sound);
    }
  }
}