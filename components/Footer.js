import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterInnerContainer>
        <span>KimHero Contact</span>
         <FooterSpanBox>
           <a target='_blank' href='https://blog.naver.com/hollis9797'><span>Blog</span></a>
           <a target='_blank' href='https://github.com/houndhollis'><span>Github</span></a>
         </FooterSpanBox>
      </FooterInnerContainer>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
  width:100%;
  height: 60px;
  position: absolute;
  bottom:0;
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
  }
`
const FooterSpanBox = styled.div`
 & a + a {
   margin-left: 10px;
 }
`