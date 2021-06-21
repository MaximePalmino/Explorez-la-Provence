import React from "react";

//Slideshow
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

//Componenents
import ImageSingle from "./ImageSingle";

//Images
import MontVentoux from "../images/mont-ventoux.png";
import Aix from "../images/aix.png";
import Dome from "../images/dome.png";
import Fayence from "../images/fayence.png";
import Luberon from "../images/luberon.png";
import SaintTropez from "../images/saint-tropez.png";
import Usez from "../images/usez.png";

//Styles
import styled from "styled-components";

//Slideshow propietes
const proprietes = {
	duration: 5000,
	transitionDuration: 600,
	infinite: true,
	indicators: true,
};

class Carousel extends React.Component {
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
			<Container>
				<Slide {...proprietes}>
					<div className="each-slide">
						<div>
							<ImageSingle
								images={MontVentoux}
								title="L'ISLE-SUR-LA-SORGUE MONT-VENTOUX"
								id="ventoux"
								show={this.state.departments["mont-ventoux"].show}
								onHover={() => this.toggleImage("mont-ventoux", true)}
								onLeave={() => this.toggleImage("mont-ventoux", false)}
							/>
						</div>
					</div>
					<div className="each-slide">
						<div className="aix">
							<ImageSingle
								images={Aix}
								id="aix"
								title="PAYS D’AIX-EN-PROVENCE - LITTORAL"
								show={this.state.departments.aix.show}
								onHover={() => this.toggleImage("aix", true)}
								onLeave={() => this.toggleImage("aix", false)}
							/>
						</div>
					</div>
					<div className="each-slide">
						<div className="dome">
							<ImageSingle
								images={Dome}
								title="VAISON-LA-ROMAINE DÔME PROVENCALE"
								show={this.state.departments.dome.show}
								onHover={() => this.toggleImage("dome", true)}
								onLeave={() => this.toggleImage("dome", false)}
							/>
						</div>
					</div>
					<div className="each-slide">
						<div className="fayence">
							<ImageSingle
								images={Fayence}
								title="CANTON DE FAYENCE"
								show={this.state.departments.fayence.show}
								onHover={() => this.toggleImage("fayence", true)}
								onLeave={() => this.toggleImage("fayence", false)}
							/>
						</div>
					</div>
					<div className="each-slide">
						<div className="luberon">
							<ImageSingle
								images={Luberon}
								title="LUBERON"
								show={this.state.departments.luberon.show}
								onHover={() => this.toggleImage("luberon", true)}
								onLeave={() => this.toggleImage("luberon", false)}
							/>
						</div>
					</div>
					<div className="each-slide">
						<div className="saint-tropez">
							<ImageSingle
								images={SaintTropez}
								title="GOLFE DE SAINT-TROPEZ"
								show={this.state.departments["saint-tropez"].show}
								onHover={() => this.toggleImage("saint-tropez", true)}
								onLeave={() => this.toggleImage("saint-tropez", false)}
							/>
						</div>
					</div>
					<div className="each-slide">
						<div className="usez">
							<ImageSingle
								images={Usez}
								id="usez"
								title="ALPILLES PAYS D'AVIGNON UZÈS"
								show={this.state.departments.usez.show}
								onHover={() => this.toggleImage("usez", true)}
								onLeave={() => this.toggleImage("usez", false)}
							/>
						</div>{" "}
					</div>
				</Slide>
			</Container>
		);
	}
}
//Style
const Container = styled.div`
	width: 300px;
	margin: 0 auto;
`;
export default Carousel;
