"use strict";
const User = require("./user");
const Post = require("./post");
const Comment = require("./comment");
async function init() {
  await User.sync();
  await Post.sync();
  await Comment.sync();
}

init();

Post.belongsTo(User);
User.hasMany(Post);

Comment.belongsTo(Post);
Post.hasMany(Comment);

Comment.belongsTo(User);
User.hasMany(Comment);

module.exports = {
  User,
  Post,
  Comment,
};
