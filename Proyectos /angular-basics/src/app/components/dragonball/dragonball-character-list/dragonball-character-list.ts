import { Component, input } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'app-dragonball-character-list',
  imports: [],
  templateUrl: './dragonball-character-list.html',
  styleUrl: './dragonball-character-list.css',
})
export class DragonballCharacterList {

  characters = input.required<Character[]>();

}
