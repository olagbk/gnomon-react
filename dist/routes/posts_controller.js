'use strict';

module.exports = function (router, sequelize) {

  router.route('/posts').post(function (req, res) {

    sequelize.models.posts.create({
      title: req.query.title,
      body: req.query.body
    }).then(function (post) {
      return res.status(201).json(post);
    }).catch(function (err) {

      if (err.constructor.name === 'ValidationError') res.status(422);

      res.send(err);
    });
  }).get(function (req, res) {
    var opts = {};
    console.log(req.query);

    if (req.query.count) {
      opts.limit = req.query.count;
      opts.order = [['createdAt', 'DESC']];
    }
    if (req.query.tags) {
      opts.include = {
        model: sequelize.models.tags,
        attributes: ['name']
      };
    }
    sequelize.models.posts.findAll(opts).then(function (posts) {
      return res.json(posts);
    }).catch(function (err) {
      return res.send(err);
    });
  });
  router.route('/posts/:id').get(function (req, res) {
    sequelize.models.posts.findById(req.params.id, { include: { model: sequelize.models.tags } }).then(function (post) {
      return res.json(post);
    }).catch(function (err) {
      return res.send(err);
    });
  }).put(function (req, res) {
    sequelize.models.posts.findById(req.params.id).then(function (post) {
      post.update(req.query).then(function (updatedPost) {
        return res.json(post);
      }).catch(function (err) {
        return res.send(err);
      });
    }).catch(function (err) {
      return res.send(err);
    });
  }).delete(function (req, res) {
    sequelize.models.posts.findById(req.params.id).then(function (post) {
      post.destroy().then(function () {
        return res.status(204).send();
      }).catch(function (err) {
        return res.send(err);
      });
    }).catch(function (err) {
      return res.send(err);
    });
  });
};