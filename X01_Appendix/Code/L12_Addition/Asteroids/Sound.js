"use strict";
var L12_AsteroidsAddition;
(function (L12_AsteroidsAddition) {
    class Sound {
        static init() {
            let audioElements = document.querySelectorAll("audio");
            for (let element of audioElements)
                Sound.sounds[element.id] = element;
            Sound.playAtmo(true, 1.5);
        }
        static play(_id) {
            Sound.sounds[_id].play();
        }
        static playAtmo(_on, _delay) {
            Sound.play("beat" + Sound.atmoBeat);
            Sound.atmoBeat = (Sound.atmoBeat == 1) ? 2 : 1;
            window.setTimeout(Sound.playAtmo, _delay * 1000, _on, _delay);
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
    Sound.sounds = {};
    Sound.atmoBeat = 1;
    L12_AsteroidsAddition.Sound = Sound;
})(L12_AsteroidsAddition || (L12_AsteroidsAddition = {}));
//# sourceMappingURL=Sound.js.map