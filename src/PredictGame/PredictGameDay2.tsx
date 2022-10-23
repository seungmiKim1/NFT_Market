import { createGlobalStyle } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import './main.css';
import HamburgerBtn from './assets/HamburgerBtn.png';
import Point from './assets/RightPoint.png'; 


/*전체 배경*/
const Container = styled.div` 
  position: fixed; 
  top:0;
  left:0; 
  width:100%;
  height:100%
  background-color:black;
  background-size:cover;
  `;


const Title = styled.div`
  color:#fafafa;
  font-size:30px; 
  margin: 1px;
  padding:10px 0;
  text-align: center;
  width:100%
  position:fixed;
  margin : 0 auto;
`;


/*메뉴(햄버거)버튼 좌측*/
const HamburgerMenuBtn = styled.img`
  width: 30px; 
  height: 30px; 
  margin: 15px;
  position:fixed;
  
`; 

/*우측 포인트*/
const PointImage = styled.img`
  width: 100px; 
  height: 40px; 
  margin: 5px;
  position: fixed;
  float: right;
  right:10px;
  top : 5px;
`; 

/*
1. 상원님 말씀대로 useState로 값 받아올 수 있을 것 같고, 아니면 Figma에서 해당 점수 차이 한 줄씩 Export해와서 
그걸 백엔드로 넘기는 방법(?)도 있지 않을까 싶네요. 일단은 제 선에서 상원님께서 말씀하신 방법이 구현이 잘 안되어 
컴포넌트로 점수 차이만 구분해주었습니다.

2. 일단 styled.div''; 내부에는 css코드가 들어가야 하는데, ERROR in src/PredictGame/userPredict.tsx
TS1208: 'userPredict.tsx' cannot be compiled under '--isolatedModules' because it is considered a global script file. Add an import, export, or an empty 'export {}' statement to make it a module.
아마 페이지 연결하면서 export 되어야 되는게 있어야 하는데 그거 구현이 안돼서 뜨는 오류입니다. 일단 전반적인 틀 코드는 작성했습니다*/ 
/* 고대 승 / 연대 승 / 무승부 버튼 필요*/ 
const OneThreeDifference =  styled.div` 


`; 

const FourSixDifference =  styled.div` 


`; 


const SevenNineDifference =  styled.div` 


`; 

const MoreThanTen = styled.div` 


`; 



const BaseBall = styled.div`
    color:#fafafa;
    font-size:20px; 
    text-align:left;
    /*top:100px;
    left:0; 
    width:100%;
    height:100%*/
`;


/*사진 내 명수, 포인트 값 백엔드에서 받아와야 함*/


const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
menu, ol, ul {
  list-style: none;
}
	@@ -59,8 +56,8 @@ body {
  font-family: 'Noto Sans Pro', sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1;
  background-color: #0e0e0e;
}
a {
  text-decoration:none;
  color: inherit;
}
`;

function App() {

  return (
      <Container>
        
        <HamburgerMenuBtn src={HamburgerBtn}/>
        <Title>2일차 경기 예측</Title>
        <PointImage src={Point}/>
        <BaseBall>럭비🏉</BaseBall>
        <OneThreeDifference>1-3점차 예상</OneThreeDifference>
        <FourSixDifference>4-6점차 예상</FourSixDifference>
        <SevenNineDifference>7-9점차 예상</SevenNineDifference>
        <MoreThanTen>10점차 예상</MoreThanTen>
      </Container>
  );
}
export {};