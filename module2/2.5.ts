{
    // 
    // function with generics

    const createArray = (param: string): string[] => {
        return [param]
    }

    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param];
    }

    const res1 = createArray('Bangladesh')
    const resGeneric = createArrayWithGeneric<string>('Bangladesh')

    type User = { id: number; name: string };

    const resGenericObj = createArrayWithGeneric<User>({
        id: 222,
        name: 'Mr, Pashan'
    })
    
    


    const createArrayWithTuple = <T, Q>(param1: T, param2:Q) => {
        return [param1, param2];
    }

    const res10 = createArrayWithTuple('Bangladesh', 222); 
    const res11 = createArrayWithTuple<string, object>('Bangladesh', {name: 'Asia'})


    const addCourseToStudent = <T>(student: T):T => {
        const course = "Next level Web Dev" ;
        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent({name:'Mr. X', email: 'x@gmail.com', devType: 'NLWD'});
    const student2 = addCourseToStudent({name:'Mr. Y', email: 'y@gmail.com', hasWatch: 'Apple Watch'});
    
    // 
}