//% color=190 weight=100 block="CodeCosmos"
namespace CodeCosmos {
    //% block="startingPosition x:$x y:$y z:$z"
    //% block.loc.nl="zetKlaar x:$x y:$y z:$z"
    export function startingPosition(x:number, y:number, z:number) {
        agent.teleport(pos(x, y, z), SOUTH)
        agent.setItem(SEEDS, 64, 1);
        correctPositions = [];
    }

    //% block="plant"
    //% block.loc.nl="plant"
    export function placeLevel1() {
        level1Check();
    }

    //% block="plant $seed"
    //% block.loc.nl="plant $plant"
    export function placeLevel2(seed: Seeds) {
        level2Check(seed);
    }

    //% block="giveRedstone"
    //% block.loc.nl="geefRedstone"
    export function giveRedstone() {
        if (agent.getItemCount(1) < 10) {
            agent.setItem(REDSTONE_WIRE, 64, 1)
        }
    }
}