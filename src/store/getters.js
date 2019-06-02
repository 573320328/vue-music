export const singer = stats => stats.singer

export const playing = stats => stats.playing

export const fullScreen = stats => stats.fullScreen

export const playlist = stats => stats.playlist

export const sequenceList = stats => stats.sequenceList

export const mode = stats => stats.mode

export const currentIndex = stats => stats.currentIndex

export const currentSong = (stats) => {
  console.log(stats.playlist[stats.currentIndex])
  return stats.playlist[stats.currentIndex] || []
}
