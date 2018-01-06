'use strict';

import path from 'path';

export default (sequelize) => {

  const Album = sequelize.import(path.join(path.resolve(), '/dist/models/Album.js'));
  const Post = sequelize.import(path.join(path.resolve(), '/dist/models/Post.js'));
  const Tag = sequelize.import(path.join(path.resolve(), '/dist/models/Tag.js'));
  const PostTag = sequelize.import(path.join(path.resolve(), '/dist/models/PostTag.js'));

  return { Album, Post, Tag, PostTag };
};

