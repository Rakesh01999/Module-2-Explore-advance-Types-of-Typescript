{
    // 

    // type assertion
    let anything : any;
    anything = "Next level web development";
    (anything as string). // . shows all the method of string

    // anything = 222;
    // (anything as number). // . shows all the method of number



    const kgToGm = (value:string | number):string | number | undefined => {
        if(typeof value === 'string'){
            const convertedValue = parseFloat(value)*1000;
            return `The converted value is: ${convertedValue}`;
        }
        if(typeof value === 'number'){
            return value * 1000 ;
        }
    }
    const result1 = kgToGm(1000) as string
    const result2 = kgToGm("1000") 


    type CustomError = {
        message : string
    }

    try{

    }catch(error){
        console.log((error as CustomError).message);
    }

    // 
}