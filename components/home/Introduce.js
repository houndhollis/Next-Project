import styled from 'styled-components'
import Link from 'next/link'

const Introduce = () => {
  return (
    <Container>
      <IntroTextContainer>
        <p>안녕하세요! <br/>프론트 엔드 개발자를 꿈꾸는<br/>김영웅입니다.</p>
        <span>새로운 기술 사용, Interaction 한 페이지를 좋아합니다.<br/>
              코드 리뷰와 협업을 좋아하고 커뮤니케이션을 중요시합니다. <br/>
              스스로 발전하고 싶은 욕구가 크며, 오늘의 나는 어제의 나보다 <br/>
              항상 더 발전 있는 개발자입니다.     
        </span>
        <div>
            <button><Link href={'/aboutme'}>About me !</Link></button>
        </div>
      </IntroTextContainer>
    </Container>
  )
}

export default Introduce

const Container = styled.div`
margin-top: 90px;
`
const IntroTextContainer = styled.div`
  letter-spacing: -0.3px;
  & p {
        font-size: 36px;
        line-height: 40px;
    }
    & span {
        font-size: 18px;
        line-height: 26px;
    }
    & button {
        width: 300px;
        margin-top: 30px;
        padding: 7px 0;
        background-color: #151515;
        font-size: 20px;
        border: 1px solid #eee;
        border-radius: 5px;
        color: #eee;
        transition: 0.3s;
        cursor: pointer;
        &:hover {
            color: #151515;
            background-color: #eee;
            transform: scale(1.03);
        }
    }
    @media screen and (max-width:892px){
    & p {
        font-size: 35px;
        line-height: 40px;
    }
    & span {
        font-size: 20px;
    }
  }
    @media screen and (max-width:526px){
    & p {
        font-size: 29px;
        line-height: 34px;
    }
    & span {
        font-size: 14px;
    }
    & button {
        width: 200px;
        font-size: 16px;
        margin-top: 50px;
    }
  }
`