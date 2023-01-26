import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.sass']
})
export class CharacterListComponent {

  characters$: Observable<any[]> = of([]);
  displayedColumns: string[] = ['id', 'name'];

  constructor(
    private characterService: CharacterService
  ) {
      this.characters$ = this.characterService.characters;
  }



}
