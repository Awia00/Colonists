import { House } from './House';
export class City extends House {
  public value: number = 2;
  public cost = {
    grain: 2,
    stone: 3,
    wool: 0,
    wood: 0,
    clay: 0,
  };
}
