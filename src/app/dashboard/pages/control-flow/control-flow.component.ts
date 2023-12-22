import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

type Grade = 'A'|'B'|'F';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './control-flow.component.html',
  styles: ``
})


export default class ControlFlowComponent {
  public showContent = signal(false);
  public grade = signal<Grade>('B');
  public cars = signal(['Chevrolet','Mazda','Toyota','Audi','Renault']);
  public cars2 = signal(['KIA']);

  public toggleContent(){
    this.showContent.update(value => !value);
    
  }
}
