import Header from "./Header"
import Footer from "./Footer"
import styled from 'styled-components'

const Layout = ({children}) => {

  return (
    <LayoutContainer>
      <Header/>
        <ChildrenBox>{children}</ChildrenBox>
      <Footer/>
    </LayoutContainer>
  )
}

export default Layout

const LayoutContainer = styled.div`

`

const ChildrenBox = styled.div`
  padding-top: 60px;
`