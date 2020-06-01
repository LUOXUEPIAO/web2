import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Tzgg from '../views/Home/Tzgg.vue'
import Xshd from '../views/Home/Xshd.vue'
import Xyxw from '../views/Home/Xyxw.vue'
import Rank1Page from '../views/CommRank1Page.vue'
import Rank2Page from '../views/CommRank2Page.vue'
import Xyjj from '../views/Xygk/Xyjj.vue'
import Xyry from '../views/Xygk/Xyry.vue'

// 学院概况
import Bkzy from '../views/Xygk/Zysz/Bkzy.vue' //本科专业
import Zkzy from '../views/Xygk/Zysz/Zkzy.vue' //专科专业
import Gljg from '../views/Xygk/Zzjg/Gljg.vue' //管理机构
import Zysys from '../views/Xygk/Zzjg/Zysys.vue' //专业实验室
import Xszz from '../views/Xygk/Zzjg/Xszz.vue' //学生组织
import Ssxjs from '../views/Xygk/Szll/Ssxjs.vue' //学院领导及学术带头人
import Jsbs from '../views/Xygk/Szll/Jsbs.vue' //教授及博士
import Xyld from '../views/Xygk/Szll/Xyld.vue' //双师型教师
import Xzgl from '../views/Xygk/Xzgl/Xzgl.vue' //行政管理
import Major from '../views/Xygk/Major.vue' //专业设置页面跳转
// 教学
import Fxjs from '../views/Jx/Zyfxss/Fxjs.vue' //方向介绍
import Dxcg from '../views/Jx/Zyfxss/Dxcg.vue' //方向介绍
import Fxts from '../views/Jx/Zyfxss/Fxts.vue' //方向介绍
import Gzbd from '../views/Jx/Zyfxss/Gzbd.vue' //方向介绍
import Pyms from '../views/Jx/Zyfxss/Pyms.vue' //方向介绍
import Tssys from '../views/Jx/Tssys/Tssys.vue' //方向介绍
import Jyjl from '../views/Jx/Fzkt/Jyjl.vue' //方向介绍
import Ssgf from '../views/Jx/Fzkt/Ssgf.vue' //方向介绍
import Xspj from '../views/Jx/Fzkt/Xspj.vue' //方向介绍
import Yxkt from '../views/Jx/Fzkt/Yxkt.vue' //方向介绍
import Gk from '../views/Jx/Dskt/Gk.vue' //方向介绍
import Gg from '../views/Jx/Dskt/Gg.vue' //方向介绍
import Ljmd from '../views/Jx/Dskt/Ljmd.vue' //方向介绍
import Tjlc from '../views/Jx/Dskt/Tjlc.vue' //方向介绍
// 科研
import Jglw from '../views/Ky/Jsky/Jglw.vue' //方向介绍
import Jgxm from '../views/Ky/Jsky/Jgxm.vue' //方向介绍
import Kylw1 from '../views/Ky/Jsky/Kylw.vue' //方向介绍
import Xqhzxm from '../views/Ky/Jsky/Xqhzxm.vue' //方向介绍
import Kylw from '../views/Ky/Xsky/Kylw.vue' //方向介绍
// 培养成果
import Jsjj from '../views/Pycg/Zyjs/Jsjj.vue'
import Jsfc from '../views/Pycg/Zyjs/Jsfc.vue'
import Cgzs from '../views/Pycg/Zyjs/Cgzs.vue'
import Zdbf from '../views/Pycg/Zyjs/Zdbf.vue'
import Lwfb from '../views/Pycg/Lwfb/Lwfb.vue'
import Jydx from '../views/Pycg/Jcxy/Jydx.vue'
import Szdx from '../views/Pycg/Jcxy/Szdx.vue'
import Xyzf from '../views/Pycg/Jcxy/Xyzf.vue'
import Zlyq from '../views/Pycg/Xszl/Zlyq.vue'
import Pyts from '../views/Pycg/Rzpy/Pyts.vue'
import Zscg from '../views/Pycg/Rzpy/Zscg.vue'
import Competition from '../views/Pycg/competition.vue'
// 党建工作

