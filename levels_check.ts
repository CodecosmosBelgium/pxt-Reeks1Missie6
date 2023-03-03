function levelCheck(seed: Seeds | SeedsEN) {
    agent.setSlot(seed + 1)
    agent.place(DOWN)
    const detectPostion = world(agent.getPosition().getValue(Axis.X), agent.getPosition().getValue(Axis.Y) - 1, agent.getPosition().getValue(Axis.Z))
    const detectPostionChorus = world(agent.getPosition().getValue(Axis.X), agent.getPosition().getValue(Axis.Y) - 2, agent.getPosition().getValue(Axis.Z))

    if (correctPositions.indexOf(detectPostion.toString()) === -1) {
        if (blocks.testForBlock(FARMLAND, detectPostion) && seed === Seeds.Seed) {
            correctPositions.push(detectPostion.toString())
        } else if (blocks.testForBlock(DIRT, detectPostion) && seed === Seeds.Flower) {
            correctPositions.push(detectPostion.toString())
        } else if (blocks.testForBlock(SAND, detectPostionChorus) && seed === Seeds.Pumpkin) {
            correctPositions.push(detectPostion.toString())
        } else if (blocks.testForBlock(ENDSTONE, detectPostionChorus) && seed === Seeds.ChorusPlant) {
            correctPositions.push(detectPostionChorus.toString())
        } else if (blocks.testForBlock(CHORUS_PLANT, detectPostionChorus) && seed === Seeds.ChorusFlower) {
            correctPositions.push(detectPostionChorus.toString())
        } else {
            player.execute(`execute @c ~ ~ ~ particle rwm:barrier ~ ~1 ~`)
            blocks.place(RED_CONCRETE, detectPostion);
            return;
        }
    }

    player.execute(`execute @c ~ ~ ~ particle rwm:checkmark ~ ~1 ~`)
    player.execute(`scoreboard players set @a level_check ${correctPositions.length}`)
}