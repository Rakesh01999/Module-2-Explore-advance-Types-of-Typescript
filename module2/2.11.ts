{
    // 
    // utility types
    // pick

    type Person = {
        name: string;
        age: number;
        email?: string;
        contactNo: string;
    }

    type NameAge = Pick<Person, "name" | "age">

    // omit

    type ContactInfo = Omit<Person, "name" | "age">

    // Required
    type PersonRequired = Required<Person>

    // Partial
    type PersonPartial = Partial<Person>

    // Readonly
    type PersonReadonly = Readonly<Person>
    const person1: PersonReadonly = {
        name: "Mr, XY",
        age: 200,
        contactNo: "01989899898",
    }
    // person1.name="Mr. Z" // Cannot assign to 'name' because it is a read-only property.


    type MyObj = Record<string, string>

    // const EmpObj: object = {}
    // const EmpObj: {} = {}
    const EmpObj: Record<string, unknown> = {}

    const obj: MyObj = {
        a: "aa",
        b: "bb",
        c: "cc",
        d: "dd",
        // e: 6 // Type 'number' is not assignable to type 'string'.
    }
    // 
}