import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.sass']
})
export class CharacterComponent {
  @Input('character') character: any;


}
