import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'
import axios from 'axios'

export function getRecommend() {
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })
  return jsonp(url, data, options)
}

export function getDiscList() {
  // 要用代理（webpac.dev.conf.js）加上header参数
  const url = '/api/getDiscList'
  const data = Object.assign({}, commonParams, {
    // picmid: 1,
    rnd: Math.random(),
    g_tk: 5381,
    format: 'json',
    // inCharset: 'utf8',
    // outCharset: 'utf8',
    notice: 0,
    platform: 'yqq',
    hostUin: 0,
    sin: 0,
    ein: 19,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    // jsonpCallback: "getPlaylistTags",
  })
  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
