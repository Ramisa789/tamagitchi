import React from 'react'
import styled from 'styled-components'
import { PetMood } from '../types'
import defaultSprite from '../assets/default-sprite.png'
import eepySprite from '../assets/eepy-sprite.png'
import joySprite from '../assets/joy-sprite.png'
import sickSprite from '../assets/sick-sprite.png'
import defaultEmote from '../assets/happy-emote.png'
import sickEmote from '../assets/sick-emote.png'
import joyEmote from '../assets/joy-emote.png'
import eepyEmote from '../assets/eepy-emote.png'

const SpriteWrapper = styled.div`
  margin-bottom: 60px;
`

const PetWrapper = styled.div`
  width: 280px;
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
    margin-top: 15px;
    animation: bounce 1.5s steps(1, end) infinite;
  }

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
  }
`

const EmoteWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 130px;
    height: auto;
    margin-top: 15px;
    animation: bounce 0.8s steps(1, end) infinite;
  }

  @keyframes bounce {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-5px);
    }
  }
`

const spriteMap: Record<PetMood, string> = {
  [PetMood.Default]: defaultSprite,
  [PetMood.Sleepy]: eepySprite,
  [PetMood.Happy]: joySprite,
  [PetMood.Sick]: sickSprite
}

const emoteMap: Record<PetMood, string> = {
  [PetMood.Default]: defaultEmote,
  [PetMood.Sleepy]: eepyEmote,
  [PetMood.Happy]: joyEmote,
  [PetMood.Sick]: sickEmote
}

interface SpriteContentProps {
  spriteType: PetMood
}

const SpriteContent: React.FC<SpriteContentProps> = ({ spriteType }) => {
  const spriteSrc = spriteMap[spriteType]
  const emoteSrc = emoteMap[spriteType]
  return (
    <SpriteWrapper>
      <EmoteWrapper>
        <img src={emoteSrc} alt={`${spriteType} emote`} />
      </EmoteWrapper>

      <PetWrapper>
        <img src={spriteSrc} alt={`${spriteType} sprite`} />
      </PetWrapper>
    </SpriteWrapper>
  )
}

export default SpriteContent
