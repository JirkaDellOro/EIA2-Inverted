namespace L12_AsteroidsAddition {
    interface Sounds {
        [id: string]: HTMLAudioElement;
    }

    export class Sound {
        private static sounds: Sounds = {};
        private static atmoBeat: number = 1;

        public static init(): void {
            let audioElements: NodeListOf<HTMLAudioElement> = document.querySelectorAll("audio");
            for (let element of audioElements)
                Sound.sounds[element.id] = element;

            Sound.playAtmo(true, 1.5);
        }

        public static play(_id: string): void {
            Sound.sounds[_id].play();
        }

        public static playAtmo(_on: boolean, _delay: number): void {
            Sound.play("beat" + Sound.atmoBeat);
            Sound.atmoBeat = (Sound.atmoBeat == 1) ? 2 : 1;
            window.setTimeout(Sound.playAtmo, _delay * 1000, _on, _delay);
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