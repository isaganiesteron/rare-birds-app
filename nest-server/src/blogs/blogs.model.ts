import * as mongoose from 'mongoose'

export const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  status: { type: String, required: true },
  views: { type: Number, required: true },
  content: { type: String, required: true },
  publishedAt: { type: Date, required: true }
})

export interface Blog extends mongoose.Document {
  id: number
  title: string
  status: string
  views: number
  content: string
  publishedAt: Date
}