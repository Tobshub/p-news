import mongoose from "mongoose";

const ArticleSchema = new mongoose.Schema<Article>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: { id: String, name: String }, required: true },
    id: { type: String, required: true },
  },
  { timestamps: true }
);

const ArticleModel = new mongoose.Model("articles", ArticleSchema);

export default ArticleModel;
