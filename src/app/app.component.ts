import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserInfo!: string;

  get selectedUser() {
    return this.users.find((user) => user.id === this.selectedUserInfo)!;
  }

  onSelctedUser(id: string) {
    console.log('USER ID ' + id);

    this.selectedUserInfo = id;
  }
}
