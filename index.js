import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import MonkeyPlayer from "./MonkeyPlayer/MonkeyPlayer.js";
import BorderMaze from "./BorderMaze/BorderMaze.js";
import Music from "./Music/Music.js";
import Exit from "./Exit/Exit.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  MonkeyPlayer: new MonkeyPlayer({
    x: 51,
    y: -108,
    direction: 90,
    costumeNumber: 3,
    size: 20,
    visible: true,
    layerOrder: 1
  }),
  BorderMaze: new BorderMaze({
    x: -9,
    y: 3,
    direction: 90,
    costumeNumber: 1,
    size: 105,
    visible: false,
    layerOrder: 2
  }),
  Music: new Music({
    x: 36,
    y: 28,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 3
  }),
  Exit: new Exit({
    x: -10,
    y: 122,
    direction: 90,
    costumeNumber: 4,
    size: 60,
    visible: true,
    layerOrder: 4
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
