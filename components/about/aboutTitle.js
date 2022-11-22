import Image from 'next/image'
import styled from 'styled-components'
import TitleSubText from './titleSubText'
import SubTextBottom from './subTextBottom'

const AboutTitle = () => {
  return (
    <AboutMeContainer>
      <AboutTopContainer>
        <TitleImg>
            <Image src='/myImage.jpeg' width={500} height={600} alt='myProfile'/>
        </TitleImg>
        <TitleText>
            <span>프론트엔드 개발자 김영웅입니다.</span>
            <p>협업 활동을 좋아하며, 새로운 지식 습득을 즐깁니다🔥 </p>
            <TitleInfoText>
                <TitleSubText/>
            </TitleInfoText>
        </TitleText>
      </AboutTopContainer>
      <AboutBottomContainer>
        <SubTextBottom/>
      </AboutBottomContainer>
    </AboutMeContainer>
  )
}

export default AboutTitle

const AboutMeContainer = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 80px auto; 
  padding: 0 4%;
`


const AboutTopContainer = styled.div`
  display: flex;
  @media screen and (max-width:1000px){
    margin: 50px auto;
    flex-direction: column;
    align-items: center;
  }
`

const TitleImg = styled.div`
  & img {
    border-radius: 10px;
    @media screen and (max-width:1000px){
      flex-direction: column;
      align-items: center;
      margin-bottom: 20px;
      width: 100%;
      height: 400px;
    }
  }
`

const TitleText = styled.div`
  margin-left: 80px;
  display: grid;
  height: 100%;
  @media screen and (max-width:1000px){
    margin-left:0;
  }
  & > span {
    width: 23ch;
    height: 30px;
    animation: typing 2s steps(22), blink .5s step-end infinite alternate;
    white-space: nowrap;
    overflow: hidden;
    border-right: 3px solid;
    font-family: monospace;
    font-size: 2em;
    @keyframes typing {
    from {
        width: 0
      }
    }  
    @keyframes blink {
    50% {
        border-color: transparent
      }
    }
  }
  & p {
    margin: 0;
  }
`
const TitleInfoText = styled.div`
  margin-top: 30px;

`
const AboutBottomContainer = styled.div`

`