{
    // 
    // generic type

    // type GenericArray = Array<boolean>

    // type GenericArray<param> = Array<param>
    type GenericArray<T> = Array<T>

    // const rollNumbers: number[] = [3, 6, 9];
    const rollNumbers: Array<number> = [3, 6, 9];

    // const mentors: string[] = ["Mr. X", "Mr. Y", "Mr. W", "Mr. Z"];
    const mentors: Array<string> = ["Mr. X", "Mr. Y", "Mr. W", "Mr. Z"];

    // const boolArray: boolean[] = [true, false, true];
    const boolArray: Array<boolean> = [true, false, true];

    const add = (x: number, y: number) => x + y
    add(20, 30)


    const user: = [
        {
            name:"Rakesh",
            age:25
        },
        {
            name:"Haitu",
            age:35
        }
    ]
    // 
}