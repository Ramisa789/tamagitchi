import React from 'react'
import styled from 'styled-components'

const FrameBack = styled.div`
  position: relative;
  width: 519px;
  height: 750px;
  background-color: #dff0bb;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
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
`

const TopRightText = styled.div`
  position: absolute;
  top: 12px;
  left: 20px;
  font-size: 48px;
  font-weight: bold;
  color: #67835c;
  z-index: 2;
`

interface FrameProps {
  children?: React.ReactNode
}

const Frame: React.FC<FrameProps> = ({ children }) => {
  return (
      <FrameBack>
        <TopRightText>TamaGitchi</TopRightText>
        <FrameBackdrop>{children}</FrameBackdrop>
      </FrameBack>
  )
}

export default Frame
