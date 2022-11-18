import Header from "./Header"
import Footer from "./Footer"
import styled from 'styled-components'

const Layout = ({children}) => {

  return (
    <>
      <Header/>
        <ChildrenBox>{children}</ChildrenBox>
      <Footer/>
    </>
  )
}

export default Layout

const ChildrenBox = styled.div`
  padding-top: 60px;
`