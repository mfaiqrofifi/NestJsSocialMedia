import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./user/user.entity";
import { UserModule } from "./user/user.module";
import { PostModule } from "./post/post.module";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { Post } from "./post/post.entity";


@Module({
    imports:[
        TypeOrmModule.forRoot({
            type:'mysql',
            host:'localhost',
            port:3306,
            username:'root',
            password:'yuleyek',
            database:'socialmedia',
            entities:[User,Post],
            synchronize:true,
        }),
        UserModule,
        PostModule
    ],
    controllers: [AppController],
    providers: [AppService],
})

export class AppModule{}