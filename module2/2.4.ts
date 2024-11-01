interface Developer<T, U = null> {
    name: string;
    computer: {
        brand: string;
        model: string;
        releaseYear: number;
    };
    smartWatch: T;
    bike: U; // New property for the bike
}

type EmilabWatch = {
    brand: string;
    model: string;
    display: string;
};

const poorDeveloper: Developer<EmilabWatch> = { // Set second type to null if not used
    name: 'Rakesh',
    computer: {
        brand: "msi",
        model: 'Y-431',
        releaseYear: 2014
    },
    smartWatch: {
        brand: "Emilab",
        model: 'rt12',
        display: 'Old'
    },
    bike: null // No bike for poorDeveloper
};

interface AppleWatch {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
}

interface YamahaBike {
    model: string;
    engineCapacity: string;
}

const richDeveloper: Developer<AppleWatch, YamahaBike> = {
    name: 'Rich Dev',
    computer: {
        brand: "HP",
        model: 'X-34U',
        releaseYear: 2018
    },
    smartWatch: {
        brand: "Emi Lab",
        model: 'Something',
        heartTrack: true,
        sleepTrack: true
    },
    bike: {
        model: "Yamaha",
        engineCapacity: "100cc"
    }
};
