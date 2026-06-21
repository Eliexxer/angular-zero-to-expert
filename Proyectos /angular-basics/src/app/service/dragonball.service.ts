import { Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root',
})
export class DragonballService {
    characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9000 },
    { id: 2, name: 'Vegeta', power: 8000 },
    { id: 3, name: 'Gohan', power: 7000 },
  ]);

  addCharacter(character: Character) {
    this.characters.update(chars => [...chars, character]);
    console.log(this.characters());
  }
}
