import { Body, Controller, Get, Param, Post as PostMethod } from "@nestjs/common";
import { PostService } from "./post.service";
import { CreatePostDto } from "./create-post.dto";

@Controller('posts')
export class PostController{
    constructor(private readonly postService:PostService){}

    @PostMethod()
    create(@Body() createPostDto:CreatePostDto){
        return this.postService.create(createPostDto)
    }
    
    @Get()
    findAll(){
        return this.postService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id:string){
        return this.postService.findOne(+id)
    }
}