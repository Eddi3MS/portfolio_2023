import { useRef, useState } from 'react'
import { Pause, Play } from 'phosphor-react'
import * as S from './Music.styled'

const Music = () => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const setStateChange = useState(false)[1]

  const handlePlay = () => {
    audioRef.current?.play()
    setStateChange((curr) => !curr)
  }

  const handlePause = () => {
    audioRef.current?.pause()
    setStateChange((curr) => !curr)
  }

  const isPlaying = audioRef.current && !audioRef.current.paused
  return (
    <>
      <audio ref={audioRef} src='/interstellar.mp3' loop />
      <S.Music onClick={isPlaying ? handlePause : handlePlay}>
        {isPlaying ? (
          <Pause size={24} weight='bold' />
        ) : (
          <Play size={24} weight='bold' />
        )}
      </S.Music>
    </>
  )
}

export default Music
