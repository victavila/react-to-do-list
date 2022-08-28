//  export interface TodoProps {
//   id: string;
//   text: string;
//   completed: boolean;
//   projectId: string;
//   important: boolean;
//   date: string;
//   priority: boolean;
// };

export interface TodoProps {
  id: string,
  text: string,
  completed: boolean,
  projectId: string,
  isImportant: boolean,
  priority: Priority,
};

export interface ProjectProps {
  id: string,
  name: string,
};

export const enum Priority {
  NONE,
  HIGH,
  MEDIUM,
  LOW,
}