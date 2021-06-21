//Components
import Header from "./componenents/Header";
import Images from "./componenents/MainGrid";
import Carousel from "./componenents/Carousel";

//Styles
import styled from "styled-components";
import GlobalStyle from "./GlobalStyle";

function App() {
	return (
		<div className="App">
			<GlobalStyle />
			<Header />
			<Images />
			<CarouselStyled>
				<Carousel />
			</CarouselStyled>
		</div>
	);
}

//Styles
const CarouselStyled = styled.div`
	display: none;
	opacity: 0;
	//Responsive
	@media only screen and (max-width: 760px) {
		display: flex;
		opacity: 1;
		padding-bottom: 100px;
	}
`;
export default App;
