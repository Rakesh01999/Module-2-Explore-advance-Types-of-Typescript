{
    // 
    // conditional type 

    type a1 = number;
    type b1 = undefined;

    type x = a1 extends null ? true : false; // conditional type

    type y = a1 extends null ? true : b1 extends undefined ? undefined : any

    type sheikh = {
        bike: string;
        car: string;
        ship: string;
        plane: string
    }

    // keyof sheikh: "bike" | "car" | "ship"

    // car ase ki na / bike ase ki na / ship ase ki na / tutor ace ki na 
    type CheckVehicle<T> = T extends "bike" | "car" | "ship" ? true : false


    type Hastractor = CheckVehicle<"tractor">
    type HasPlane = CheckVehicle<"plane">
    
    // 
}