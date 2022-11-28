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

 function level1Check() {
     agent.setSlot(1)
     agent.place(DOWN)
     const detectPostion = world(agent.getPosition().getValue(Axis.X), agent.getPosition().getValue(Axis.Y) - 1, agent.getPosition().getValue(Axis.Z))

     if (correctPositions.indexOf(detectPostion) === -1) {
         if (blocks.testForBlock(FARMLAND, detectPostion)) {
             correctPositions.push(detectPostion)

         } else {
             blocks.place(RED_CONCRETE, detectPostion);
         }

     }


     if (correctPositions.length == 20) {
         player.execute(
             "function levels/level1/levelup"
         )
     }
}

function level2Check(seed:Seeds) {
    agent.setSlot(1)
    agent.place(DOWN)
    const detectPostion = world(agent.getPosition().getValue(Axis.X), agent.getPosition().getValue(Axis.Y) - 1, agent.getPosition().getValue(Axis.Z))

    if (correctPositions.indexOf(detectPostion) === -1) {
        if (blocks.testForBlock(FARMLAND, detectPostion) && seed === Seeds.Seed) {
            correctPositions.push(detectPostion)

        } else if (blocks.testForBlock(SAND, detectPostion) && seed === Seeds.Flower) {

        } else {
            blocks.place(RED_CONCRETE, detectPostion);
        }

    } 


    if (correctPositions.length == 20) {
        player.execute(
            "function levels/level1/levelup"
        )
    }
}
