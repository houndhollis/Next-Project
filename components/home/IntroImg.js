import styled from 'styled-components'
import Lottie from 'react-lottie-player'
import LottieJson from '/public/Lottie.json'

const IntroImg = () => {
  return (
    <ImgContainer>
        <Lottie
        loop
        animationData={LottieJson}
        play
        style={{ width: 400, height: 350 }}
        />
    </ImgContainer>
  )
}

export default IntroImg

const ImgContainer = styled.div`
  margin-top: 90px;
  @media screen and (max-width:526px) {
      margin-top: 0;
  }
`