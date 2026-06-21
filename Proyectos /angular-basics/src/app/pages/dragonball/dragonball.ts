import { Component, inject, signal } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { DragonballCharacterList } from '../../components/dragonball/dragonball-character-list/dragonball-character-list';
import { DragonballCharacterAdd } from "../../components/dragonball/dragonball-character-add/dragonball-character-add";
import { DragonballService } from '../../service/dragonball.service';

@Component({
  selector: 'app-dragonball',
  imports: [DragonballCharacterList, DragonballCharacterAdd],
  templateUrl: './dragonball.html',
  styleUrl: './dragonball.css',
})
export class Dragonball {

  public dragonballService = inject(DragonballService);

}
