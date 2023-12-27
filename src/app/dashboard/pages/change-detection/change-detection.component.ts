import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, TitleComponent],
  templateUrl: './change-detection.component.html',
  styles: ``
})
export default class ChangeDetectionComponent {
  
  public titleAsSignal = computed(
    () => `Change detection - ${this.frameworksAsSignal().Framework}`
  )

  public frameworksAsSignal = signal({
    Framework: 'Angular',
    Released: 2016
  })

  public frameworksAsProperty = {
    Framework: 'Angular',
    Released: 2016
  }

  constructor(){
    setTimeout(()=>{
      
      this.frameworksAsSignal.update((value) => ({
        ...value, 
        Framework:'React'
      }))
      console.log('Hecho');
    },3000);
  }
}
