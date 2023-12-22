import { CommonModule } from '@angular/common';
import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: "app-title",
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1 class="text-3xl my-5">{{title}} - {{ withShadow }}</h1>
  `
})
export class TitleComponent {

  // Para recibir parametros en el componente Ej: <app-title title="name" />
  @Input({required: true}) title!: string;
  
  // Para recibir parametros booleanos en el componente Ej: <app-title title="name" withShadow/>
  // En este caso, al pasar el parametro withShadow, se convierte en True. Sino, seguiria en False
  @Input({transform: booleanAttribute}) withShadow: boolean = false;
}
