import styled from 'styled-components'
import Link from 'next/link'

const Header = () => {

  return (
    <HeaderContainer>
        <HeaderInnerContainer>
            <LogoBox>
               <Link href={'/home'}>KimHero</Link>
            </LogoBox>
            <ButtonBox>
                <Link href={'/aboutme'}><span>About Me</span></Link>
                <Link href={'/stack'}><span>Stack</span></Link>
                <Link href={'/projects'}><span>Projects</span></Link>
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
  background-color: #202020;
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
  color: #eee;
`

const LogoBox = styled.div`
 font-size: 28px;
 font-weight: 700;
 letter-spacing: -0.3px;
`

const ButtonBox = styled.div`
 & a + a {
   margin-left: 15px;
 }
`