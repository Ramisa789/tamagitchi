import Frame from '../components/Frame'
import { PetMood } from '../types'
import SpriteContent from './SpriteContent'

function Tamagitchi() {
  return (
    <Frame>
      <SpriteContent spriteType={PetMood.Default}></SpriteContent>
    </Frame>
  )
}

export default Tamagitchi
