import styled from 'styled-components'
import Image from 'next/image'

const ProjectItem = (props) => {
    return (
       <ItemContainer>
          <ImgContainer>
              <div>
                {/* <div style={{backgroundImage: `url(${Bg})`}}/> */}
                <Image src={props.projectImg} width={3000} height={300} 
                objectFit="cover"
                objectPosition="center" alt='myProfile'/>
              </div>
          </ImgContainer>
          <TextContainer>
            <div className='item-title'>
                <h1>{props.title}</h1>
                <h3>{props.subTitle}</h3>
                <span>{props.date}</span>
            </div>
            <div className='item-text'>
                <span>
                   {props.description}
                </span>            
            </div>
            <div className='item-stack fd-col'>
                <h3>Stack</h3>
                <span>{props.skills}</span>
                <span>{props.make}</span>
            </div>
            <div className='item-link fd-col'>
                <h3>Link</h3>
                <span>💻 : <a target='_blank' href={props.gitURL}>깃허브 바로가기</a></span>
                <span>🔑 : <a target='_blank' href={props.site}>배포사이트 바로가기</a></span>
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
  margin-bottom: 100px;
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