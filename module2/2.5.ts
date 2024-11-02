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
        return [param1];
    }

    const res1 = createArray('Bangladesh') 
    const resGeneric = createArrayWithGeneric<string>('Bangladesh')

    type User = { id: number; name: string };

    const resGenericObj = createArrayWithGeneric<User>({
        id: 222,
        name: 'Mr, Pashan'
    })

    // 
}