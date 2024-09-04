// Define the Teacher interface
export interface Teacher {
    readonly firstName: string;  // Readonly and mandatory
    readonly lastName: string;   // Readonly and mandatory
    fullTimeEmployee: boolean;   // Mandatory
    location: string;            // Mandatory
    yearsOfExperience?: number;  // Optional
    [propName: string]: any;     // Allows any other property with any type
}

// Example usage of the Teacher interface
const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    yearsOfExperience: 8,
    contract: false, // Additional property
};

console.log(teacher3);


// Define the Directors interface that extends Teacher
export interface Directors extends Teacher {
    numberOfReports: number;     // Mandatory
}

// Example usage of the Directors interface
const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
};

console.log(director1);

// Define the interface for the printTeacher function
export interface printTeacherFunction {
    (firstName: string, lastName: string): string;
}

// Implement the printTeacher function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
};

// usage of the printTeacher function
console.log(printTeacher("John", "Doe")); // Output: "J. Doe"

// Defines the interface for the StudentClass constructor
export interface StudentClassConstructor {
    new (firstName: string, lastName: string): StudentClassInterface;
}

// Defines the interface for the StudentClass
export interface StudentClassInterface {
    workOnHomework(): string;
    displayName(): string;
}

// Implement the StudentClass
export class StudentClass implements StudentClassInterface {
    constructor(public firstName: string, public lastName: string) {}

    workOnHomework(): string {
        return "Currently working";
    }

    displayName(): string {
        return this.firstName;
    }
}

// usage of the StudentClass
const student = new StudentClass("Jane", "Smith");
console.log(student.displayName());       // Output: "Jane"
console.log(student.workOnHomework());    // Output: "Currently working"
