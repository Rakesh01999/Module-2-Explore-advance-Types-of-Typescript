{
    // 
    // promise

    const createPromise = (): Promise<boolean> => {
        return new Promise<boolean>((resolve, reject) => {
            // const data: string = "Something";
            // const data: string = null;  // error
            const data: boolean = true;  
            if (data) {
                resolve(data)
            } else {
                reject('failed to load data')
            }
        })
    }

    // calling create promise function
    const showData = async (): Promise<boolean> => {
        const data: boolean = await createPromise();
        // console.log(data);
        return data;
    };
    showData();
    // 
}