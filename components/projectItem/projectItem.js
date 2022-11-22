import styled from 'styled-components'
import Image from 'next/image'

const ProjectItem = () => {
    return (
       <ItemContainer>
          <ImgContainer>
              <div>
                {/* <div style={{backgroundImage: `url(${Bg})`}}/> */}
                <Image src='/puppybuddy.jpeg' width={3000} height={300} 
                objectFit="cover"
                objectPosition="center" alt='myProfile'/>
              </div>
          </ImgContainer>
          <TextContainer>
            <div className='item-title'>
                <h1>Puppy Buddy 🐶</h1>
                <h3>강아지 친구 만들어 같이 산책하는 서비스</h3>
                <span>2022.09 ~ 2022.10</span>
            </div>
            <div className='item-text'>
                <span>
                   코드스테이츠 부트캠프에서 진행한 메인 프로젝트 입니다. 프론트 2명, 백엔드 2명 강아지 친구 만들어주는 서비스로
                   웹을 이용하는 견주분 들은 회원가입을 진행할때 공공 API 를 통한 동물등록 번호 인증을 통해 견주 분들만 웹을 
                   사용 할수 있으며, 검색 기능 & 필터를 통하여 크기,성별을 선택하여 원하는 강아지 친구를 만들수 있는 프로젝트 
                   입니다.
                </span>            
            </div>
            <div className='item-stack fd-col'>
                <h3>Stack</h3>
                <span>Vite, JS, React, Styled-Components, zustand, Axios, AWS S3</span>
                <span>랜딩페이지, 메인페이지, 글 작성, 상세 페이지, 다크모드,필터 검색 기능</span>
            </div>
            <div className='item-link fd-col'>
                <h3>Link</h3>
                <span>💻 : <a target='_blank' href='https://github.com/codestates-seb/seb39_main_019'>깃허브 바로가기</a></span>
                <span>🔑 : <a target='_blank' href='http://seb39-main-019-front.s3-website.ap-northeast-2.amazonaws.com/'>배포사이트 바로가기</a></span>
            </div> 
          </TextContainer>
       </ItemContainer>
    )
}

export default ProjectItem

const ItemContainer = styled.div`
  background-color: #252525;
  height: 600px;
  border-radius: 20px;
  display: flex;
  margin-bottom: 30px;
  @media screen and (max-width:1025px){
      flex-direction:column;
      height: 100%;
  }
`

const ImgContainer = styled.div`
  padding: 30px;
  width: 75%;
  @media screen and (max-width:1025px){
      width: 100%;
      height: 400px;
  }
  & div {
      height: 100%;
      border-radius: 20px;
      background-color: #fff;
      & img {
          width: 100%;
          height: 100%;
          border-radius: 10px;
      }
  }
`

const TextContainer = styled.div`
    width: 100%;
    padding: 10px 40px 10px 20px; 
    @media screen and (max-width:1025px){
      & h1 {
          margin: 0;
      }
      padding: 10px 20px;
    }
    & .item-text {
        background-color: #303030;
        padding: 10px 20px;
        margin-top: 30px;
        border-radius: 10px;
        & span {
            line-height: 23px;
        }
    }
    & .fd-col {
        display: flex;
        flex-direction: column;
        & span {
            display: inline-block;
            margin-bottom: 10px;
        }
    }
`