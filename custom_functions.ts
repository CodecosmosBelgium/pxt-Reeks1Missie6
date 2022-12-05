//% color=190 weight=100 block="CodeCosmos"
namespace CodeCosmos {
    //% block="startingPosition position:$position"
    //% block.loc.nl="zetKlaar positie:$position"
    export function startingPosition(position:Position) {
        agent.teleport(position, SOUTH)
        agent.setItem(SEEDS, 64, 1);
        agent.setItem(YELLOW_FLOWER, 64, 2);
        agent.setItem(SUNFLOWER, 64, 3);
        agent.setItem(CHORUS_FLOWER, 64, 4);
        player.execute("scoreboard players set @a level_check 0")
        correctPositions = [];
    }

    //% block="plant $seed"
    //% block.loc.nl="plant $plant"
    export function place(seed: Seeds) {
        levelCheck(seed);
    }

    //% block="giveRedstone"
    //% block.loc.nl="geefRedstone"
    export function giveRedstone() {
        if (agent.getItemCount(1) < 10) {
            agent.setItem(REDSTONE_WIRE, 64, 1)
        }
    }
}