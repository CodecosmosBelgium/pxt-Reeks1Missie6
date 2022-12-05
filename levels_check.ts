enum Seeds {
    //% block="Seed"
    //% block.loc.nl="Zaadjes"
    Seed,
    //% block="Flower"
    //% block.loc.nl="Bloem"
    Flower,
    //% block="Sunflower"
    //% block.loc.nl="Zonnebloem"
    Sunflower,
    //% block="Endflower"
    //% block.loc.nl="Endbloem"
    Endflower,
}

let correctPositions: Position[] = [];


function levelCheck(seed: Seeds) {
    agent.setSlot(seed + 1)
    agent.place(DOWN)
    const detectPostion = world(agent.getPosition().getValue(Axis.X), agent.getPosition().getValue(Axis.Y) - 1, agent.getPosition().getValue(Axis.Z))

    if (correctPositions.indexOf(detectPostion) === -1) {
        if (blocks.testForBlock(FARMLAND, detectPostion) && seed === Seeds.Seed) {
            correctPositions.push(detectPostion)
        } else if (blocks.testForBlock(DIRT, detectPostion) && seed === Seeds.Flower) {
            correctPositions.push(detectPostion)
        } else if (blocks.testForBlock(COARSE_DIRT, detectPostion) && seed === Seeds.Sunflower) {
            correctPositions.push(detectPostion)
        } else if (blocks.testForBlock(ENDSTONE, detectPostion) && seed === Seeds.Endflower) {
            correctPositions.push(detectPostion)
        } else {
            blocks.place(RED_CONCRETE, detectPostion);
        }

    }


player.execute(`scoreboard players set @a level_check ${correctPositions.length}`)
}