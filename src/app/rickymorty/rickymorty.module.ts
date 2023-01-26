import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RickymortyComponent } from './rickymorty.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { CharacterComponent } from './components/character/character.component';
import { CharacterNumberComponent } from './components/character-number/character-number.component';



@NgModule({
  declarations: [
    RickymortyComponent,
    CharacterListComponent,
    CharacterComponent,
    CharacterNumberComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    RickymortyComponent
  ]
})
export class RickymortyModule { }
