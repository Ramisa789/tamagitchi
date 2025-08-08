import styled, { keyframes } from 'styled-components'
import Frame from '../components/Frame'
import playButton from '../assets/play-button.svg'
import nerdEmote from '../assets/nerd-emote.png'
import sparklesOne from '../assets/sparkles-1.png'
import sparklesTwo from '../assets/sparkles-2.png'

const PlayButton = styled.a`
  background: none;
  border: none;
  padding: 0;

  img {
    width: 280px;
    height: 90px;
    image-rendering: pixelated;
    image-rendering: crisp-edges;

    &:hover {
      transform: scale(1.03); /* grow 5% bigger on hover */
    }
  }
`

const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;

  img {
    margin-bottom: 20px;
    height: 100px;
    animation: bounce 1s steps(1, end) infinite;
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

const float = keyframes`
  0%   { transform: translateY(0); }
  50%  { transform: translateY(-8px); }
  100% { transform: translateY(0); }
`

const WelcomeText = styled.h1`
  color: #67835c;
  font-size: 80px;
  font-family: 'Pixel-font', sans-serif;
  text-shadow:
    -4px -4px 0 white,
    4px -4px 0 white,
    -4px 4px 0 white,
    4px 4px 0 white;
  animation: ${float} 2s ease-in-out infinite;
  margin: 0;
`

const WelcomeSubText = styled.div`
  color: #67835c;
  font-size: 52px;
  font-family: 'Pixel-font', sans-serif;
  text-shadow:
    -4px -4px 0 white,
    4px -4px 0 white,
    -4px 4px 0 white,
    4px 4px 0 white;
`

const flash = keyframes`
  0%, 49% {
    opacity: 1;
  }
  50%, 100% {
    opacity: 0;
  }
`

const reverseFlash = keyframes`
  0%, 49% {
    opacity: 0;
  }
  50%, 100% {
    opacity: 1;
  }
`

const Sparkle = styled.img`
  position: absolute;
  top: 0;
  height: 40px;
  image-rendering: pixelated;
`

const SparkleOne = styled(Sparkle)`
  left: -140px;
  top: -50px;
  animation: ${flash} 1s infinite linear !important;
`

const SparkleTwo = styled(Sparkle)`
  right: -160px;
  animation: ${reverseFlash} 2s infinite linear !important;
`

const EmoteContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  height: 100px;
`

function Home() {
  return (
    <div className='wrapper'>
      <Frame
        footer={
          <div style={{ marginTop: '20px' }}>
            <PlayButton href='/tamagitchi'>
              <img src={playButton} alt='play button' />
            </PlayButton>
          </div>
        }
      >
        <WelcomeContainer>
          <EmoteContainer>
            <SparkleOne src={sparklesOne} alt='sparkles 1' />
            <img src={nerdEmote} alt='Nerd emote' height={100} />
            <SparkleTwo src={sparklesTwo} alt='sparkles 2' />
          </EmoteContainer>
          <WelcomeText>WELCOME</WelcomeText>
          <WelcomeSubText>to TamaGitchi</WelcomeSubText>
        </WelcomeContainer>
      </Frame>
    </div>
  )
}

export default Home
