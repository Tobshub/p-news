export {};

declare global {
  type UserLogin = {
    email: string;
    password: string;
  };

  type UserSignUp = UserLogin & {
    name: string;
  };

  type UserRef = {
    id: string;
    name: string;
  };

  type User = UserSignUp & {
    // use id and email as alternatives to validate a user with _id
    id: string;
    createdAt: number;
    articles: ArticleRef[];
    savedArticles: ArticleRef[];
    notifications: Notification[];
  };

  type ArticleRef = {
    id: string;
    title: string;
  };

  type Article = {
    author: UserRef;
    id: string;
    createdAt: number;
    title: string;
    content: string;
    // TODO: work the below
    // view_count: number;
    // comments: Comment[];
  };

  type Comment = {
    id: string;
    user: User;
    createdAt: Date;
    replies: Comment[];
  };

  type Notification = {
    id: string;
    targetUsers: User[];
    content: string;
    createdAt: Date;
  };
}
