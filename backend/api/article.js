let Article = require('../db/article');
//提交文章
function addArticle(data, callback) {
  let Articles = new Article(data);
  Articles.save(function(err, product) {
    if (err) {
      callback(err);
    } else {
      callback(null, product);
    }
  });
}
//查询所有文章
function findArticle(callback) {
  Article.find(function(err, res) {
    if (err) {
      callback(err);
    } else {
      callback(null, res);
    }
  });
}
module.exports = { addArticle, findArticle };
