import styled from 'styled-components'

const Introduce = () => {
  return (
    <Container>
      <div>
        <h2>안녕하세요 <br/>프론트엔드 개발자를 꿈꾸는<br/>김영웅입니다.</h2>
        <div>
          <span>새로운 기술 사용을 좋아하며 Interaction 한 페이지를 좋아합니다.<br/>
                스스로 발전하고 싶은 욕구가 크며, 오늘의 나는 어제의 나보다 <br/>
                항상 더 발전있는 개발자 입니다. 코드 리뷰와 협업을 좋아합니다.    
          </span>
        </div>
      </div>
    </Container>
  )
}

export default Introduce

const Container = styled.div`

`