// 学生工作
import Xsh from '../views/Xsgz/Xszz/Xsh.vue'
import Tzz from '../views/Xsgz/Xszz/Tzz.vue'
import Gdxh from '../views/Xsgz/Xszz/Gdxh.vue'
import Bjhd from '../views/Xsgz/Xshd/Bjhd.vue'
import Tzjhd from '../views/Xsgz/Xshd/Tzjhd.vue'
import Wyhd from '../views/Xsgz/Xshd/Wyhd.vue'
import Xjhd from '../views/Xsgz/Xshd/Xjhd.vue'
import Xgdt from '../views/Xsgz/Xfjs/Xgdt.vue'
import Yxxs from '../views/Xsgz/Xfjs/Yxxs.vue'
import Association from '../views/Xsgz/association.vue'
import OutstandingStu from '../views/outstandingStudent.vue'

// 招生就业
import Shzp from '../views/Zsjy/Zsxx/Shzp.vue'
import Xyzp from '../views/Zsjy/Zsxx/Xyzp.vue'
import Sxjy from '../views/Zsjy/Sxjy/Sxjy.vue'
import sxjyArticle from '../views/sxjyArticle.vue'
import Zszc from '../views/Zsjy/Zszs/Zszc.vue'
import Article from '../views/Article.vue'


Vue.use(VueRouter)



