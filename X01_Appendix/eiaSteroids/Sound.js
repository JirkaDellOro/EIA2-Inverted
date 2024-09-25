"use strict";
/**
 * eiaSteroids
 *
 * @see Main.ts for details
 */
var eiaSteroids;
(function (eiaSteroids) {
    /**
     * Handles and plays the sounds
     */
    class Sound {
        static atmoDelay = 0;
        static sounds = {};
        static atmoBeat = 1;
        static init() {
            let audioElements = document.querySelectorAll("audio");
            for (let element of audioElements)
                Sound.sounds[element.id] = element;
        }
        static play(_id) {
            Sound.sounds[_id].play();
        }
        static playAtmo(_delay = Sound.atmoDelay) {
            Sound.play("beat" + Sound.atmoBeat);
            Sound.atmoBeat = (Sound.atmoBeat == 1) ? 2 : 1;
            Sound.atmoDelay = _delay;
            if (Sound.atmoDelay > 0)
                window.setTimeout(Sound.playAtmo, Sound.atmoDelay * 1000);
        }
        static breakAsteroid(_size) {
            let sound = "bangMedium";
            if (_size > 0.9)
                sound = "bangLarge";
            if (_size < 0.3)
                sound = "bangSmall";
            this.play(sound);
        }
    }
    eiaSteroids.Sound = Sound;
})(eiaSteroids || (eiaSteroids = {}));
//# sourceMappingURL=Sound.js.map