export interface LyricLine {
  original: string
  translation: string
}

export interface LyricGroup {
  lyrics: (string | LyricLine)[]
}

export { default as soundCheckLyrics } from './sound-check'
export { default as lineLyrics } from './line'
