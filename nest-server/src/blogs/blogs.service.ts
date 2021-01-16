import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Blog } from './blogs.model'

@Injectable()
export class BlogsService {
  private blog: Blog[] = []

  constructor(@InjectModel('Blog') private readonly blogModel: Model<Blog>) { }

  async addBlog(title: string, status: string, views: number, content: string, publishedAt: Date) {
    const newBlog = new this.blogModel({ title, status, views, content, publishedAt })
    const result = await newBlog.save()
    return result._id
  }

  async getAllBlogs(user: any) {
    const allBlogs = this.blogModel.find()
    return allBlogs
  }

  getBlog(role: string): {} {
    let filter = (role == 'admin') ? {} : { status: "published" }
    const someBlogs = this.blogModel.find(filter)
    if (!someBlogs)
      throw new NotFoundException('No blog found.')
    return someBlogs
  }
}
