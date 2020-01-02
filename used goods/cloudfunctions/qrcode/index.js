// 云函数入口文件
const cloud = require('wx-server-sdk')
const appid = 'wxe9b2530c41c9b95d'; //你的小程序appid
const secret = 'b668f4b3744ee8b6eef2dbce28ad28a2'; //你的小程序secret
const envName = 'hahacium'; // 小程序云开发环境ID
cloud.init({
      env: envName
})

// 云函数入口函数
exports.main = async(event, context) => {
      //先判断云存储是否存在此二维码
      try {
            await cloud.downloadFile({
                  fileID: 'share/' + event.scene + '.jpeg'
            })
            console.log('get from cos')
            return 'share/' + event.scene + '.jpeg'
       //不存在则进行生成
      } catch (e) {
            console.log('creat start')
            //先获取，需要是已发布页面
            const bufferContent = await cloud.openapi.wxacode.getUnlimited({
                  scene: event.scene,
                  page: 'pages/detail/detail'
            })
            console.log(bufferContent)
            //再上传云存储
            const fileContent = await cloud.uploadFile({
                  cloudPath: 'share/' + event.scene + '.jpeg',
                  fileContent: bufferContent.buffer
            })
            return fileContent.fileID
      }
}