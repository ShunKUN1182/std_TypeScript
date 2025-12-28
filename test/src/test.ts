export const test = () => {
    console.log("test");

    const name: string = "mike"; //string
    const age: number = 25; //number
    const isStudent: boolean = false; //boolean
    const hobbies: string[] = ["sports", "music", "game"]; //array
    const addres: object = {
        street: "123 main st",
        city: "osaka",
        state: "CA",
    }; //object
    const today: Date = new Date(); //date
    const none: null = null; //null
    const notDefined: undefined = undefined; //undefined
    const randum: any = "Hello Would"; //any
    const genber: "male" | "female" = "male"; //ユニオン型
    const value: string | number | null = "foo"; //これもユニオン型
    console.log(
        name,
        age,
        isStudent,
        hobbies,
        addres,
        today,
        none,
        notDefined,
        randum,
        genber,
        value
    );

    const reverseArray = (arr: string[], hasTom?: boolean): string[] => {
        const reverseArray: string[] = [];
        let index: number = arr.length - 1;
        while (index >= 0) {
            reverseArray.push(arr[index]);
            index--;
        }
        if (hasTom) {
            reverseArray.push("tom");
        }
        return reverseArray;
    };
    console.log(reverseArray(["a", "b", "c"], true));
};
