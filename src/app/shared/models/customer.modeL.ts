export class Customer {
  name: string;
  email: string;
  city: string;
  address: string;
  vat: number;
  avatar: string;

  constructor(name: string, email: string, city: string, address: string, vat: number, avatar: string = 'assets/avatar.png'){
    this.name = name;
    this.email = email;
    this.city = city;
    this.address = address;
    this.vat = vat;
    this.avatar = avatar;
  }
}
