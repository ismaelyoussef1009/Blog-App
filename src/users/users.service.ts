import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  users: {
    id: number,
    name: string,
    age: number,
    gender: string,
    isMarried: boolean,
  }[] = [
    { id: 1, name: 'Youssef', age: 27, gender: 'male', isMarried: false },
    { id: 2, name: 'Billy', age: 24, gender: 'male', isMarried: false },
    { id: 3, name: 'Randy', age: 25, gender: 'male', isMarried: false },
    { id: 4, name: 'SDD', age: 28, gender: 'male', isMarried: true },
  ];

  getAllUsers() {
    return this.users;
  }

  getUserById(id: number) {
    return this.users.find((x) => x.id == id);
  }

  createUsers(user: {
    id: number,
    name: string,
    age: number,
    gender: string,
    isMarried: boolean,
  }) {
    this.users.push(user);
  }
}
