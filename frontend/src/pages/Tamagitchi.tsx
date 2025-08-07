import Frame from '../components/Frame'
import { PetMood } from '../types'
import SpriteContent from './SpriteContent'

function Tamagitchi() {
  return (
    <div className='wrapper'>
    <Frame>
      <SpriteContent spriteType={PetMood.Default}></SpriteContent>
    </Frame>
    </div>
  )
}

export default Tamagitchi
