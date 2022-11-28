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

//% color=190 weight=100 block="CodeCosmos"
namespace CodeCosmos {
    //% block="startingPosition x:$x y:$y z:$z"
    //% block.loc.nl="zetKlaar x:$x y:$y z:$z"
    export function startingPosition(x:number, y:number, z:number) {
        agent.teleport(pos(x, y, z), SOUTH)
        agent.setItem(SEEDS, 64, 1);
    }

    //% block="plant $seed"
    //% block.loc.nl="plant $seed"
    export function placeLevel1(seed:Seeds) {
        agent.setSlot(1)
        agent.place(DOWN)
    }

    //% block="giveRedstone"
    //% block.loc.nl="geefRedstone"
    export function giveRedstone() {
        if (agent.getItemCount(1) < 10) {
            agent.setItem(REDSTONE_WIRE, 64, 1)
        }
    }
}