import styled from 'styled-components'

const TitleSubText = () => {
    return (
        <SubText>
            <div>💻 학력</div>
            <h3>코드스테이츠(Code States)</h3>
            <span>2022.04 ~ 2022.10</span>
            <ul>
                <li>Pre, Main 두번의 React 프로젝트로 백엔드와 협업을 통해 개발 경험을 체득</li>
                <li>혼자 공부하는 것이 아닌 동기들과 소통하며 학습을 진행 하여 커뮤니티의 중요도 이해</li>
                <li>프론트 엔드 개발자로서 알아야 할 기초 CS 지식 및 네트워크,알고리즘 학습</li>
                <li>기본 HTML5, CSS3, JavaScript 주요 문법등 웹 개발을 위한 내용 학습</li>
            </ul>
            <h3>장안대학교 호텔조리학과</h3>
            <span>2016.03 ~ 2021.02</span>
            <ul>
                <li>호텔조리학과 출신으로 한식 조리기능사 자격증 취득</li>
            </ul>
        </SubText>
    )
}

export default TitleSubText

const SubText = styled.div`
  & div {
    font-size: 30px;
    background-color: #a08ea842;
    padding:0 5px;

  }
  & h3 {
    line-height: 5px;
  }
  & > ul {
    margin-bottom: 50px;
  }
  & li {
    margin-left: -20px;
    line-height: 30px;
  }
`