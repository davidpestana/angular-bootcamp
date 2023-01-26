import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-character-number',
  templateUrl: './character-number.component.html',
  styleUrls: ['./character-number.component.sass']
})
export class CharacterNumberComponent {
  number$?: Observable<Number>;

  constructor(
    private characterService: CharacterService
  ){
    this.number$ = this.characterService.length;
  }

}
