//Styles
import styled from "styled-components";

const ImageSingle = ({ images, title, id, show, onHover, onLeave }) => {
	return (
		<Container
			onMouseOver={() => onHover(id)}
			onMouseLeave={() => onLeave(id)}
			id={id}
		>
			<img src={images} alt="" />
			<Overlay>
				<h2>{title}</h2>
				<button className={show ? "show" : ""}>Découvrir</button>
			</Overlay>
		</Container>
	);
};

//Styles
const Container = styled.div`
	position: relative;
`;

const Overlay = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 10%;
	.show {
		opacity: 1;
		background-color: rgba(255, 255, 255, 0.2);
		transform: scale(1.1);
		margin-left: 10px;
	}
	button {
		box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px,
			rgba(17, 17, 26, 0.05) 0px 8px 32px;
		border-radius: 2px;
		cursor: pointer;
		position: absolute;
		text-decoration: none;
		font-weight: 600;
		font-size: 14px;
		line-height: 17px;
		bottom: 3rem;
		color: white;
		padding: 0.7rem 2rem;
		border: 2px solid white;
		background: none;
		left: 1rem;
		opacity: 0;
		transition: all 0.4s ease-in-out;

		&:hover {
			background-color: rgba(255, 255, 255, 1);
			color: #f2994a;
		}
	}
	h2 {
		font-style: normal;
		font-weight: 600;
		font-size: 14px;
		line-height: 17px;
		color: #ffffff;
		width: 212px;
		padding-left: 1rem;
		left: 4.67%;

		@media only screen and (max-width: 800px) {
			left: 4.67%;
			right: 29.18%;
			top: 6.78%;
			bottom: 74.01%;
			font-size: 14px;
			line-height: 17px;
		}
	}
`;

export default ImageSingle;
