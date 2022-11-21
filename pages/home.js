import styled from 'styled-components'
import Header from "../components/Header"
import MetaHead from '../components/MetaHead'
import Introduce from '../components/home/Introduce'
import IntroImg from '../components/home/IntroImg'

const Home = () => {
  return (
    <div>
      <MetaHead/>
      <Header/>
      <HomeContainer>
        <HomeInfo>
          <Introduce/>
          <IntroImg/>
        </HomeInfo>
        <div className='textContainer'>
          <HomeText>
            <span className='text'>F</span>
            <span className='text'>R</span>
            <span className='text'>O</span>
            <span className='text'>N</span>
            <span className='text'>T</span>
          </HomeText>
        </div>
      </HomeContainer>
    </div>
  )
}

export default Home

const HomeContainer = styled.div`
padding-top: 60px;
padding-left: 2%;
padding-right: 2%;
max-width: 1280px;
height: 100vh;
margin: 0 auto;
display: flex;
flex-direction: column;
justify-content: space-between;
& .textContainer {
  display:inline-block;
  text-align: center;
  height: clamp(2rem,22vw,16rem);
  margin-bottom: 10px;
}
`
const HomeInfo = styled.div`
  display: flex;
  padding: 0 3%;
  justify-content: space-between;
  @media screen and (max-width: 911px){
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`

const HomeText = styled.div`
  display:inline-block;
  overflow:hidden;
  white-space:nowrap;

  @keyframes popup {
  0% {
    margin-top:100%;
  }
  100% {
    margin-top:0%;
  }
}

.text {
  display:inline-block;
  font-size:clamp(2rem,22vw,16rem);
  font-weight:bold;
  height:clamp(2rem,22vw,16rem);
  line-height:clamp(2rem,22vw,16rem);
  float:left;
  margin-top:100%;
}

.text:nth-child(1) {
  animation:popup 1s ease;
  animation-delay:0s;
  animation-fill-mode:forwards;
}
.text:nth-child(2) {
  animation:popup 1s ease;
  animation-delay:0.2s;
  animation-fill-mode:forwards;
}
.text:nth-child(3) {
  animation:popup 1s ease;
  animation-delay:0.4s;
  animation-fill-mode:forwards;
}
.text:nth-child(4) {
  animation:popup 1s ease;
  animation-delay:0.6s;
  animation-fill-mode:forwards;
}
.text:nth-child(5) {
  animation:popup 1s ease;
  animation-delay:0.8s;
  animation-fill-mode:forwards;
}
`