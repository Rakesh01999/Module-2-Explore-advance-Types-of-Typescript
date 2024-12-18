{
    // 
    // mapped types
    const arrOfNumbers: number[] = [1, 4, 2];

    // const arrOfStrings: string[] = ['1', '4','2'];
    const arrOfStrings: string[] = arrOfNumbers.map((number) =>
        number.toString()
    );
    console.log(arrOfStrings);


    type AreaNumber = {
        height: number;
        width: number;
    };

    type Height = AreaNumber["height"] //look up type
    // type AreaString = {
    //     height: string;
    //     width: string;
    // };
    // keyof AreaNumber => "height" | "width"

    // T => {height:string;width:number}
    // key=>"height"
    type AreaString<T> = {
        // [key in "height" | "width"]: boolean
        [key in keyof T]: T[key]
    }

    const area1: AreaString<{ height: string; width: number }> = {
        height: "100",
        width: 50
    }
    // 
}