import React from 'react'
import styled from 'styled-components'
import orangeThingy from '../assets/orange-thingy.svg'

const Container = styled.div`
  position: relative;
  display: inline-block;
  top: -20px;
`

const Image = styled.img`
  display: block;
  width: 280px;
  height: 90px;
`

const OverlayContent = styled.div`
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 32px;
  font-family: 'Pixel-font', sans-serif;
`

interface OrangeContainerProps {
  children?: React.ReactNode
}

const OrangeContainer: React.FC<OrangeContainerProps> = ({ children }) => {
  return (
    <Container>
      <Image src={orangeThingy} alt='orange thingy' />
      <OverlayContent>{children}</OverlayContent>
    </Container>
  )
}

export default OrangeContainer
