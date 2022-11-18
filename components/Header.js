import styled from 'styled-components'


const Header = () => {

  return (
    <HeaderContainer>
      <HeaderInnerContainer>
        <LogoBox>KimHero</LogoBox>
        <ButtonBox>
          <span>About Me</span>
          <span>Stack</span>
          <span>Projects</span>
        </ButtonBox>
      </HeaderInnerContainer>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.div`
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 60px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
  rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  background-color: #fff;
`

const HeaderInnerContainer = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:0 2%;

`

const LogoBox = styled.div`
 font-size: 28px;
 font-weight: 700;
 letter-spacing: -0.3px;
`

const ButtonBox = styled.div`
 & span + span {
   margin-left: 10px;
 }
`