import React from "react";
//Styles
import styled from "styled-components";

//Components
import ImageSingle from "./ImageSingle";
import Maps from "./Maps";

//Images
import MontVentoux from "../images/mont-ventoux.png";
import Aix from "../images/aix.png";
import Dome from "../images/dome.png";
import Fayence from "../images/fayence.png";
import Luberon from "../images/luberon.png";
import SaintTropez from "../images/saint-tropez.png";
import Usez from "../images/usez.png";

class MainGrid extends React.Component {
	//State departments
	state = {
		departments: {
			"mont-ventoux": {
				id: "mont-ventoux",
				show: false,
			},
			aix: {
				region: "aix",
				show: false,
			},
			dome: {
				id: "dome",
				show: false,
			},
			luberon: {
				id: "luberon",
				show: false,
			},
			fayence: {
				id: "fayence",
				show: false,
			},
			"saint-tropez": {
				id: "saint-tropez",
				show: false,
			},
			usez: {
				id: "usez",
				show: false,
			},
		},
	};
	toggleImage(dep, show) {
		const { departments } = this.state;
		departments[dep].show = show;
		this.setState({
			departments,
		});
	}

	render() {
		return (
			<ContainerGrid>
				<div className="ventoux display">
					<ImageSingle
						images={MontVentoux}
						title="L'ISLE-SUR-LA-SORGUE MONT-VENTOUX"
						id="ventoux"
						show={this.state.departments["mont-ventoux"].show}
						onHover={() => this.toggleImage("mont-ventoux", true)}
						onLeave={() => this.toggleImage("mont-ventoux", false)}
					/>
				</div>
				<div className="map ">
					<Maps
						onHover={(id) => this.toggleImage(id, true)}
						onLeave={(id) => this.toggleImage(id, false)}
						departments={this.state.departments}
					/>
				</div>
				<div className="aix display">
					<ImageSingle
						images={Aix}
						id="aix"
						title="PAYS D’AIX-EN-PROVENCE - LITTORAL"
						show={this.state.departments.aix.show}
						onHover={() => this.toggleImage("aix", true)}
						onLeave={() => this.toggleImage("aix", false)}
					/>
				</div>
				<div className="dome display">
					<ImageSingle
						images={Dome}
						title="VAISON-LA-ROMAINE DÔME PROVENCALE"
						show={this.state.departments.dome.show}
						onHover={() => this.toggleImage("dome", true)}
						onLeave={() => this.toggleImage("dome", false)}
					/>
				</div>
				<div className="fayence display">
					<ImageSingle
						images={Fayence}
						title="CANTON DE FAYENCE"
						show={this.state.departments.fayence.show}
						onHover={() => this.toggleImage("fayence", true)}
						onLeave={() => this.toggleImage("fayence", false)}
					/>
				</div>
				<div className="luberon display">
					<ImageSingle
						images={Luberon}
						title="LUBERON"
						show={this.state.departments.luberon.show}
						onHover={() => this.toggleImage("luberon", true)}
						onLeave={() => this.toggleImage("luberon", false)}
					/>
				</div>
				<div className="saint-tropez display">
					<ImageSingle
						images={SaintTropez}
						title="GOLFE DE SAINT-TROPEZ"
						show={this.state.departments["saint-tropez"].show}
						onHover={() => this.toggleImage("saint-tropez", true)}
						onLeave={() => this.toggleImage("saint-tropez", false)}
					/>
				</div>
				<div className="usez display">
					<ImageSingle
						images={Usez}
						id="usez"
						title="ALPILLES PAYS D'AVIGNON UZÈS"
						show={this.state.departments.usez.show}
						onHover={() => this.toggleImage("usez", true)}
						onLeave={() => this.toggleImage("usez", false)}
					/>
				</div>{" "}
			</ContainerGrid>
		);
	}
}

//Styles
const ContainerGrid = styled.div`
	display: grid;
	grid-template-areas:
		"ventoux map luberon"
		"usez map dome"
		"fayence sainttropez aix";
	padding-top: 5rem;
	grid-template-columns: repeat(auto-fit, (346px, 1fr));
	justify-content: center;
	column-gap: 16px;
	row-gap: 10px;
	padding-bottom: 5rem;
	div {
		cursor: pointer;
	}

	.display {
		overflow: hidden;
		transition: all 0.4s ease-in-out;

		&:hover {
			width: 100%;
			transform: scale(1.05);
			opacity: 0.9;
		}
	}
	.ventoux {
		grid-area: ventoux;
		overflow: hidden;
	}
	.aix {
		grid-area: aix;
	}
	.dome {
		grid-area: dome;
	}
	.fayence {
		grid-area: fayence;
	}
	.luberon {
		grid-area: luberon;
	}
	.saint-tropez {
		grid-area: sainttropez;
	}
	.usez {
		grid-area: usez;
	}
	.map {
		grid-area: map;
		padding-top: 3rem;
	}

	//Responsive
	@media only screen and (max-width: 1100px) {
		padding-top: 0;
		grid-template-areas:
			"map map"
			"ventoux luberon"
			" usez dome" " fayence sainttropez"
			"aix . ";

		.map {
			justify-content: center;
			margin: 0 auto;
		}
	}
	@media only screen and (max-width: 760px) {
		.display {
			display: none;
		}
		padding-bottom: 1rem;
	}
`;

export default MainGrid;
