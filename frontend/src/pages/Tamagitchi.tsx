import Frame from '../components/Frame'
import { PetMood } from '../types'
import SpriteContent from '../components/SpriteContent'
import CountdownTimer from '../components/CountDownTimer'
import OrangeContainer from '../components/OrangeContainer'
import styled from 'styled-components'

const Subtext = styled.div`
  margin-top: 10px;
  margin-bottom: 20px;
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
        <SpriteContent spriteType={PetMood.Default} />
      </Frame>
    </div>
  )
}

export default Tamagitchi
