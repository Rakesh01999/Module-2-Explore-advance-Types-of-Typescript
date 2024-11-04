{
    // 
    // promise

    type Todo = {
        id: number;
        userId: number;
        title: string;
        completed: boolean
    }

    const getTodo = async (): Promise<Todo> => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = response.json();
         return data
        // console.log(data);
    }
    getTodo();

    type Something = { something: 'something' };
    // simulate
    const createPromise = (): Promise<Something> => {
        return new Promise<Something>((resolve, reject) => {
            // const data: string = "Something";
            // const data: string = null;  // error
            const data: Something = { something: 'something' };
            if (data) {
                resolve(data)
            } else {
                reject('failed to load data')
            }
        })
    }

    // calling create promise function
    const showData = async (): Promise<Something> => {
        const data: Something = await createPromise();
        // console.log(data);
        return data;
    };
    showData();
    // 
}
