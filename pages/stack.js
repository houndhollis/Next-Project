import Layout from '../components/Layout'
import styled from 'styled-components'
import PreButton from '../components/PreButton'
import Link from 'next/link'

const StackPage = () => {
    return (
       <Layout>
           <StackContainer>
               <StackInnerContainer>
                   <h1>Stack</h1>
                   <span>좋은 UI 와 기능으로 사용자의 만족도를 높이기</span>
                   <FrontEndItem>
                      <h3>FrontSkills</h3>
                      <div>📕 Language :<p> JavaScript, TypeScript</p></div>
                      <div>📗 FramWork / Library :<p> React, Redux, React-query, Next.js, Recoil, Zustand</p></div>
                      <div>📘 MarkUp :<p> HTML5, CSS3, SCSS, Emotion, Styled-Components</p></div>
                      <div>📙 Tool :<p> Git, Github, Notion, Discord</p></div>
                    <Link href={'/projects'}><PreButton/></Link>
                   </FrontEndItem>
               </StackInnerContainer>
           </StackContainer>
       </Layout>
    )
}

export default StackPage

const StackContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 180px);
  max-width: 1280px;
  margin: 0px auto;
  padding: 0 2%;
`

const StackInnerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  margin-bottom: 40px;
  flex-direction:column;
  @media screen and (max-width:400px ){
    margin-top: 20px;
  }
  & h1 {
      margin-bottom:5px;
  }
`

const FrontEndItem = styled.div`
  margin-top: 40px;
  border: 2px dashed #666;
  border-radius: 20px;
  padding: 20px;
  & div {
      font-size: 18px;
  }
  & p {
      background-color: #eee;
      margin:10px;
      padding: 3px;
      font-size: 16px;
      color: #570b57;
      margin-bottom: 20px;
      transition: all 0.1s ease-in;
      &:hover{
          transform: scale(1.03);
          color: #8b118b;
      }
  }
`