import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../tasks/task/models/task.models';

@Component({
  selector: 'app-addtask',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './addtask.component.html',
  styleUrl: './addtask.component.css',
})
export class AddtaskComponent {
  @Output() cancel = new EventEmitter();
  title = '';
  summary = '';
  date = '';
  @Output() newTask = new EventEmitter<NewTask>();

  onCancel() {
    this.cancel.emit();
  }

  handleTask() {
    this.newTask.emit({
      title: this.title,
      summary: this.summary,
      date: this.date,
    });
  }
}
