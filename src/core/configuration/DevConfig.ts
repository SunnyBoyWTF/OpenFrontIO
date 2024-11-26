import { Player, PlayerInfo, UnitInfo, UnitType } from "../game/Game";
import { DefaultConfig } from "./DefaultConfig";

export const devConfig = new class extends DefaultConfig {
    unitInfo(type: UnitType): UnitInfo {
        const info = super.unitInfo(type)
        const oldCost = info.cost
        info.cost = (p: Player) => 0 * oldCost(p) / 10000
        return info
    }

    percentageTilesOwnedToWin(): number {
        return 95
    }
    numSpawnPhaseTurns(): number {
        return 40
    }
    gameCreationRate(): number {
        return 20 * 1000
    }
    lobbyLifetime(): number {
        return 20 * 1000
    }
    turnIntervalMs(): number {
        return 100
    }

    // numBots(): number {
    //     return 0
    // }
    // spawnNPCs(): boolean {
    //     return false
    // }

    // boatMaxDistance(): number {
    //     return 2000
    // }
}