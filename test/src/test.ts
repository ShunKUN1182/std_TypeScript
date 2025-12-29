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
    const user = {
        userId: 1,
        name: "mike",
        age: 18,
        email: "atekusi1234@gmail.com",
        isActive: true,
    };
    interface UserProps {
        userId: number;
        name: string;
        age: number;
        email: string;
        isActive: boolean;
    }
    interface AdminUser extends UserProps {
        role: string; //アドミンやリーダーなどを入れれる
    }
    type UserProps = {
        userId: number;
        name: string;
        age: number;
        email: string;
        isActive: boolean;
    };
    type AdminUser = UserProps & {
        role: string;
    };
    const createAccount = (accountInfo: AdminUser) => {
        accountInfo;
    };
    const createUserAccount = (accountInfo: UserProps) => {
        accountInfo;
    };
    createUserAccount({
        userId: 1,
        name: "mike",
        age: 18,
        email: "atekusi1234@gmail.com",
        isActive: true,
    });
    createAccount({
        userId: 1,
        name: "mike",
        age: 18,
        email: "atekusi1234@gmail.com",
        isActive: true,
        role: "atekusi",
    });
    class User {
        userId: number;
        name: string;
        age: number;
        email: string;
        isActive: boolean;
        constructor(userId: number, name: string, age: number, email: string, isActive: boolean) {
            this.userId = userId;
            this.name = name;
            this.age = age;
            this.email = email;
            this.isActive = isActive;
        }
        protected getProfile(): string {
            return `Name: ${this.name},Age: ${this.age}`;
        }
        static sayHelloWould(): void {
            console.log("hello would");
        }
    }
    //   const user = new User(1, "mike", 25, "atekusi", true);
    //   //public, private, protected
    //   const foo = (arg: string): string => {
    //       return arg;
    //   };
    //   const foo2 = <T>(arg: T): T => {
    //       return arg;
    //   };
    //     foo2<string>("hey");
    //     foo2<number>(29);
    //   foo2<boolean>(true);
    //   const fetchUserData = async () => {
    //     const response = await fetch("userId/data/status", {
    //       userId: 1;
    //     })
    //     return response.data.status;
    // }
    // const isActive:boolean = fetchUserData() ?? false;

    //   const fetchUserData = async () => {
    //     const response = await fetch("userId/data/status", {
    //       userId: 1;
    //     })
    //     return response.data;
    //   }
    // const userInfoData = fetchUserData();
    // const feachName = userInfoData?.family?.father;
};
