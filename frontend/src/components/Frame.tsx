import React from 'react'
import styled from 'styled-components'

const CenterWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f0f0f0;
`

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
  background-color: #C0D470;
  z-index: 1;
  margin-top: -30px;
  border: 3px solid #67835C;

`

const Frame = () => {
  return (
    <CenterWrapper>
      <FrameBack>
        <FrameBackdrop>
        </FrameBackdrop>
      </FrameBack>
    </CenterWrapper>
  )
}

export default Frame
