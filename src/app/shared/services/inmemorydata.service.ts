import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InmemoryDataService implements InMemoryDbService {
  createDb() {
    let customers = [
      { id: 1, name: 'Dries Swinnen', email: 'dries.swinnen@lab.com', city: 'Pelt', address: 'Stationstraat 36', vat: 21, avatar: 'assets/dries.png' },
      { id: 2, name: 'John Doe', email: 'john.doe@example.com', city: 'New York', address: '123 Main St', vat: 21, avatar: 'assets/john.png' },
      { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com', city: 'Los Angeles', address: '456 Elm St', vat: 6, avatar: 'assets/alice.png' },
      { id: 4, name: 'Michael Smith', email: 'michael.smith@example.com', city: 'London', address: '789 Oak St', vat: 20 },
      { id: 5, name: 'Laura Davis', email: 'laura.davis@example.com', city: 'Sydney', address: '101 Maple St', vat: 6 },
      { id: 6, name: 'Alex Thompson', email: 'alex.thompson@example.com', city: 'Los Angeles', address: '222 Cedar St', vat: 19 },
      { id: 7, name: 'Sophie Clark', email: 'sophie.clark@example.com', city: 'Pelt', address: '333 Birch St', vat: 19 },
      { id: 8, name: 'Anna Martinez', email: 'anna.martinez@example.com', city: 'Madrid', address: '555 Cedar St', vat: 23 },
      { id: 9, name: 'Pablo Hernandez', email: 'pablo.hernandez@example.com', city: 'Barcelona', address: '666 Elm St', vat: 18 }
    ];

    return {customers};
  }
}
