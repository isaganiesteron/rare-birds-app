import { Controller, Get, Post, Body, Param, Request, UseGuards } from '@nestjs/common'
import { UsersService } from './users.service'
import { AuthGuard } from '@nestjs/passport'
import { AuthService } from '../auth/auth.service'
import { LocalAuthGuard } from '../auth/local-auth.guard'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'

@Controller('user')
export class UserController {
  constructor(private readonly UsersService: UsersService, private readonly authService: AuthService) { }

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user)
  }

  @Post()
  registerUser(@Body('username') username: string, @Body('password') password: string, @Body('role') role: string): {} {
    return this.UsersService.registerUser(username, password, role)
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  getAllUsers(): {} {
    return this.UsersService.getAllUsers()
  }

  @UseGuards(JwtAuthGuard)
  @Get('/:username')
  getUser(@Param('username') username: string) {
    return this.UsersService.getUser(username)
  }

}
