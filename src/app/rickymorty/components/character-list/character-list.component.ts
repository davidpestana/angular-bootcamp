import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.sass']
})
export class CharacterListComponent {

  characters$?: Observable<any[]>;

  constructor(
    private characterService: CharacterService
  ) {
      this.characters$ = this.characterService.characters;
  }



}
