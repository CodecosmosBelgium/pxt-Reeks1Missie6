enum Seeds {
    //% block="Seed"
    //% block.loc.nl="Zaadjes"
    Seed,
    //% block="Flower"
    //% block.loc.nl="Bloem"
    Flower,
    //% block="Pumpkin"
    //% block.loc.nl="Pompoen"
    Pumpkin,
    //% block="Chorus flower"
    //% block.loc.nl="Chorus Bloem"
    ChorusFlower,
    //% block="Chorus plant"
    //% block.loc.nl="Chorus plant"
    ChorusPlant,
}

let correctPositions: Position[] = [];


function levelCheck(seed: Seeds) {
    agent.setSlot(seed + 1)
    agent.place(DOWN)
    const detectPostion = world(agent.getPosition().getValue(Axis.X), agent.getPosition().getValue(Axis.Y) - 1, agent.getPosition().getValue(Axis.Z))
    const detectPostionChorus = world(agent.getPosition().getValue(Axis.X), agent.getPosition().getValue(Axis.Y) - 2, agent.getPosition().getValue(Axis.Z))

    if (correctPositions.indexOf(detectPostion) === -1) {
        if (blocks.testForBlock(FARMLAND, detectPostion) && seed === Seeds.Seed) {
            correctPositions.push(detectPostion)
        } else if (blocks.testForBlock(DIRT, detectPostion) && seed === Seeds.Flower) {
            correctPositions.push(detectPostion)
        } else if (blocks.testForBlock(SAND, detectPostionChorus) && seed === Seeds.Pumpkin) {
            correctPositions.push(detectPostion)
        } else if (blocks.testForBlock(ENDSTONE, detectPostionChorus) && seed === Seeds.ChorusPlant) {
            correctPositions.push(detectPostionChorus)
        } else if (blocks.testForBlock(CHORUS_PLANT, detectPostionChorus) && seed === Seeds.ChorusFlower) {
            correctPositions.push(detectPostionChorus)
        } else {
            player.execute(`execute @c ~ ~ ~ particle rwm:barrier ~ ~1 ~`)
            blocks.place(RED_CONCRETE, detectPostion);
            return;
        }

    }

    player.execute(`execute @c ~ ~ ~ particle rwm:checkmark ~ ~1 ~`)
    player.execute(`scoreboard players set @a level_check ${correctPositions.length}`)
}