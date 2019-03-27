import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import ImageLoader from "react-load-image"

function Preloader(props) {
	return <div>Loading..</div>
}
const getGen = (first, last) => {
	let pokemonIDX = []

	for (let i = first; i <= last; i++) {
		pokemonIDX.push([i] <= 9 ? "00" + [i] + ".png" : [i] + ".png")
	}
	return pokemonIDX
}

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			pokemonGroup: getGen(1, 151)
		}
	}

	render() {
		console.log(this.state)
		return (
			<Container>
				<Row>
					{this.state.pokemonGroup.map(image => (
						<Col md={4} style={{ backgroundColor: "red" }} key={image}>
							<ImageLoader src={`images/pokemon/${image}`}>
								<img />
								<div>Error!</div>
								<Preloader />
							</ImageLoader>
						</Col>
					))}
				</Row>
			</Container>
		)
	}
}

export default App
