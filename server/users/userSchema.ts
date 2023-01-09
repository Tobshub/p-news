import mongoose from "mongoose";

const UserSchema = new mongoose.Schema<User>(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: {
      type: String,
      required: true,
      minlength: 8,
      maxlength: 64,
    },
    articles: { type: [{ title: String, id: String }] },
    savedArticles: { type: [{ title: String, id: String }] },
    // TODO: add remaining properties
  },
  { timestamps: true }
);

const UserModel = new mongoose.Model("users", UserSchema);
export default UserModel;
