import { Component, Input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // slecetedUser = DUMMY_USERS[randomIndex];
  @Input() name!: string;
  @Input() avatar!: string;
  get imagePath() {
    return `assets/users/${this.avatar}`;
  }

  onSelectedUser() {
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.slecetedUser = DUMMY_USERS[randomIndex];
    // console.log(this.slecetedUser.name);
  }
}