const routes = [{
    "id": 0,
    "path": "/home",
    "disp": "首页",
    name: "首页",
    "component": Home,
    // "children": []
  },
  {
    path: '/tzgg',
    component: Tzgg,
    disp: "通知公告",
    name: "通知公告",
    showMenu: false,
  },
  {
    path: "/xshd",
    component: Xshd,
    disp: "学院新闻",
    name: "学院新闻",
    showMenu: false,
  },
  {
    path: '/xyxw',
    component: Xyxw,
    disp: "学生新闻",
    name: "学生新闻",
    showMenu: false,
  },
  {
    "id": 1,
    "path": "/xygk/xyjj",
    "disp": "学院概况",
    name: "学院概况",
    "component": Rank1Page,
    children: [{
        "id": 11,
        "path": "/xygk/xyjj",
        "disp": "学院简介",
        name: "学院简介",
        "component": Xyjj,
        meta: {
          name: ['学院概况', "学院简介"],
          path: ['/xygk/xyjj', '/xygk/xyjj']
        },
      },
      {
        "id": 12,
        "path": "/xygk/xyry",
        "disp": "学院荣誉",
        name: "学院荣誉",
        "component": Xyry,
        meta: {
          name: ['学院概况', "学院荣誉"],
          path: ['/xygk/xyjj', '/xygk/xyry']
        },
      },

      {
        "id": 13,
        "path": "/xygk/zysz",
        "disp": "专业设置",
        name: "专业设置",
        "component": Rank2Page,
        children: [{
            "id": 131,
            "path": "/xygk/zysz/bkzy",
            "disp": "本科专业",
            name: "本科专业",
            "component": Bkzy,
            meta: {
              name: ['学院概况', "专业设置", "本科专业"],
              path: ['/xygk/xyjj', '/xygk/zysz/bkzy', '/xygk/zysz/bkzy']
            },
          },
          {
            "id": 132,
            "path": "/xygk/zysz/zkzy",
            "disp": "专科专业",
            name: "专科专业",
            "component": Zkzy,
            meta: {
              name: ['学院概况', "专业设置", "专科专业"],
              path: ['/xygk/xyjj', '/xygk/zysz/zkzy', '/xygk/zysz/zkzy']
            },
          }
        ]
      },
      {
        "id": 14,
        "path": "/xygk/zzjg",
        "disp": "组织结构",
        name: "组织结构",

        "component": Rank2Page,
        "children": [{
            "id": 141,
            "path": "/xygk/zzjg/gljg",
            "disp": "管理机构",
            name: "管理机构",
            "component": Gljg,
            meta: {
              name: ['学院概况', "组织结构", "管理机构"],
              path: ['/xygk/xyjj', '/xygk/zzjg/gljg', '/xygk/zzjg/gljg']
            },
          },
          {
            "id": 142,
            "path": "/xygk/zzjg/zysys",
            "disp": "专业实验室",
            name: "专业实验室",
            "component": Zysys,
            meta: {
              name: ['学院概况', "组织结构", "专业实验室"],
              path: ['/xygk/xyjj', '/xygk/zzjg/gljg', '/xygk/zzjg/zysys']
            },
          },
          {
            "id": 143,
            "path": "/xygk/zzjg/xszz",
            "disp": "学生组织结构",
            name: "学生组织结构",
            "component": Xszz,
            meta: {
              name: ['学院概况', "组织结构", "学生组织结构"],
              path: ['/xygk/xyjj', '/xygk/zzjg/gljg', '/xygk/zzjg/xszz']
            },
          }
        ]
      },
      {
        "id": 15,
        "path": "/xygk/szll",
        "disp": "师资力量",
        "component": Rank2Page,
        name: "师资力量",
        "children": [{
            "id": 151,
            "path": "/xygk/szll/xyld",
            "disp": "学院领导及学术带头人",
            name: "学院领导及学术带头人",
            "component": Xyld,
            meta: {
              name: ['学院概况', "师资力量", "学院领导及学术带头人"],
              path: ['/xygk/xyjj', '/xygk/szll/xyld', '/xygk/szll/xyld']
            },
          },
          {
            "id": 152,
            "path": "/xygk/szll/jsbs",
            "disp": "教授及博士",
            name: "教授及博士",
            "component": Jsbs,
            meta: {
              name: ['学院概况', "师资力量", "教授及博士"],
              path: ['/xygk/xyjj', '/xygk/szll/xyld', '/xygk/szll/jsbs']
            },
          },
          {
            "id": 153,
            "path": "/xygk/szll/ssxjs",
            "disp": "双师型教师",
            name: "双师型教师",
            "component": Ssxjs,
            meta: {
              name: ['学院概况', "师资力量", "双师型教师"],
              path: ['/xygk/xyjj', '/xygk/szll/xyld', '/xygk/szll/ssxjs']
            },
          }
        ]
      },
      {
        "id": 16,
        "path": "/xygk/xzgl",
        "disp": "行政管理人员",
        name: "行政管理人员",
        "component": Xzgl,
        meta: {
          name: ['学院概况', "行政管理人员"],
          path: ['/xygk/xyjj', '/xygk/xzgl']
        },
      },
    ]
  },
  {
    "id": 2,
    "path": "/jx/zyfxss/fxjs",
    "disp": "教学",
    name: "教学",
    "component": Rank1Page,
    "children": [{
        "id": 21,
        "path": "/jx/zyfxss",
        "disp": "专业方向双师型负责制",
        name: "专业方向双师型负责制",
        "component": Rank2Page,
        "children": [{
            "id": 211,
            "path": "/jx/zyfxss/fxjs",
            "disp": "方向介绍",
            name: "方向介绍",
            "component": Fxjs,
            meta: {
              name: ['教学', "专业方向双师型教师负责制", "方向介绍"],
              path: ['/jx/zyfxss/fxjs', '/jx/zyfxss/fxjs', '/jx/zyfxss/fxjs']
            },
          },
          {
            "id": 212,
            "path": "/jx/zyfxss/pyms",
            "disp": "培养模式",
            name: "培养模式",
            "component": Pyms,
            meta: {
              name: ['教学', "专业方向双师型教师负责制", "培养模式"],
              path: ['/jx/zyfxss/fxjs', '/jx/zyfxss/fxjs', '/jx/zyfxss/pyms']
            },
          },
          {
            "id": 213,
            "path": "/jx/zyfxss/fxts",
            "disp": "方向特色",
            name: "方向特色",
            "component": Fxts,
            meta: {
              name: ['教学', "专业方向双师型教师负责制", "方向特色"],
              path: ['/jx/zyfxss/fxjs', '/jx/zyfxss/fxjs', '/jx/zyfxss/fxts']
            },
          }, {
            "id": 214,
            "path": "/jx/zyfxss/dxcg",
            "disp": "典型成果",
            name: "典型成果",
            "component": Dxcg,

            meta: {
              name: ['教学', "专业方向双师型教师负责制", "典型成果"],
              path: ['/jx/zyfxss/fxjs', '/jx/zyfxss/fxjs', '/jx/zyfxss/dxcg']
            },
          }, {
            "id": 215,
            "path": "/jx/zyfxss/gzbd",
            "disp": "关注报道",
            name: "关注报道",
            "component": Gzbd,
            meta: {
              name: ['教学', "专业方向双师教师负责制", "关注报道"],
              path: ['/jx/zyfxss/fxjs', '/jx/zyfxss/fxjs', '/jx/zyfxss/gzbd']
            },
          }
        ]
      },
      {
        "id": 22,
        "path": "/jx/fzkt",
        "disp": "翻转课堂",
        name: "翻转课堂",
        "component": Rank2Page,
        "children": [{
            "id": 221,
            "path": "/jx/fzkt/yxkt",
            "disp": "优秀课堂",
            name: "优秀课堂",
            "component": Yxkt,
            meta: {
              name: ['教学', "翻转课堂", "优秀课堂"],
              path: ['/jx/zyfxss/fxjs', '/jx/fzkt/yxkt', '/jx/fzkt/yxkt']
            },
          },
          {
            "id": 222,
            "path": "/jx/fzkt/jyjl",
            "disp": "经验交流",
            name: "经验交流",
            "component": Jyjl,
            meta: {
              name: ['教学', "翻转课堂", "经验交流"],
              path: ['/jx/zyfxss/fxjs', '/jx/fzkt/yxkt', '/jx/fzkt/jyjl']
            },
          },
          {
            "id": 223,
            "path": "/jx/fzkt/xspj",
            "disp": "学生评价",
            name: "学生评价",
            "component": Xspj,
            meta: {
              name: ['教学', "翻转课堂", "学生评价"],
              path: ['/jx/zyfxss/fxjs', '/jx/fzkt/yxkt', '/jx/fzkt/xspj']
            },
          }, {
            "id": 224,
            "path": "/jx/fzkt/ssgf",
            "disp": "实施规范",
            name: "实施规范",
            "component": Ssgf,
            meta: {
              name: ['教学', "翻转课堂", "实施规范"],
              path: ['/jx/zyfxss/fxjs', '/jx/fzkt/yxkt', '/jx/fzkt/ssgf']
            },
          }
        ]
      },
      {
        "id": 33,
        "path": "/jx/dskt",
        "disp": "第四课堂",
        name: "第四课堂",
        "component": Rank2Page,
        "children": [{
            "id": 311,
            "path": "/jx/dskt/gk",
            "disp": "概况",
            name: "概况",
            "component": Gk,
            meta: {
              name: ['教学', "第四课堂", "概况"],
              path: ['/jx/zyfxss/fxjs', '/jx/dskt/gk', '/jx/dskt/gk']
            },
          },
          {
            "id": 312,
            "path": "/jx/dskt/tjlc",
            "disp": "提交流程及认定",
            name: "提交流程及认定",
            "component": Tjlc,
            meta: {
              name: ['教学', "第四课堂", "提交流程及认定"],
              path: ['/jx/zyfxss/fxjs', '/jx/dskt/gk', '/jx/dskt/tjlc']
            },
          },
          {
            "id": 313,
            "path": "/jx/dskt/ljmd",
            "disp": "历届最终认定名单",
            name: "历届最终认定名单",
            "component": Ljmd,
            meta: {
              name: ['教学', "第四课堂", "历届最终认定名单"],
              path: ['/jx/zyfxss/fxjs', '/jx/dskt/gk', '/jx/dskt/ljmd']
            },
          }, {
            "id": 314,
            "path": "/jx/dskt/gg",
            "disp": "公告",
            name: "公告",
            "component": Gg,
            meta: {
              name: ['教学', "第四课堂", "公告"],
              path: ['/jx/zyfxss/fxjs', '/jx/dskt/gk', '/jx/dskt/gg']
            },
          }
        ]
      },
      {
        "id": 44,
        "path": "/jx/tssys",
        "disp": "特色实验室",
        name: "特色实验室",
        "component": Tssys,
        meta: {
          name: ['教学', "特色实验室"],
          path: ['/jx/zyfxss/fxjs', '/jx/tssys', '/jx/tssys']
        },
      },
    ]
  }, {

    "id": 3,
    "path": "/ky/jsky/kylw",
    "disp": "科研",
    name: "科研",
    "component": Rank1Page,
    "children": [{
        "id": 31,
        "path": "/ky/jsky",
        "disp": "教师科研",
        name: "教师科研",
        "component": Rank2Page,
        "children": [{
            "id": 311,
            "path": "/ky/jsky/kylw",
            "disp": "科研论文",
            name: "科研论文",
            "component": Kylw1,
            meta: {
              name: ['科研', "教师科研", "科研论文"],
              path: ['/ky/jsky/kylw', '/ky/jsky/kylw', '/ky/jsky/kylw']
            },

          },
          {
            "id": 312,
            "path": "/ky/jsky/Jglw",
            "disp": "教改论文",
            name: "教改论文",
            "component": Jglw,
            meta: {
              name: ['科研', "教师科研", "教改论文"],
              path: ['/ky/jsky/kylw', '/ky/jsky/kylw', '/ky/jsky/Jglw']
            },
          }, {
            "id": 313,
            "path": "/ky/jsky/xqhzxm",
            "disp": "校企合作项目",
            name: "校企合作项目",
            "component": Xqhzxm,
            meta: {
              name: ['科研', "教师科研", "校企合作项目"],
              path: ['/ky/jsky/kylw', '/ky/jsky/kylw', '/ky/jsky/xqhzxm']
            },
          }, {
            "id": 314,
            "path": "/ky/jsky/jgxm",
            "disp": "教改项目",
            name: "教改项目",

            "component": Jgxm,
            meta: {
              name: ['科研', "教师科研", "教改项目"],
              path: ['/ky/jsky/kylw', '/ky/jsky/kylw', '/ky/jsky/jgxm']
            },
          }
        ]
      },
      {
        "id": 32,
        "path": "/ky/xsky/jglw",
        "disp": "学生科研",
        name: "学生科研",
        "component": Rank2Page,

        "children": [{
          "id": 321,
          "path": "/ky/xsky/kylw",
          "disp": "学生科研论文",
          name: "学生科研论文",
          "component": Kylw,
          meta: {
            name: ['科研', "学生科研", "学生科研论文"],
            path: ['/ky/jsky/kylw', '/ky/xsky/kylw', '/ky/xsky/kylw']
          },
        }]
      }
    ]
  },
  {
    "id": 4,
    "path": "/pycg/zyjs/jsjj",
    "disp": "培养成果",
    name: "培养成果",
    "component": Rank1Page,
    "children": [{
        "id": 41,
        "path": "/pycg/zyjs",
        "disp": "专业竞赛",
        name: "专业竞赛",
        "component": Rank2Page,
        "children": [{
            "id": 411,
            "path": "/pycg/zyjs/jsjj",
            "disp": "竞赛简介",
            name: "竞赛简介",
            "component": Jsjj,
            meta: {
              name: ['培养成果', "专业竞赛", "竞赛简介"],
              path: ['/pycg/zyjs/jsjj', '/pycg/zyjs/jsjj', '/pycg/zyjs/jsjj']
            },
          },
          {
            "id": 412,
            "path": "/pycg/zyjs/cgzs",
            "disp": "成果展示",
            name: "成果展示",
            "component": Cgzs,
            meta: {
              name: ['培养成果', "专业竞赛", "成果展示"],
              path: ['/pycg/zyjs/jsjj', '/pycg/zyjs/jsjj', '/pycg/zyjs/cgzs']
            },
          },
          {
            "id": 413,
            "path": "/pycg/zyjs/jsfc",
            "disp": "教师风采",
            name: "教师风采",
            "component": Jsfc,
            meta: {
              name: ['培养成果', "专业竞赛", "教师风采"],
              path: ['/pycg/zyjs/jsjj', '/pycg/zyjs/jsjj', '/pycg/zyjs/jsfc']
            },
          },
          {
            "id": 414,
            "path": "/pycg/zyjs/zdbf",
            "disp": "指导办法",
            name: "指导办法",
            "component": Zdbf,
            meta: {
              name: ['培养成果', "专业竞赛", "指导办法"],
              path: ['/pycg/zyjs/jsjj', '/pycg/zyjs/jsjj', '/pycg/zyjs/zdbf']
            },
          }
        ]
      },
      {
        "id": 52,
        "path": "/pycg/xszl",
        "disp": "学生专利",
        name: "学生专利",
        "component": Rank2Page,
        "children": [{
            "id": 521,
            "path": "/pycg/xszl/zlyq",
            "disp": "学生专利撰写要求",
            name: "学生专利撰写要求",
            "component": Zlyq,
            meta: {
              name: ['培养成果', "学生专利", "学生专利撰写要求"],
              path: ['/pycg/zyjs/jsjj', '/pycg/xszl/zlyq', '/pycg/xszl/zlyq']
            },
          }

        ]
      },
      {
        "id": 53,
        "path": "/pycg/lwfb",
        "disp": "论文发表",
        name: "论文发表",
        "component": Lwfb,
        meta: {
          name: ['培养成果', "论文发表"],
          path: ['/pycg/zyjs/jsjj', '/pycg/lwfb', '/pycg/lwfb']
        },
      },
      {
        "id": 54,
        "path": "/pycg/rzpy",
        "disp": "认证培养",
        name: "认证培养",
        "component": Rank2Page,
        "children": [{
            "id": 541,
            "path": "/pycg/rzpy/pyts",
            "disp": "培养特色",
            name: "培养特色",
            "component": Pyts,
            meta: {
              name: ['培养成果', "认证培养", "培养特色"],
              path: ['/pycg/zyjs/jsjj', '/pycg/rzpy/pyts', '/pycg/rzpy/pyts']
            },
          },
          {
            "id": 542,
            "path": "/pycg/rzpy/zscg",
            "disp": "证书成果",
            name: "证书成果",
            "component": Zscg,
            meta: {
              name: ['培养成果', "认证培养", "证书成果"],
              path: ['/pycg/zyjs/jsjj', '/pycg/rzpy/pyts', '/pycg/rzpy/zscg']
            },
          }
        ]
      },
      {
        "id": 55,
        "path": "/pycg/jcxy",
        "disp": "杰出校友",
        name: "杰出校友",
        "component": Rank2Page,
        "children": [{
            "id": 551,
            "path": "/pycg/jcxy/jydx",
            "disp": "就业典型",
            name: "就业典型",
            "component": Jydx,
            meta: {
              name: ['培养成果', "杰出校友", "就业典型"],
              path: ['/pycg/zyjs/jsjj', '/pycg/jcxy/jydx', '/pycg/jcxy/jydx']
            },
          },
          {
            "id": 552,
            "path": "/pycg/jcxy/szdx",
            "disp": "深造典型",
            name: "深造典型",
            "component": Szdx,
            meta: {
              name: ['培养成果', "杰出校友", "深造典型"],
              path: ['/pycg/zyjs/jsjj', '/pycg/jcxy/jydx', '/pycg/jcxy/szdx']
            },
          },
          {
            "id": 553,
            "path": "/pycg/jcxy/xyzf",
            "disp": "校友调查",
            name: "校友调查",
            "component": Xyzf,
            meta: {
              name: ['培养成果', "杰出校友", "校友调查"],
              path: ['/pycg/zyjs/jsjj', '/pycg/jcxy/jydx', '/pycg/jcxy/xyzf']
            },
          }
        ]
      }



    ]
  }, {

    "id": 6,
    "path": "/xsgz/xszz/xsh",
    "disp": "学生工作",
    name: "学生工作",
    "component": Rank1Page,
    meta: {
      name: ['学生工作', "学生组织", "学生会"],
      path: ['', '', '/xsgz/xszz/xsh']
    },
    "children": [{
        "id": 61,
        "path": "/xsgz/xszz",
        "disp": "学生组织",
        name: "学生组织",
        "component": Rank2Page,
        "children": [{
            "id": 611,
            "path": "/xsgz/xszz/xsh",
            "disp": "学生会",
            name: "学生会",
            "component": Xsh,
            meta: {
              name: ['学生工作', "学生组织", "学生会"],
              path: ['/xsgz/xszz/xsh', '/xsgz/xszz/xsh', '/xsgz/xszz/xsh']
            },
          },

          {
            "id": 613,
            "path": "/xsgz/xszz/gdxh",
            "disp": "各大协会",
            name: "各大协会",
            "component": Gdxh,
            meta: {
              name: ['学生工作', "学生组织", "各大协会"],
              path: ['/xsgz/xszz/xsh', '/xsgz/xszz/xsh', '/xsgz/xszz/gdxh']
            },
          }
        ]
      },
      {
        "id": 62,
        "path": "/xsgz/xshd",
        "disp": "学生活动",
        name: "学生活动",
        "component": Rank2Page,
        "children": [{
            "id": 621,
            "path": "/xsgz/xshd/xjhd",
            "disp": "活动概览",
            name: "活动概览",
            "component": Xjhd,
            meta: {
              name: ['学生工作', "学生活动", "活动概览"],
              path: ['/xsgz/xszz/xsh', '/xsgz/xshd/xjhd', '/xsgz/xshd/xjhd']
            },
          },
          {
            "id": 622,
            "path": "/xsgz/xshd/tzjhd",
            "disp": "学院团总支活动",
            name: "学院团总支活动",
            "component": Tzjhd,
            meta: {
              name: ['学生工作', "学生活动", "学院团总支活动"],
              path: ['/xsgz/xszz/xsh', '/xsgz/xshd/xjhd', '/xsgz/xshd/tzjhd']
            },
          },
          {
            "id": 623,
            "path": "/xsgz/xshd/bjhd",
            "disp": "学院班级活动",
            name: "学院班级活动",
            "component": Bjhd,
            meta: {
              name: ['学生工作', "学生活动", "学院班级活动"],
              path: ['/xsgz/xszz/xsh', '/xsgz/xshd/xjhd', '/xsgz/xshd/bjhd']
            },
          },
          {
            "id": 624,
            "path": "/xsgz/xshd/wyhd",
            "disp": "文艺活动",
            name: "文艺活动",
            "component": Wyhd,
            meta: {
              name: ['学生工作', "学生活动", "文艺活动"],
              path: ['/xsgz/xszz/xsh', '/xsgz/xshd/xjhd', '/xsgz/xshd/wyhd']
            },
          }
        ]
      },
      {
        "id": 63,
        "path": "/xsgz/xfjs",
        "disp": "学风建设",
        name: "学风建设",
        "component": Rank2Page,
        "children": [{
            "id": 621,
            "path": "/xsgz/xfjs/xgdt",
            "disp": "学工动态",
            name: "学工动态",
            "component": Xgdt,
            meta: {
              name: ['学生工作', "学风建设", "学工动态"],
              path: ['/xsgz/xszz/xsh', '/xsgz/xfjs/xgdt', '/xsgz/xfjs/xgdt']
            },
          },
          {
            "id": 622,
            "path": "/xsgz/xfjs/yxxs",
            "disp": "在校优秀学生",
            name: "在校优秀学生",
            "component": Yxxs,
            meta: {
              name: ['学生工作', "学风建设", "在校优秀学生"],
              path: ['/xsgz/xszz/xsh', '/xsgz/xfjs/xgdt', '/xsgz/xfjs/yxxs']
            },
          },
        ]
      },

    ]
  }, {
    "id": 7,
    "path": "/zsjy/zszc",
    "disp": "招生就业",
    name: "招生就业",
    "component": Rank1Page,
    "children": [{
        "id": 71,
        "path": "/zsjy/zszc",
        "disp": "招生政策",
        name: "招生政策",
        "component": Zszc,
        meta: {
          name: ['招生就业', "招生政策"],
          path: ['/zsjy/zszc', '/zsjy/zszc']
        },
      },
      {
        "id": 72,
        "path": "/zsjy/zpxx",
        "disp": "招聘信息",
        name: "招聘信息",
        "component": Rank2Page,
        "children": [{
            "id": 721,
            "path": "/zsjy/zpxx/xyzp",
            "disp": "校园招聘",
            name: "校园招聘",
            "component": Xyzp,
            meta: {
              name: ['招生就业', "招聘信息", "校园招聘"],
              path: ['/zsjy/zszc', '/zsjy/zpxx/xyzp', "/zsjy/zpxx/xyzp"]
            },
          },
          {
            "id": 722,
            "path": "/zsjy/zpxx/shzp",
            "disp": "社会招聘",
            name: "社会招聘",
            "component": Shzp,
            meta: {
              name: ['招生就业', "招聘信息", "社会招聘"],
              path: ['/zsjy/zszc', '/zsjy/zpxx/xyzp', "/zsjy/zpxx/shzp"]
            },
          },

        ]
      },
      {
        "id": 63,
        "path": "/zsjy/sxjy",
        "disp": "实习就业动态",
        name: "实习就业动态",
        "component": Sxjy,
        meta: {
          name: ['招生就业', "实习就业动态"],
          path: ['/zsjy/zszc', '/zsjy/sxjy']
        },
      },

    ]
  }, {
    path: '/article/:aid',
    component: Article,
    "showMenu": "false",

  }, {
    path: '/major/:aid',
    component: Major,
    "showMenu": "false",
  },
  {
    path: '/competition/:aid',
    component: Competition,
    "showMenu": "false",
  },
   {
    path: '/association/:aid',
    component: Association,
    "showMenu": "false",
  },
   {
    path: '/outstandingStu/:aid',
    component: OutstandingStu,
    "showMenu": "false",
  },
  {
    path: '/sxjy_article/:aid',
    component: sxjyArticle,
    "showMenu": "false",
  },
  {
    path: "**",
    redirect: '/home',
    "showMenu": "false",
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default {
  router: router,
  routeMenuConfig: routes
};