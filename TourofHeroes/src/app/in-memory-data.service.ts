import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Nice', power: 'Stealth', weapon: 'Gun' },
      { id: 12, name: 'Narco', power: 'Mental', weapon: 'Melee' },
      { id: 13, name: 'Bombasto', power: 'Strength', weapon: 'Gun' },
      { id: 14, name: 'Celeritas', power: 'Strength', weapon: 'Explosives' },
      { id: 15, name: 'Magneta', power: 'Agility', weapon: 'Gun' },
      { id: 16, name: 'RubberMan', power: 'Stealth', weapon: 'Knife' },
      { id: 17, name: 'Dynama', power: 'Strength', weapon: 'Gun' },
      { id: 18, name: 'Dr IQ', power: 'Agility', weapon: 'Axe' },
      { id: 19, name: 'Magma', power: 'Strength', weapon: 'Knife' },
      { id: 20, name: 'Tornado', power: 'Agility', weapon: 'Melee' }
    ];
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
