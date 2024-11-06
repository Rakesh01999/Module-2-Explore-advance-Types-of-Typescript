{
    // 
    // mapped types
    const arrOfNumbers: number[] = [1, 4,2];

    // const arrOfStrings: string[] = ['1', '4','2'];
    const arrOfStrings: string[] = arrOfNumbers.map((number)=> {
        number.toString()
    }) 
    // 
}