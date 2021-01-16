import { Injectable } from '@nestjs/common'
import { UsersService } from '../users/users.service'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class AuthService {
  constructor(private readonly UsersService: UsersService, private jwtService: JwtService) { }

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.UsersService.getUser(username)
    if (user && user.password === password) {
      const { password, ...result } = user
      return result
    }
    return null
  }

  async login(user: any) {
    const userObj = user._doc
    const payload = { username: user.username, sub: user.userId }
    return {
      id: userObj._id,
      username: userObj.username,
      role: userObj.role,
      token: this.jwtService.sign(payload),
    }
  }
}