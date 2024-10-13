import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./user.entity";
import { CreateUserDto } from "./create-user.dto";

@Injectable()
export class UserService{
    constructor(
        @InjectRepository(User)
        private userRepository:Repository<User>,
    ){}
    create(CreateUserDto: CreateUserDto):Promise<User>{
        const user=this.userRepository.create(CreateUserDto);
        return this.userRepository.save(user)
    }
    findAll():Promise<User[]>{
        return this.userRepository.find({relations:['post']});
    }
    findOne(id: number): Promise<User> {
        return this.userRepository.findOne({
            where: { id },
            relations: ['post'],
          });
    }
}