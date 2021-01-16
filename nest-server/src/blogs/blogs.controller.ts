import { Controller, Get, Post, Body, Param, UseGuards, Request } from '@nestjs/common'
import { BlogsService } from './blogs.service'
import { LocalAuthGuard } from '../auth/local-auth.guard'
import { JwtAuthGuard } from '../auth/jwt-auth.guard'

@Controller('blog')
export class BlogController {
  constructor(private readonly BlogsService: BlogsService) { }

  @UseGuards(JwtAuthGuard)
  @Post()
  addBlog(@Body('title') title: string, @Body('status') status: string, @Body('views') views: number, @Body('content') content: string, @Body('publishedAt') publishedAt: Date): {} {
    return this.BlogsService.addBlog(title, status, views, content, publishedAt)
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  getAllBlogs(@Request() req): {} {
    return this.BlogsService.getAllBlogs(req)
  }
  @UseGuards(JwtAuthGuard)
  @Get('/:role')
  getBlog(@Param('role') role: string): {} {
    return this.BlogsService.getBlog(role)
  }

}