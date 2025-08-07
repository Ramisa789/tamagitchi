import React from 'react'
import styled from 'styled-components'
import { PetMood } from '../types'
import defaultSprite from '../assets/default-sprite.png'
import eepySprite from '../assets/eepy-sprite.png'
import joySprite from '../assets/joy-sprite.png'
import sickSprite from '../assets/sick-sprite.png'

const PetWrapper = styled.div`
  width: 280px;
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
    margin-top: 50px;
    animation: bounce 1s steps(1,end) infinite;
  }

  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-2px);
    }
  }
`

const spriteMap: Record<PetMood, string> = {
  [PetMood.Default]: defaultSprite,
  [PetMood.Sleepy]: eepySprite,
  [PetMood.Happy]: joySprite,
  [PetMood.Sick]: sickSprite
}

interface SpriteContentProps {
  spriteType: PetMood
}

const SpriteContent: React.FC<SpriteContentProps> = ({ spriteType }) => {
  const spriteSrc = spriteMap[spriteType]
  return (
    <PetWrapper>
      <img src={spriteSrc} alt={`${spriteType} sprite`} />
    </PetWrapper>
  )
}

export default SpriteContent
