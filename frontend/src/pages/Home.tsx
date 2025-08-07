import styled from 'styled-components'
import Frame from '../components/Frame'
import playButton from '../assets/play-button.svg'

const PlayButton = styled.a`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;

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
`

const WelcomeText = styled.div`
  color: #67835c;
  font-size: 80px;
  font-family: 'Pixel-font', sans-serif;
  text-shadow:
    -4px -4px 0 white,
    4px -4px 0 white,
    -4px 4px 0 white,
    4px 4px 0 white;
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
          <WelcomeText>WELCOME</WelcomeText>
          <WelcomeSubText>to Tamagitchi</WelcomeSubText>
        </WelcomeContainer>
      </Frame>
    </div>
  )
}

export default Home
