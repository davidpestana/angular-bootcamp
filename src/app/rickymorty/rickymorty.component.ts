import { Component } from '@angular/core';
import { CharacterService } from './services/character.service';

@Component({
  selector: 'app-rickymorty',
  templateUrl: './rickymorty.component.html',
  styleUrls: ['./rickymorty.component.sass']
})
export class RickymortyComponent {
  visible = true;

  constructor(private characterService: CharacterService) {
    this.characterService.load();
  }

  check(){
    this.visible = !this.visible;
  }

  loadMore() {
    this.characterService.load();
  }

  clear() {
    this.characterService.clear();
  }
}
