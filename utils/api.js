'use strict';

module.exports = {
  PAGE_WORK: '/pages/work-detail/work-detail',

  HOST_WORK: 'http://work.artand.cn/',
  HOST_HEAD: 'http://head.artand.cn/',
  HOST_IOS: 'http://ios1.artand.cn/',
  HOT: 'discover/work/hot',
  LATEST: 'discover/work/new',

  get (url) {
    return new Promise((resolve, reject) => {
      wx.request({
        url: url,
        headers: {
          'Content-Type': 'application/json'
        },
        success: function (res) {
          resolve(res)
        },
        fail: function (res) {
          reject(res)
        }
      })
    })
  }

};
