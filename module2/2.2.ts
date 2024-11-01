{
    // 
    type User1 = {
        name: string;
        age: number;
    };

    interface User2 {
        name: string;
        age: number;
    }

    type UserWithRole1 = User1 & { role: string }

    interface UserWithRole2 extends User1 {
        role: string
    }

    const user1: UserWithRole1 = {
        name: "Rakesh",
        age: 25,
        role: "manager"
    }

    const user2: UserWithRole2 = {
        name: "Rakesh",
        age: 25,
        role: "manager"
    }

    type rollNumber = number


    const user3: User1 = {
        name: "Rakesh",
        age: 25
    };



    // js ---> object, array --> object, function --->object 

    type Roll = number[]
    interface Roll2 {
        [index: number]: number
    }

    const rollNumber: Roll = [1, 2, 3]
    //   0  1  2 --- > number type 


    type Add1 = (num1: number, num2: number)=> number ;
    interface Add2 {
        (num1:number, num2:number) : number;
    }

    const add:Add2 = (num1, num2) => num1 + num2

    // 
}
