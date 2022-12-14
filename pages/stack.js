import Layout from '../components/Layout'
import styled from 'styled-components'
import PreButton from '../components/PreButton'
import Link from 'next/link'

const StackPage = () => {
    return (
       <Layout>
           <StackContainer>
               <StackInnerContainer>
                   <h1>π§ Stack</h1>
                   <span>μ’μ UI μ κΈ°λ₯μΌλ‘ μ¬μ©μμ λ§μ‘±λλ₯Ό λμ΄κΈ°</span>
                   <FrontEndItem>
                      <h3>FrontSkills</h3>
                      <div>π Language :<p> JavaScript, TypeScript</p></div>
                      <div>π FramWork / Library :<p> React, Redux, React-query, Next.js, Recoil, Zustand</p></div>
                      <div>π MarkUp :<p> HTML5, CSS3, SCSS, Emotion, Styled-Components</p></div>
                      <div>π Tool :<p> Git, Github, Notion, Discord</p></div>
                      <FrontBtn>
                        <Link href={'/projects'}><PreButton/></Link>
                      </FrontBtn>
                   </FrontEndItem>
               </StackInnerContainer>
           </StackContainer>
       </Layout>
    )
}

export default StackPage

const StackContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 160px);
  max-width: 1280px;
  margin: 0px auto;
  padding: 0 2%;
`

const StackInnerContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
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
  background-color: #252525;
  & div {
      font-size: 18px;
  }
  & p {
      background-color: #eee;
      border-radius: 5px;
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
const FrontBtn = styled.div`
 display: flex;
 justify-content: flex-end;
`