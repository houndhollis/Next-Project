import MetaHead from '../components/MetaHead'
import Randing from '../components/Randing'
import styled from 'styled-components'

export default function Home() {
  return (
    <Container>
      <MetaHead/>
      <Randing/>
    </Container>
  )
}

const Container = styled.div`
`
