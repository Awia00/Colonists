import { MatrixCoordinate } from './MatrixCoordinate';
import { HexCoordinate } from './HexCoordinate';
import { DevelopmentCard } from './Entities/DevelopmentCard';
import { Resources } from './Resources';
import { TileType } from './Shared';
import { HarborType } from './Tile';

interface HasPlayerName {
  playerName: string;
}
interface BuildHouseParameters extends HasPlayerName {
  coordinates: MatrixCoordinate;
}
interface BuildCityParameters extends HasPlayerName {
  coordinates: MatrixCoordinate;
}
interface BuildRoadParameters extends HasPlayerName {
  start: MatrixCoordinate;
  end: MatrixCoordinate;
}
interface PlaceThiefParameters extends HasPlayerName {
  coordinates: HexCoordinate;
}
interface PlayerTradeParameters extends HasPlayerName {
  otherPlayerID: string;
  resources: Resources;
}
interface BankTradeParameters extends HasPlayerName {
  resources: Resources;
}
interface HarborTradeParameters extends HasPlayerName {
  harborType: HarborType;
  resources: Resources;
}
interface PlayCardParameters extends HasPlayerName {
  card: DevelopmentCard;
  chosenResources: TileType | [TileType, TileType];
}
interface BuyCardParameters extends HasPlayerName {}
interface EndTurnParameters extends HasPlayerName {}

export class BuildHouseAction {
  public type: 'buildHouse' = 'buildHouse';
  public parameters: BuildHouseParameters;
  constructor(playerName: string, coordinates: MatrixCoordinate) {
    this.parameters = { playerName, coordinates };
  }
}

export class BuildHouseInitialAction {
  public type: 'buildHouseInitial' = 'buildHouseInitial';
  public parameters: BuildHouseParameters;
  constructor(playerName: string, coordinates: MatrixCoordinate) {
    this.parameters = { playerName, coordinates };
  }
}

export class BuildCityAction {
  public type: 'buildCity' = 'buildCity';
  public parameters: BuildCityParameters;
  constructor(playerName: string, coordinates: MatrixCoordinate) {
    this.parameters = { playerName: playerName, coordinates: coordinates };
  }
}

export class BuildRoadAction {
  public type: 'buildRoad' = 'buildRoad';
  public parameters: BuildRoadParameters;
  constructor(
    playerName: string,
    start: MatrixCoordinate,
    end: MatrixCoordinate,
  ) {
    this.parameters = { playerName, start, end };
  }
}

export class BuildRoadInitialAction {
  public type: 'buildRoadInitial' = 'buildRoadInitial';
  public parameters: BuildRoadParameters;
  constructor(
    playerName: string,
    start: MatrixCoordinate,
    end: MatrixCoordinate,
  ) {
    this.parameters = { playerName, start, end };
  }
}

export class PlaceThiefAction {
  public type: 'placeThief' = 'placeThief';
  public parameters: PlaceThiefParameters;
  constructor(playerName: string, coordinates: HexCoordinate) {
    this.parameters = { playerName, coordinates };
  }
}

export class PlayerTradeAction {
  public type: 'playerTrade' = 'playerTrade';
  public parameters: PlayerTradeParameters;
  constructor(playerName: string, otherPlayerID: string, resources: Resources) {
    this.parameters = { playerName, otherPlayerID, resources };
  }
}

export class BankTradeAction {
  public type: 'bankTrade' = 'bankTrade';
  public parameters: BankTradeParameters;
  constructor(playerName: string, resources: Resources) {
    this.parameters = { playerName, resources };
  }
}

export class HarborTradeAction {
  public type: 'harborTrade' = 'harborTrade';
  public parameters: HarborTradeParameters;
  constructor(
    playerName: string,
    harborType: HarborType,
    resources: Resources,
  ) {
    this.parameters = { playerName, harborType, resources };
  }
}

export class BuyCardAction {
  public type: 'buyCard' = 'buyCard';
  public parameters: BuyCardParameters;
  constructor(playerName: string) {
    this.parameters = { playerName };
  }
}

export class PlayCardAction {
  public type: 'playCard' = 'playCard';
  public parameters: PlayCardParameters;
  constructor(
    playerName: string,
    card: DevelopmentCard,
    chosenResources: TileType | [TileType, TileType],
  ) {
    this.parameters = { playerName, card, chosenResources };
  }
}

export class LockMapAction {
  public type: 'lockMap' = 'lockMap';
}

export class EndTurnAction {
  public type: 'endTurn' = 'endTurn';
  public parameters: EndTurnParameters;
  constructor(playerName: string) {
    this.parameters = { playerName };
  }
}

// An action is an closure which has the information necessary to perform one rule on a world.
export type Action =
  | BuildHouseAction
  | BuildHouseInitialAction
  | BuildCityAction
  | BuildRoadAction
  | BuildRoadInitialAction
  | PlaceThiefAction
  | PlayerTradeAction
  | BankTradeAction
  | HarborTradeAction
  | PlayCardAction
  | BuyCardAction
  | LockMapAction
  | EndTurnAction;
