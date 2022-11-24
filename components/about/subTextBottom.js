import styled from 'styled-components'
import PreButton from '../PreButton'
import Link from 'next/link'


const SubTextBottom = () => {

    return (
       <TextContainer>
          <InnerText>
              <div>💁🏻‍♂️  개발자를 해야하는 이유</div>
              <span>요리 쪽 뿐만 아니라 여러 분야에 관심이 많다가 코딩을 처음 접하는 순간 상당히 매력적이고 언제 어디서든 컴퓨터만 있으면 할 수 있다는 점이 저에게는 큰 이점으로 다가왔습니다. 
                    학창 시절 때는 공부하는 것보다는 많은 것을 경험하고 노는 것을 좋아했지만 코딩을 접하고 코딩을 위한 공부는 정말 재밌고 놀고 와서도 매일 코드를 치지 않으면 뭔가 아쉬운 느낌도 많이 
                    들고 앞으로 쭉 즐거운 마음으로 코딩하고 싶다는 마음이 강렬하게 들어서 개발자가 되기로 마음먹었습니다.
              </span>
              <div>🙋‍♂️ 어떤 개발자가 되고 싶나요?</div>
              <span>저는 소통을 중요시하는 개발자가 되고 싶습니다. 개발자는 혼자서 하는 일이 아니라고 생각합니다. 백엔드 뿐만 아니라 기획자, 디자이너와의 협업에서는
                    언제나 생각이 다르고 사고방식이 달라서 그 사이에서 조율을 잘해야 한다고 생각합니다. 어느 한 사람의 의견도 흘려듣지 않으며 편안한 소통 환경을 조성해 좋은 서비스, 좋은 조직에서의
                    일원이 되어서 사용자에게 최고의 UX를 선사할 수 있고 협업을 같이 하고 싶은 그런 개발자가 되고 싶습니다.  
              </span>
          </InnerText>
          <InnerBtn>
              <Link href={'/stack'}><PreButton/></Link>
          </InnerBtn>
       </TextContainer>
    )
}

export default SubTextBottom

const TextContainer = styled.div`
  width: 100%;
  margin-top: 30px;
  margin-bottom: -20px;
`
const InnerText = styled.div`
  background-color: #252525;
  border-radius: 10px;
  padding: 20px;
& div {
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 10px;
    color: #dadada;
  }
  &  span {
    display: inline-block;
    margin-bottom: 20px;
    font-weight: 500;
    letter-spacing: 0.3px;
  }
  `
const InnerBtn = styled.div`
 display: flex;
 justify-content: flex-end;
`;

