import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

interface User {
  id: string;
  name: string;
  avatar: string;
}
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // slecetedUser = DUMMY_USERS[randomIndex];
  @Input({ required: true }) user!: User;
  @Output() selected = new EventEmitter();

  get imagePath() {
    return `assets/users/${this.user.avatar}`;
  }

  onSelectedUser() {
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.slecetedUser = DUMMY_USERS[randomIndex];
    // console.log(this.slecetedUser.name);
    this.selected.emit(this.user.id);
  }
}
