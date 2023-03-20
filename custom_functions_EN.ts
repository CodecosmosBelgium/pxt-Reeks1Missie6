//% color=190 weight=100 block="CodeCosmos"
namespace CodeCosmosEN {
    //% block="startingPosition $position"
    export function startingPosition(position: Position) {
        agent.teleport(position, SOUTH)
        agent.setItem(SEEDS, 64, 1);
        agent.setItem(YELLOW_FLOWER, 64, 2);
        agent.setItem(PUMPKIN, 64, 3);
        agent.setItem(CHORUS_FLOWER, 64, 4);
        agent.setItem(CHORUS_PLANT, 64, 5);
        player.execute("function levels/startingPosition")
        correctPositions = [];
    }

    //% block="plant $seed"
    export function place(seed: SeedsEN) {
        agent.setItem(SEEDS, 64, 1);
        levelCheck(seed);
    }

    //% block="next line"
    export function nextLine() {
        agent.move(LEFT, 2)
        agent.move(BACK, 12)
    }

    //% block="position below agent"
    export function positionBelowAgent() {
        return world(agent.getPosition().getValue(Axis.X), agent.getPosition().getValue(Axis.Y) - 1, agent.getPosition().getValue(Axis.Z))
    }
}

enum SeedsEN {
    //% block="Seed"
    Seed,
    //% block="Flower"
    Flower,
    //% block="Pumpkin"
    Pumpkin,
    //% block="Chorus flower"
    ChorusFlower,
    //% block="Chorus plant"
    ChorusPlant,
}