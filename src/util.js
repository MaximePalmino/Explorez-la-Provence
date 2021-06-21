import MapDefault from "./images/map/default.svg";
import Alpilles from "./images/map/alpilles.svg";
import { v4 as uuidv4 } from "uuid";

function SVG() {
	return [
		{
			cover: MapDefault,
			id: uuidv4(),
			active: true,
		},
		{
			cover: Alpilles,
			id: uuidv4(),

			active: false,
		},
	];
}

export default SVG;
