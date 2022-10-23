import { createGlobalStyle } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import './main.css';
import HamburgerBtn from './assets/HamburgerBtn.png';
import Point from './assets/RightPoint.png'; 
import AirPodMax from './assets/AirpodMax.png';
import AutoSizer from 'react-virtualized-auto-sizer';

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

/*문구 내용(에어팟맥스~까지)*/ 
const Content1 = styled.div`
  position: fixed; 
  color:#fafafa;
  font-size:20px; 
  text-align: center;
  top:100px;
  left:0; 
  width:100%;
  height:100%
`;

/*문구 내용2(60여개 상품~보세요!)*/ 
const Content2 = styled.div`
  position: fixed; 
  color:#fafafa;
  font-size:20px; 
  text-align: center;
  top:130px;
  left:0; 
  width:100%;
  height:100%
`;

/*문구 내용3(현재~응모중)*/ 
const Content3 = styled.div`
  position: fixed; 
  color:#fafafa;
  font-size:40px; 
  text-align: center;
  top:200px;
  left:0; 
  width:100%;
  height:100%
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

const AirpodMaxPic = styled.img`
width: 500px; 
margin: 230px;
`; 


/*사진 내 명수, 포인트 값 백엔드에서 받아와야 함*/

/*응모 버튼*/
const Button = styled.button`
  display: block;
  padding: 6px 10px;
  color: #fff;
  font-size: 18px;
  border-radius: 3px;
  background-color: crimson;
  border: 0;
`;

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
        <Title>경품 응모</Title>
        <PointImage src={Point}/>
        <Content1>에어팟 맥스부터 닌텐도 스위치까지,</Content1>
      <Content2>60여개의 상품에 도전해보세요!</Content2>
      <Content3>현재 <u>1023명</u>이 응모중!</Content3> {/*1023명->이 부분 변수로 만들기*/}
        <AirpodMaxPic src={AirPodMax}/>
        <Button>응모</Button>

      </Container>
  );
}
export default App;