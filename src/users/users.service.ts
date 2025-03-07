import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid';
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./schemas/user.schema";
import { UsersRepository } from "./users.repository";

@Injectable()
export class UsersService {
    constructor(private readonly usersRepository: UsersRepository) {}

    async getUserById(userId: string): Promise<User | null> {
        return this.usersRepository.findOne({ userId });
    }

    async getUsers(): Promise<User[]> {
        return this.usersRepository.find({});
    }

    async createUser(email: string, age: number): Promise<User | null> { 
        const newUser: User = {
            userId: uuidv4(),
            email,
            age,
            favoriteFoods: [],
        } as User;

        return this.usersRepository.create(newUser);
    }

    async updateUser(userId: string, userUpdates: UpdateUserDto): Promise<User | null> {
        return this.usersRepository.findOneAndUpdate({ userId }, userUpdates);
    }
}
