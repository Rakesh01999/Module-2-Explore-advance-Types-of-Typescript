{
    // 
    // generic constraint with keof operator

    type Vehicle = {
        bike: string;
        car: string;
        ship: string
    }

    type Owener = "bike" | "car" | "ship"; //manually
    type Owener2 = keyof Vehicle


    const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y){
        return obj[key]
    }

    const user = {
        name: 'Rakesh',
        age: 25,
        address: 'khl'
    }
    user['age'] = 26;
    const result = getPropertyValue(user, 'name')

    const car = {
        name: 'Toyota 100',
        year: 200
    }

    const result1 = getPropertyValue(car, 'sjs') // Argument of type '"sjs"' is not assignable to parameter of type '"name" | "year"'.
    
    // 
}