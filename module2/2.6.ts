{
    // 
    // constraints
    const addCourseToStudent = <T extends { id: number; name: string; email: string }>(student: T): T => {
        const course = "Next level Web Dev";
        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent(
        {
            id: 111,
            name: 'Mr. X',
            email: 'x@gmail.com',
            devType: 'NLWD'
        }
    );
    const student2 = addCourseToStudent<{
        id: number;
        name: string;
        email: string;
        hasWatch: string;
    }>({ id: 222, name: 'Mr. Y', email: 'y@gmail.com', hasWatch: 'Apple Watch' });
    const student3 = addCourseToStudent({ id: 333, name: 'Mr.Z', email: 'z@gmail.com', emni: 'emni' });


    // 
}