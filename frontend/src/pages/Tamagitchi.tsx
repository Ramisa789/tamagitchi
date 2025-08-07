import Frame from '../components/Frame'
import { PetMood } from '../types'
import SpriteContent from '../components/SpriteContent'
import CountdownTimer from '../components/CountDownTimer'
import OrangeContainer from '../components/OrangeContainer'
import styled from 'styled-components'
import background_plants from '../assets/background-plants.svg'

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

function Tamagitchi() {
  return (
    <div className='wrapper'>
      <Frame
        footer={
          <>
            <Subtext>Time until pet gets sick:</Subtext>
            <OrangeContainer>
              <CountdownTimer startTimestamp={1754597147936} />
            </OrangeContainer>
          </>
        }
      >
        <SpriteContent spriteType={PetMood.Sleepy} />
        <BackgroundSprite src={background_plants} alt='Sprite of plants' />
      </Frame>
    </div>
  )
}

export default Tamagitchi
