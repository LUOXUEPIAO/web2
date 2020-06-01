const express = require('express');
let router = express.Router();
let user = require('../api/user');
let topic = require('../api/topic');
let article = require('../api/article');
router
  .get('/', (req, res) => {
    topic.findTopic((err, data) => {
      if (err === null) {
        // console.log(data._id);
        res.render('index.html', {
          user: req.session.user,
          data: data.reverse()
        });
      } else {
        console.log('error');
      }
    });
  })
  //路由给一个接口测试
  .get('/acticles', (req, res) => {
    article.findArticle((err, data) => {
      if (err === null) {
        // console.log(data._id);
        // res.render('index.html', {
        //   user: req.session.user,
        //   data: data.reverse()
        // });
        let datas = {};
        if (data) {
          datas = {
            status: 'success',
            data: data,
            dataCount: 10
          };
          if (data.length == 0) {
            (datas.data = '暂无文章内容'), (datas.dataCount = 0);
          }
        } else {
          datas = {
            status: 'error',
            errorcode: 1001,
            message: '请求数据错误'
          };
        }
        res.send(datas);
      } else {
        console.log('error');
      }
    });
  })

  .get('/login', (req, res) => {
    res.render('login.html');
  })
  //测试页面 测试效果
  .get('/test', (req, res) => {
    res.render('test.html');
  })
  //登录 后台首页 轮播
  .get('/admin', (req, res) => {
    res.render('admin/index.html');
  })
  .get('/admin/login', (req, res) => {
    res.render('admin/login.html');
  })
  .get('/admin/main', (req, res) => {
    res.render('admin/main.html');
  })
  .get('/admin/sa-html/home/list', (req, res) => {
    res.render('admin/sa-html/home/swiper-list.html');
  })
  //权限管理
  .get('/admin/sa-html/role/list', (req, res) => {
    res.render('admin/sa-html/role/role-list.html');
  })
  .get('/admin/sa-html/role/menu-setup', (req, res) => {
    let reloID = req.query.role_id || '';
    res.render('admin/sa-html/role/menu-setup.html');
  })
  //用户
  .get('/admin/sa-html/user/user-list', (req, res) => {
    res.render('admin/sa-html/user/user-list.html');
  })
  .get('/admin/sa-html/user/user-add', (req, res) => {
    res.render('admin/sa-html/user/user-add.html');
  })
  //文章分类
  .get('/admin/sa-html/category/cate-list', (req, res) => {
    res.render('admin/sa-html/category/cate-list.html');
  })
  .get('/admin/sa-html/category/cate-add', (req, res) => {
    res.render('admin/sa-html/category/cate-add.html');
  })
  //文章列表
  .get('/admin/sa-html/article/art-list', (req, res) => {
    res.render('admin/sa-html/article/art-list.html');
  })
  .get('/admin/sa-html/article/art-add', (req, res) => {
    res.render('admin/sa-html/article/art-add.html');
  })

  .post('/login', (req, res) => {
    let data = '';
    req.on('data', (chunk) => {
      data += chunk;
    });
    req.on('end', () => {
      data = JSON.parse(data);
      user.login(data, function(err, result) {
        if (err === null) {
          if (result === null) {
            return res.send({ status: 'error' });
          }
          //登录成功记录用户的登录状态
          // req.session.cookie.maxAge = 86400000; //过期时间,单位是毫秒,一般不在这里设置
          req.session.user = result.account;
          return res.send({ status: 'ok' });
        }
        res.send({ status: 'error' });
      });
    });
  })
  .get('/register', (req, res) => {
    res.render('register.html');
  })

  .post('/register', (req, res) => {
    let data = '';
    req.on('data', (chunk) => {
      data += chunk;
    });
    req.on('end', () => {
      data = JSON.parse(data);
      user.register(data, (err, result) => {
        if (err === undefined && result === undefined) {
          return res.send({ status: '1' });
        }
        if (err) {
          res.send({ status: 'error' });
        } else {
          //注册成功记录用户的登录状态
          // req.session.cookie.maxAge = 86400000; //过期时间,单位是毫秒,一般不在这里设置
          req.session.user = result.account;
          res.send({ status: 'ok' });
        }
      });
    });
  })
  .get('/logout', (req, res) => {
    req.session.destroy((err) => {
      if (!(err === null)) {
        console.log(err);
      }
    }); //通过destroy销毁session
    res.redirect('/');
  })
  .get('/edit', (req, res) => {
    if (!(req.session.user === undefined)) {
      res.render('edit.html');
    } else {
      res.redirect('/login');
    }
  })
  .post('/edit', (req, res) => {
    if (!(req.session.user === undefined)) {
      let data = '';
      req.on('data', (chunk) => {
        data += chunk;
      });
      req.on('end', () => {
        data = JSON.parse(data);
        data['account'] = req.session.user;
        topic.addTopic(data, (err, result) => {
          if (err === null) {
            res.send({ status: 'ok' });
          } else {
            res.send({ status: 'error' });
          }
        });
      });
    } else {
      res.send({ status: 'error' });
    }
  });

module.exports = router;
