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
        player.execute("function levels/startingPosition")
        correctPositions = [];
    }

    //% block="plant $seed"
    //% block.loc.nl="plant $plant"
    export function place(seed: Seeds) {
        levelCheck(seed);
    }

    //% block="position below agent"
    //% block.loc.nl="positie onder agent"
    export function positionBelowAgent() {
        return world(agent.getPosition().getValue(Axis.X), agent.getPosition().getValue(Axis.Y) - 1, agent.getPosition().getValue(Axis.Z))
    }
}