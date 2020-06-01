const BASE_URL = "http://test.wdf5.com"
const articleInfo = BASE_URL+'/api/article?art_id=';//文章详情
const jsondata = BASE_URL+'/api/jsondata?name=';//json
const articles = BASE_URL+'/api/articles';//文章列表
const sort = BASE_URL+'/api/ceteapi';//分类接口
const loops = BASE_URL+'/api/loopapi';//首页轮播图
const ensdatalist = BASE_URL+'/api/ensdatalist';//附件列表
	

const notices = BASE_URL+"/api/articles?cate_id=5eb4daf5a76bf5225fe02f42"//通知公告
const noticesPage1 = BASE_URL+"/api/articles?cate_id=5eb4daf5a76bf5225fe02f42&limit=8&page=1"//通知公告第一页显示7条
const news = BASE_URL+"/api/articles?cate_id=5eb4dbfaa76bf5225fe02f43";//学院新闻
const stuActive = BASE_URL+"/api/articles?cate_id=5eb4dc27a76bf5225fe02f44";//学生活动
const stuTrain =BASE_URL+ "/api/homeapi?type_id=1";//学生培养
const gradTrain =BASE_URL+"/api/homeapi?type_id=2";//毕业学生培养成果

//学院概况
const collegeBrief=BASE_URL+"/api/articles?cate_id=5eb58122a76bf5225fe02f56"//学院简介
const honorary=BASE_URL+"/api/articles?cate_id=5eb5813aa76bf5225fe02f57"//学院荣誉
const bkzy=BASE_URL+"/api/articles?cate_id=5ec388768f801a367e2058f1"//本科专业
const zkzy=BASE_URL+"/api/articles?cate_id=5ec388818f801a367e2058f2"//专科专业
const xyld=BASE_URL+"/api/articles?cate_id=5ec3cbfdefd5184deabb5220"//学院领导
const jsbs=BASE_URL+"/api/articles?cate_id=5ec3cc18efd5184deabb5221"//教授博士
const ssxjs=BASE_URL+"/api/articles?cate_id=5ec3cc28efd5184deabb5222"//双师型教师
const xzglry=BASE_URL+"/api/articles?cate_id=5eb58186a76bf5225fe02f5b"//行政管理人员
//科研api
const jglw=BASE_URL+"/api/articles?cate_id=5ec1ffd3a0e24024211cc14c"//教改论文
const kylw=BASE_URL+"/api/articles?cate_id=5ec1ffb9a0e24024211cc14b"//科研论文
const xqhzxm=BASE_URL+"/api/articles?cate_id=5ec1ffe2a0e24024211cc14d"//校企合作项目
const jgxm=BASE_URL+"/api/articles?cate_id=5ec1fff1a0e24024211cc14e"//教改项目
const xsky=BASE_URL+"/api/articles?cate_id=5ec1fde2a0e24024211cc14a"//学生科研

const fxjs=BASE_URL+"/api/articles?cate_id=5ec1495866ae7b6c2415593b"//方向介绍
//培养成果api
const lwfb=BASE_URL+'/api/articles?cate_id=5ec1eb6ba0e24024211cc134'//论文发表
const jsjj=BASE_URL+'/api/articles?cate_id=5ec28ec6270003279a27b7a8'//学生竞赛
const jsfc=BASE_URL+'/api/articles?cate_id=5ec34e7e8f801a367e2058e7'//教师风采
const zdbf=BASE_URL+'/api/articles?cate_id=5ec360c88f801a367e2058e9'//指导办法
const jysz=BASE_URL+'/api/articles?cate_id=5ec365718f801a367e2058ec'//就业深造
const szdf=BASE_URL+'/api/articles?cate_id=5ec365838f801a367e2058ed'//深造典范
const cgzs=BASE_URL+'/api/articles?cate_id=5ec48093740102575b1232f2'
const xyft=BASE_URL+'/api/articles?cate_id=5ecc6a868c456928dfb3b546'//校友访谈
//学生工作
const gdxh=BASE_URL+'/api/articles?cate_id=5ecb149e740102575b123342'//各大协会
const yxxs=BASE_URL+'/api/articles?cate_id=5ecc739d8c456928dfb3b54b'//优秀学生
//招生就业
const sxjy=BASE_URL+'/api/articles?cate_id=5ec1f770a0e24024211cc145'//实习就业
//教学
const Sysinfo=BASE_URL+'/api/articles?cate_id=5ebec2eff5bca94294a73f12'//特色实验室
const Bkfx=BASE_URL+'/api/articles?cate_id=5ec1495866ae7b6c2415593b'//方向介绍-本科方向
const Zkfx=BASE_URL+'/api/articles?cate_id=5ecb7a61740102575b12334b'//方向介绍-专科方向
const Pyms=BASE_URL+'/api/articles?cate_id=5ec1f47ea0e24024211cc136'//培养模式
const Fxts=BASE_URL+'/api/articles?cate_id=5ec1f491a0e24024211cc137'//方向特色
const Dxcg=BASE_URL+'/api/articles?cate_id=5ec1f49ea0e24024211cc138'//典型成果

export default {
    baseUrl:BASE_URL,
    sort:sort,
    jsondata:jsondata,
    loops: loops,
    notices:notices,
    noticesPage1:noticesPage1,
    news:news,
    stuActive:stuActive,
    stuTrain:stuTrain,
    gradTrain:gradTrain,
    articleInfo:articleInfo,
    ensDatalist:ensdatalist,
    collegeBrief:collegeBrief,
    honorary:honorary,
    bkzy:bkzy,
    zkzy:zkzy,
    xyld:xyld,
    jsbs:jsbs,
    ssxjs:ssxjs,
    xzglry:xzglry,
    xsky:xsky,

    
    jglw:jglw,
    kylw:kylw,
    xqhzxm:xqhzxm,
    jgxm:jgxm,
    lwfb:lwfb,
    jsjj:jsjj,
    fxjs:fxjs,
    jsfc:jsfc,
    zdbf:zdbf,
    jysz:jysz,
    szdf:szdf,
    cgzs:cgzs,
    sxjy:sxjy,
    Sysinfo:Sysinfo,
    gdxh:gdxh,
    bkfx:Bkfx,
    zkfx:Zkfx,
    pyms:Pyms,
    fxts:Fxts,
    dxcg:Dxcg,
    xyft:xyft,
    yxxs:yxxs

}