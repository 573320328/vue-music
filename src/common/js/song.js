export default class Song {
  constructor({id, songmid, singer, name, album, duration, image, url}) {
    this.id = id
    this.songmid = songmid
    this.singer = singer
    this.name = name
    this.album = album
    this.duration = duration
    this.image = image
    this.url = url
  }
}

export function createSong(musicData) {
  return new Song({
    id: musicData.songid,
    songmid: musicData.songmid,
    singer: filterSinger(musicData.singer),
    name: musicData.songname,
    album: musicData.albumname,
    duration: musicData.interval,
    image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}.jpg?max_age=2592000`,
    url:`http://dl.stream.qqmusic.qq.com/C400${musicData.albummid}.m4a`
    // url: `http://172.18.250.155/dl.stream.qqmusic.qq.com/C400${musicData.albummid}.m4a?fromtag=68`,
    // url:`http://101.206.167.138:9990/dl.stream.qqmusic.qq.com/${musicData.albummid}.m4a?vkey=927C721D272189FED484EF874A8D646C6B13C20C53277FB99D496DA6804CDF1B64C33A4F049D24FFC436`
  })

}

function filterSinger(singer) {
  let ret = []
  if (!singer) {
    return ''
  }
  singer.forEach((s) => {
    ret.push(s.name)
  })
  return ret.join('/')
}
