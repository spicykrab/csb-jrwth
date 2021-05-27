/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Music extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Music/costumes/costume1.svg", { x: 0, y: 0 })
    ];

    this.sounds = [
      new Sound("Sound track", "./Music/sounds/Sound track.wav"),
      new Sound("Action 52 Alferd", "./Music/sounds/Action 52 Alferd.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    while (true) {
      yield* this.playSoundUntilDone("Action 52 Alferd");
      yield;
    }
  }
}
