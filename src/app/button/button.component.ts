import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.sass']
})
export class ButtonComponent {
  @Input('title') title?: string;
  @Output() disabled: EventEmitter<string> = new EventEmitter<string>();
  @Output() clicked: EventEmitter<number> = new EventEmitter<number>();

  counter: number = 0;
  validData: boolean = false;

  check() {
    this.counter ++;
    this.validData = this.counter > 10;
    this.disabled.emit('se ha desactivado el boton');
    this.clicked.emit(this.counter)
  }
}
