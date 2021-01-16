import * as mongoose from 'mongoose';
export declare const BlogSchema: mongoose.Schema<mongoose.Document<any>, mongoose.Model<mongoose.Document<any>>>;
export interface Blog extends mongoose.Document {
    id: number;
    title: string;
    status: string;
    views: number;
    content: string;
    publishedAt: Date;
}
