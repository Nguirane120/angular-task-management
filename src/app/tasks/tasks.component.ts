import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { TaskComponent } from './task/task.component';
import { AddtaskComponent } from '../addtask/addtask.component';
import { NewTask } from './task/models/task.models';
import { TaskService } from '../task/services/task.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, AddtaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  // userTask = DUMMY_USERS

  @Input({ required: true }) userName!: string;
  @Input({ required: true }) userId!: string;
  @Output() addTask = new EventEmitter();
  isAddingTask: boolean = false;
  constructor(private taskServices: TaskService) {}

  get selectedUser() {
    return this.taskServices.getUserTasks(this.userId);
  }

  removeTask(id: string) {
    this.taskServices.removeTask(id);
  }

  createTask() {
    this.isAddingTask = true;
  }

  onCloseDialog() {
    this.isAddingTask = false;
  }

  handleSubmit(taskData: NewTask) {
    this.taskServices.addTask(taskData, this.userId);
    this.isAddingTask = false;
  }
}
