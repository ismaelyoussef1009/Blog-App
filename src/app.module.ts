import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostModule } from './post/post.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UsersModule,
    PostModule,
    AuthModule,
    MongooseModule.forRoot('mongodb://localhost/blog'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
