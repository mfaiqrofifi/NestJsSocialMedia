import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Post } from "./post.entity";
import { Repository } from "typeorm";
import { CreatePostDto } from "./create-post.dto";
import { User } from "src/user/user.entity";

@Injectable()
export class PostService{
    constructor(
        @InjectRepository(Post)
        private postRepository:Repository<Post>,
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ){}
     async create(createPostDto: CreatePostDto): Promise<Post> {
    const user = await this.userRepository.findOne({ where: { id: createPostDto.userId } });  // Ambil user dari database
    if (!user) {
      throw new Error('User not found');  // Jika user tidak ditemukan
    }
    const post = this.postRepository.create({ ...createPostDto, user });  // Hubungkan post dengan user
    return this.postRepository.save(post);
  }
    // create(createPostDto:CreatePostDto):Promise<Post>{
    //     const post=this.postRepository.create(createPostDto)
    //     return this.postRepository.save(post)
    // }
    findAll():Promise<Post[]>{
        return this.postRepository.find({relations:['user']})
    }
    findOne(id:number):Promise<Post>{
        return this.postRepository.findOne(
            {
                where:{id},
                relations:['user'],
            }
        );
    }
}