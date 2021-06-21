import styled from "styled-components";

const Header = () => {
	return (
		<Container>
			<Discover>découvrez les régions</Discover>
			<Explorer>
				Explorez la Provence <span>& sa Riviera</span>
			</Explorer>
			<ParagrapheStyled>
				Vivez dans ce territoire abritant les plus beaux villages de France. Des
				massifs des Préalpes, au Golfe de Saint-Tropez en passant par l’arrière
				pays varois et les champs de lavande.
			</ParagrapheStyled>
		</Container>
	);
};

// Styles - Header

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	margin-top: 96px;
	@media only screen and (max-width: 800px) {
		margin-top: 2rem;
	}
`;

const Discover = styled.h2`
	font-weight: 500;
	font-size: 14px;
	letter-spacing: 0.5em;
	text-transform: uppercase;

	@media only screen and (max-width: 800px) {
		font-size: 12px;
		padding-bottom: 10px;
		letter-spacing: 0.23em;
	}
`;

const Explorer = styled.h1`
	font-family: Fair Love;
	font-style: normal;
	font-weight: normal;
	font-size: 110px;
	line-height: 129px;

	/* Second/BlueBlack */
	color: #22425a;
	@media only screen and (max-width: 800px) {
		font-size: 64px;
		line-height: 103.6%;
		span {
			display: none;
		}
	}
`;

const ParagrapheStyled = styled.p`
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 17px;
	width: 50%;
	color: #22425a;
	@media only screen and (max-width: 800px) {
		font-size: 12px;
		line-height: 15px;
		text-align: left;
		width: 85%;
		padding-top: 1rem;
	}
`;
export default Header;
