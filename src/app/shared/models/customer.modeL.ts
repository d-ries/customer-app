export class Customer {
  name: string;
  email: string;
  city: string;
  address: string;
  age: number;
  department: string;

  constructor(name: string, email: string, city: string, address: string, age: number, department: string = 'sales' ){
    this.name = name;
    this.email = email;
    this.city = city;
    this.address = address;
    this.age = age;
    this.department = department;

  }
}
