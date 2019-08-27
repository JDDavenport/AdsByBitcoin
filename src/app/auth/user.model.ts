// export interface User {
//     uid: string;
//     email: string;
//     displayName?: string;
//     firstName: string;
//     lastName: string;
//     photoURL?; string;
// }
export class FirebaseUserModel {
    image: string;
    name: string;
    provider: string;
  
    constructor(){
      this.image = "";
      this.name = "";
      this.provider = "";
    }
  }