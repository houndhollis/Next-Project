import styled from 'styled-components'

const TitleSubText = () => {
    return (
        <SubText>
            <div>๐ป ํ๋ ฅ</div>
            <h3>์ฝ๋์คํ์ด์ธ (Code States)</h3>
            <span>2022.04 ~ 2022.10</span>
            <ul>
                <li>Pre, Main ๋๋ฒ์ React ํ๋ก์ ํธ๋ก ๋ฐฑ์๋์ ํ์์ ํตํด ๊ฐ๋ฐ ๊ฒฝํ์ ์ฒด๋</li>
                <li>ํผ์ ๊ณต๋ถํ๋ ๊ฒ์ด ์๋ ๋๊ธฐ๋ค๊ณผ ์ํตํ๋ฉฐ ํ์ต์ ์งํ ํ์ฌ ์ปค๋ฎค๋ํฐ์ ์ค์๋ ์ดํด</li>
                <li>ํ๋ก ํธ ์๋ ๊ฐ๋ฐ์๋ก์ ์์์ผ ํ  ๊ธฐ์ด CS ์ง์ ๋ฐ ๋คํธ์ํฌ,์๊ณ ๋ฆฌ์ฆ ํ์ต</li>
                <li>๊ธฐ๋ณธ HTML5, CSS3, JavaScript ์ฃผ์ ๋ฌธ๋ฒ๋ฑ ์น ๊ฐ๋ฐ์ ์ํ ๋ด์ฉ ํ์ต</li>
            </ul>
            <h3>์ฅ์๋ํ๊ต ํธํ์กฐ๋ฆฌํ๊ณผ</h3>
            <span>2016.03 ~ 2021.02</span>
            <ul>
                <li>ํธํ์กฐ๋ฆฌํ๊ณผ ์ถ์ ์ผ๋ก ํ์ ์กฐ๋ฆฌ๊ธฐ๋ฅ์ฌ ์๊ฒฉ์ฆ ์ทจ๋</li>
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