import { AfterViewInit, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-bindging-example2',
  templateUrl: './bindging-example2.component.html',
  styleUrls: ['./bindging-example2.component.sass']
})
export class BindgingExample2Component {

  @ViewChild('miSelector') miSelector?: HTMLSelectElement;

  temaSeleccionado: any = { lightTheme: true }


  constructor() {

  }

  show(element: HTMLSelectElement) {
    console.log(element.value); // Muestra el valor escrito en el input
    console.log(element.type); // Muestra el valor del atributo type del input
  }

}
