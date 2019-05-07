// index.js 是入口文件，云函数被调用时会执行该文件导出的 main 方法
// event 包含了调用端（小程序端）调用该函数时传过来的参数，同时还包含了用户登录态 `openId` 和小程序 `appId` 信息
exports.main = (event, context) => {
    let { userInfo, a, b} = event
    let { openId, appId} = userInfo // 这里获取到的 openId 和 appId 是可信的
    //let sum = a + b
  
    return {
      openId,
      appId
    }
  }