import Container from './lib/Container';
import Collidable from './lib/Collidable';
import Pixmap from './Pixmap';
import { inGridTiles, inPixels } from './utils';
import { config } from './config';

const pixmap = Pixmap.load(`
000000000000000000000001100000000000000000000000
000000000000000000000012210000000000000000000000
000000000000000000000012210000000000000000000000
000000000000000000000012210000000000000000000000
000000000000000000000322223000000000000000000000
000000000000000000000322223000000000000000000000
000000000000000000000322223000000000000000000000
000000000000000000003222222300000000000000000000
000000000000000000003222222300000000000000000000
000000000000000000003232232300000000000000000000
000000000000000000032232232230000000000000000000
000000000000000000032232232230000000000000000000
000000000000000000322232232223000000000000000000
000000000000000000322322223223000000000000000000
000000000000000003222322223222300000000000000000
000000000000000003222322223222300000000000000000
000000000000000032222322223222230000000000000000
000000000000000322223222222322223000000000000000
000000000000000322223222222322223000000000000000
000000000000003222223222222322222300000000000000
000000000000004222232222222232222400000000000000
000000000000045522232222222232225540000000000000
000000000000035552232222222232255530000000000000
000000000000322555422222222224555223000000000000
000000000003222225455555555554522222300000000000
000000000003222222355555555553222222300000000000
000000000032222223222223322222322222230000000000
000000000032222223222223322222322222230000000000
000000000322222223222236632222322222223000000000
000000000422222232222236632222232222224000000000
000000004522222233222366663222332222225400000000
000000032252222232322366663223232222252230000000
000000035225222322233666666332223222522530000000
000000322525522322223666666322223225525223000000
000000355252252322236666666632223252252553000000
000004525225224555446666666644555422522525400000
000045552222521225466666666664522125222255540000
700045555255248555466666666664555842552555540007
070313555595212522a66bbbbbb66a225212595555313070
07331135555223555236bbbbbbbb63255532255553113370
000031135555325253bbbbbbbbbbbb352523555531130000
000003113555455554bbbbbbbbbbbb455554555311300000
000000111355455554bbb000000bbb455554553111000000
00000003113455554bb0000000000bb45555431130000000
000000003114555540000000000000045555411300000000
000000000713555400000000000000004555317000000000
000000000073333000000000000000000333370000000000
000000000070000000000000000000000000070000000000
`, config.palettes.playerHut).toDrawable().cache();

export default class Hut extends Collidable(Container) {
    constructor() {
        super();

        this.set({
            width: pixmap.width,
            height: Math.round(pixmap.height / 2),
        });

        pixmap.y = -1 * pixmap.height;
        this.addChild(pixmap);
    }

    getCollisionBox() {
        return {
            left: this.x,
            right: this.x + this.width,
            top: this.y - this.height,
            bottom: this.y + inPixels(1),
        };
    }

    get center() {
        return {
            x: this.x + this.width / 2,
            y: this.y,
        };
    }
}
