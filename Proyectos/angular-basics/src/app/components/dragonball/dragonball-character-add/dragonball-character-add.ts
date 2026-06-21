import { Component, input, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'app-dragonball-character-add',
  imports: [],
  templateUrl: './dragonball-character-add.html',
  styleUrl: './dragonball-character-add.css',
})
export class DragonballCharacterAdd {
  name = signal('');
  power = signal(0);

  newCharacter = output<Character>();

  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }
    const newCharacter: Character = { id: Math.floor(Math.random() * 100), name: this.name(), power: this.power() };

    this.newCharacter.emit(newCharacter);

    this.name.set('');
    this.power.set(0);
  }

}
