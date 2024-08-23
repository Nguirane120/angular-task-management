import { Component, EventEmitter, input, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { User } from './models/user.models';

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
  @Input({ required: true }) user!: User;
  @Input({ required: true }) select!: boolean;
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
