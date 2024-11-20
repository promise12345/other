/**
// 方法一：直接使用函数，在main.js调用
export default function(){
  app.config.globalProperties.$translate = (key) => {
    // 获取 `options` 对象的深层属性
    // 使用 `key` 作为索引
    return key.split('.').reduce((o, i) => {
      if (o) return o[i]
    }, options)
  }
}
*/


//方法二：使用对象，则必须给对象一个install属性
export default {
  /**
   * @param {*} app Vue构造器
   * @param {*} options 可选的选项对象
   */
    install: (app, options) => {
      // 注入一个全局可用的 $translate() 方法
      app.config.globalProperties.$translate = (key) => {
        // 获取 `options` 对象的深层属性
        // 使用 `key` 作为索引
        return key.split('.').reduce((o, i) => {
          if (o) return o[i]
        }, options)
      }
    }
  }