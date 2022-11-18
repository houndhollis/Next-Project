import styled from 'styled-components'

const Randing = () => {
  return (
    <Container>
      <div className="square circle">
          <span></span>
          <span></span>
          <span></span>
          <div className="content">
              <h1>안녕하세요</h1>
              <p>FrontEnd Developer 꿈꾸는</p>
              <p>김영웅의 포트폴리오 사이트입니다.</p>
              <a href="/home" target="_blank">Home 가기</a>
          </div>
      </div>
    </Container>
  )
}

export default Randing

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #f1f1f1;
    & .square {
    position: relative;
    margin: 0 10px;
    width: 400px;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width:516px) {
      width: 300px;
      height: 300px;
    }
    @media screen and (max-width:387px) {
      width: 240px;
      height: 240px;
    }
}
.square span:nth-child(1) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid black;
    border-radius: 32% 58% 69% 43% / 48% 32% 59% 55%;
    transition: 0.5s;
    animation: animate 6s linear infinite;
}

.circle:hover span:nth-child(1) {
    border: none;
    background: #84cdfa;
}

.square span:nth-child(2) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid black;
    border-radius: 38% 62% 63% 37% / 41% 44% 56% 59%;
    transition: 0.5s;
    animation: animate 4s linear infinite;
}

.circle:hover span:nth-child(2) {
    border: none;
    background: #84cdfa;
}


.square span:nth-child(3) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid black;
    border-radius: 31% 45% 74% 35% / 38% 56% 51% 87%;
    transition: 0.5s;
    animation: animate2 10s linear infinite;
}


.circle:hover span:nth-child(3) {
    border: none;
    background: #84cdfa;
}


.content {
    position: relative;
    padding: 40px 60px;
    color: #fff;
    text-align: center;
    transition: 0.5s;
    z-index: 1000;
    & h1 {
      @media screen and (max-width:387px) {
      font-size: 20px;
      }
    }
}
.content p {
  font-size: 18px;
  @media screen and (max-width:387px) {
  font-size: 12px;
  }
}
.content a {
    position: relative;
    display: inline-block;
    margin-top: 10px;
    border: 2px solid #fff;
    padding: 6px 18px;
    text-decoration: none;
    color: #fff;
    font-weight: 600;
    border-radius: 73% 27% 44% 56% / 49% 44% 56% 51%;
    transition: 0.3s;
    @media screen and (max-width:387px) {
    padding: 3px 9px;
    font-size: 18px;
    }
}

.content a:hover {
    background: white;
    color: #333;
}

@keyframes animate {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

@keyframes animate2 {
    0% {
        transform: rotate(360deg);
    }
    100% {
        transform: rotate(0deg);
    }
} 
`

