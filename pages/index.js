import Head from 'next/head'
import Randing from '../components/Randing'
import styled from 'styled-components'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>프론트엔드 김영웅 포트폴리오</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Randing/>
    </Container>
  )
}

const Container = styled.div`
`
