import Frame from '../components/Frame'
import { PetMood } from '../types'
import SpriteContent from '../components/SpriteContent'
import CountdownTimer from '../components/CountDownTimer'
import OrangeContainer from '../components/OrangeContainer'

function Tamagitchi() {
  return (
    <div className='wrapper'>
      <Frame
        footer={
          <OrangeContainer>
            <CountdownTimer startTimestamp={1754599986703} />
          </OrangeContainer>
        }
      >
        <SpriteContent spriteType={PetMood.Sick} />
      </Frame>
    </div>
  )
}

export default Tamagitchi
