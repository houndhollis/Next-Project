import styled from 'styled-components'
import PreButton from '../PreButton'
import Link from 'next/link'


const SubTextBottom = () => {

    return (
       <TextContainer>
          <InnerText>
              <div>💁🏻‍♂️  개발자를 해야하는 이유</div>
              <span>요리쪽 뿐만 아니라 여러 분야에 관심이 많다가 코딩을 처음 접하는 순간 상당히 매력적이고 언제 어디서든 컴퓨터 만 있으면 할수 있다는 점이 저에게는 큰 이점으로 다가왔습니다.
                    학창 시절때는 공부하는 것 보다는 많은 것을 경험하고 노는 것을 좋아했지만 코딩을 접하고 코딩을 하기위한 공부는 정말 재밌고 놀고와서도 매일 코드를 치지 않으면  
                    뭔가 아쉬운 느낌도 많이 들고 앞으로 쭉 즐거운 마음으로 코딩하고 싶다는 마음이 강렬하게 들어서 개발자가 되기로 마음 먹었습니다.
              </span>
              <div>🙋‍♂️ 어떤 개발자가 되고 싶나요?</div>
              <span>새로운 것을 접목 시키고 기록하며 재밌게 일하는 개발자가 되고 싶습니다. 배움의 끝은 없지만 그 끝을 향해 달려가 보고 전문성을 갖춘 개발자가 되는게 현재로서의 가장 큰 
                    저의 목표이며 어느정도 실력도 있으며 같이 협업 하는 것을 좋아합니다. 빨리가고 싶으면 혼자가고 멀리가고 싶으면 같이 가라는 말이 있습니다.
                    저는 같은 직업, 같은 공부를 하는 개발자 즐겁게 작업하는 그런 개발자가 되고싶습니다. 
              </span>
          </InnerText>
          <Link href={'/stack'}><PreButton/></Link>
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

