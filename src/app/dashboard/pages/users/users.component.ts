import { Component, inject } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';
import { RouterModule } from '@angular/router';
import { UsersService } from '@services/users.service';

@Component({
  standalone: true,
  imports: [TitleComponent, RouterModule],
  templateUrl: './users.component.html',
  styles: ``
})
export default class UsersComponent {

  public usersService = inject(UsersService);

}
