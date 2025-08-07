import Frame from '../components/Frame'
import { PetMood } from '../types'
import SpriteContent from '../components/SpriteContent'
import CountdownTimer from '../components/CountDownTimer'
import OrangeContainer from '../components/OrangeContainer'
import styled from 'styled-components'
import background_plants from '../assets/background-plants.svg'
import React, { useState, useEffect } from 'react'

const Subtext = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
`

const BackgroundSprite = styled.img`
  image-rendering: pixelated;
  image-rendering: crisp-edges;
  width: 500px;
  height: 500px;
  position: fixed;
  top: 100;
  left: 100;
  z-index: -1;
`
const POLL_INTERVAL = 5000 // every 5 seconds

function Tamagitchi() {
  const [mood, setMood] = useState<PetMood>(PetMood.Default)
  const [timestamp, setTimestamp] = useState<number>(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5000/api/commits')
        const data = await response.json()
        const { mood: moodText, latest_commit_unix_ms } = data

        if (Object.values(PetMood).includes(moodText as PetMood)) {
          setMood(moodText as PetMood)
          setTimestamp(latest_commit_unix_ms)
        } else {
          console.warn('Unexpected mood:', moodText)
        }
      } catch (err) {
        console.error('Error fetching mood data:', err)
      }
    }

    fetchData() // initial fetch immediately

    const intervalId = setInterval(fetchData, POLL_INTERVAL) // poll every 5s

    return () => clearInterval(intervalId) // cleanup on unmount
  }, [])

  return (
    <div className='wrapper'>
      <Frame
        footer={
          <>
            <Subtext>Time until pet gets sick:</Subtext>
            <OrangeContainer>
              <CountdownTimer startTimestamp={timestamp} />
            </OrangeContainer>
          </>
        }
      >
        <SpriteContent spriteType={mood} />
        <BackgroundSprite src={background_plants} alt='Sprite of plants' />
      </Frame>
    </div>
  )
}

export default Tamagitchi
