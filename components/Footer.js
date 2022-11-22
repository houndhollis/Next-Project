import styled from 'styled-components'
import { useState } from 'react'

const Footer = () => {

  const [email,setEmail] = useState('Email')
  
  const handleEmail = () => {
    setEmail('hollis9797@naver.com')
  }

  return (
    <FooterContainer>
      <FooterInnerContainer>
        <span>KimHero Contact</span>
         <FooterSpanBox>
           <span onMouseMove={handleEmail} >{email}</span>
           <a target='_blank' href='https://github.com/houndhollis'><span>Github</span></a>
           <a target='_blank' href='https://blog.naver.com/hollis9797'><span>Blog</span></a>
         </FooterSpanBox>
      </FooterInnerContainer>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
  width:100%;
  height: 60px;
  padding: 0 2%;
  background-color: black;
`
const FooterInnerContainer = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 100%;
  margin:0 auto;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > span {
    font-size: 25px;
    @media screen and (max-width: 450px){
      display: none;
    }
  }
`
const FooterSpanBox = styled.div`
  @media screen and (max-width: 450px){
      width: 100%;
      display: flex;
      justify-content: flex-end;
    }
 & span {
   margin-left: 10px;
 }
`