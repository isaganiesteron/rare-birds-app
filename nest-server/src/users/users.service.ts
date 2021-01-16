import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { User } from './users.model'

@Injectable()
export class UsersService {
  // private user: User[] = []

  constructor(@InjectModel('User') private readonly userModel: Model<User>) { }

  async registerUser(username: string, password: string, role: string) {
    const newUser = new this.userModel({ username: username, password: password, role: role })
    const result = await newUser.save()
    return result._id
  }

  async getAllUsers(): Promise<User[]> {
    return this.userModel.find().exec()
  }

  async getUser(username: string): Promise<User> {
    return this.userModel.findOne({ username: username })
  }
}