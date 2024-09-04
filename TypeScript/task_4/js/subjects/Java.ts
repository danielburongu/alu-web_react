// task_4/js/subjects/Java.ts
/// <reference path="Teacher.ts" />
namespace Subjects {
    export class Java {
        private teacher: Teacher;

        setTeacher(teacher: Teacher): void {
            this.teacher = teacher;
        }

        getRequirements(): string {
            return 'Here is the list of requirements for Java';
        }

        getAvailableTeacher(): string {
            return this.teacher.experienceTeachingJava ? 
                `Available Teacher: ${this.teacher.firstName}` : 
                'No available teacher';
        }
    }
}
