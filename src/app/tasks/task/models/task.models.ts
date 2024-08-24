export interface Task {
  id: string;
  title: string;
  userId: string;
  summary: string;
  dueDate: string;
}

export interface NewTask {
  title: string;
  summary: string;
  date: string;
  // userId: string;
}