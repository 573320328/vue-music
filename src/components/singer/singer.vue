<template>
  <div>
    歌手页面
  </div>
</template>

<script type="text/ecmascript-6">
  import {getSingerList} from "api/singer";
  import {ERR_OK} from 'api/config'

  const HOT_NAME = '热门'
  const HOT_SINGER_LENGTH = 10
  export default {
    data() {
      return {
        singers: []
      }
    },
    created() {
      this._getSingerList()
    },
    methods: {
      _getSingerList() {
        getSingerList().then((res) => {
          if (res.code === ERR_OK) {
            console.log(res.data.list)
            this.singers = res.data.list
          }
        })
      },
      _normalizeSinger(list) {
        let map = {
          hot: {
            title: HOT_NAME,
            items: []
          }
        }
        list.forEach((item, index) => {
          if (index < HOT_SINGER_LENGTH) {
              map.hot.item.push({
                
              })
          }
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .singer
    position: fixed
    top: 88px
    bottom: 0
    width: 100%
</style>
