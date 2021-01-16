import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { PassportModule } from '@nestjs/passport'

import { UserController } from './users/users.controller'
import { UsersService } from './users/users.service'
import { BlogController } from './blogs/blogs.controller'
import { BlogsService } from './blogs/blogs.service'
import { AuthService } from './auth/auth.service'

import { LocalStrategy } from './auth/local.strategy'
import { JwtStrategy } from './auth/jwt.strategy'
import { JwtModule } from '@nestjs/jwt'
import { jwtConstants } from './auth/constants'

import { UserSchema } from './users/users.model'
import { BlogSchema } from './blogs/blogs.model'


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest-server'),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    MongooseModule.forFeature([{ name: 'Blog', schema: BlogSchema }]),
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [UserController, BlogController],
  providers: [UsersService, BlogsService, AuthService, LocalStrategy, JwtStrategy],
})
export class AppModule { }
