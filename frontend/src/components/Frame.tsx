import React from 'react'
import styled from 'styled-components'
import delete_icon from '../assets/delete-icon.svg'

const FrameBack = styled.div`
  position: relative;
  width: 519px;
  height: 750px;
  background-color: #dff0bb;
  border: 3px solid #67835c;
  overflow: hidden;
  border-radius: 8px;
`

const FrameBackdrop = styled.div`
  width: 473px;
  height: 520px;
  background-color: #c0d470;
  z-index: 1;
  margin-top: -55px;
  border: 3px solid #67835c;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`

const FrameBackdropContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px;
  margin-bottom: 50px;
`

const TopRightText = styled.p`
  font-size: 48px;
  font-weight: bold;
  color: #67835c;
  margin: 0;
`

const ExitLink = styled.a`
  display: inline-block;

  img {
    transition: transform 0.2s ease;
  }

  &:hover img {
    transform: translateY(-3px);
  }
`

const FrameFooter = styled.div`
  font-size: 24px;
  color: #67835c;
  z-index: 1;
`

interface FrameProps {
  children?: React.ReactNode
  footer?: React.ReactNode
}

const Frame: React.FC<FrameProps> = ({ children, footer }) => {
  return (
    <FrameBack>
      <HeaderContainer>
        <TopRightText>TamaGitchi</TopRightText>
        <ExitLink href='/'>
          <img src={delete_icon} alt='Exit icon' height={60} width={60} />
        </ExitLink>
      </HeaderContainer>
      <FrameBackdropContainer>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <FrameBackdrop>{children}</FrameBackdrop>
        {footer && <FrameFooter>{footer}</FrameFooter>}
      </div>
      </FrameBackdropContainer>
    </FrameBack>
  )
}

export default Frame
