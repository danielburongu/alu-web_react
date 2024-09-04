export interface DirectorInterface {
    // The DirectorInterface interface defines the methods that a Director must have.
    workFromHome(): string;
    // A method that returns a string indicating whether the director is currently working from home.
    getCoffeeBreak(): string;
    // A method that returns a string indicating whether the director is currently taking a coffee break.
    workDirectorTasks(): string;
    // A method that returns a string indicating what the director is currently working on.
  }
  
  export interface TeacherInterface {
    // The TeacherInterface interface defines the methods that a Teacher must have.
    workFromHome(): string;
    // A method that returns a string indicating whether the teacher is currently working from home.
    getCoffeeBreak(): string;
    // A method that returns a string indicating whether the teacher is currently taking a coffee break.
    workTeacherTasks(): string;
    // A method that returns a string indicating what the teacher is currently working on.
  }
  
  export class Director implements DirectorInterface {
    // The Director class implements the DirectorInterface interface.
    workFromHome() {
      // A method that returns a string indicating whether the director is currently working from home.
      return 'Working from home';
    }
  
    getCoffeeBreak() {
      // A method that returns a string indicating whether the director is currently taking a coffee break.
      return 'Getting a coffee break';
    }
  
    workDirectorTasks() {
      // A method that returns a string indicating what the director is currently working on.
      return 'Getting to director tasks';
    }
  }
  
  export class Teacher implements TeacherInterface {
    // The Teacher class implements the TeacherInterface interface.
    workFromHome() {
      // A method that returns a string indicating whether the teacher is currently working from home.
      return 'Cannot work from home';
    }
  
    getCoffeeBreak() {
      // A method that returns a string indicating whether the teacher is currently taking a coffee break.
      return 'Cannot have a break';
    }
  
    workTeacherTasks() {
      // A method that returns a string indicating what the teacher is currently working on.
      return 'Getting to work';
    }
  }
  
  export function createEmployee(salary: (number | string)): (Director | Teacher) {
    // The createEmployee function creates an employee based on the salary.
    // If the salary is a number and less than 500, it creates a Teacher.
    // Otherwise, it creates a Director.
    if (typeof salary === 'number' && salary < 500) {
      return new Teacher();
    }
    return new Director();
  }
  
  export function isDirector(employee: (Director | Teacher)) {
    // The isDirector function returns true if the employee is a Director.
    return employee instanceof Director;
  }
  
  export function executeWork(employee: (Director | Teacher)) {
    // The executeWork function executes the work of the employee.
    // If the employee is a Director, it calls the workDirectorTasks method.
    // Otherwise, it calls the workTeacherTasks method.
    if (isDirector(employee)) {
      return (employee as Director).workDirectorTasks();
    }
    return (employee as Teacher).workTeacherTasks();
  }
  
  export type Subjects = ('Math' | 'History');
  
  export function teachClass(todayClass: Subjects): string {
    // The teachClass function teaches a class based on the subject.
    // If the subject is Math, it returns 'Teaching Math'.
    // If the subject is History, it returns 'Teaching History'.
    if (todayClass === 'Math') {
      return 'Teaching Math';
    }
    if (todayClass === 'History') {
      return 'Teaching History';
    }
  }