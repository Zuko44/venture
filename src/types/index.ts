export interface Task {
  id: number;
  body: string;
  done: boolean;
}

export enum FilterTasks {
  All,
  InWork,
  Done,
}
