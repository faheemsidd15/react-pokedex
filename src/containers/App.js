import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import ImageLoader from "react-load-image"

// const pokeImage = {
// 	pokemon: number => fetch(`../images/pokemon/${number}.png`).then(res => res.url)
// }

// const getPokemonImage = number => ({
// 	pokemon: () => import(`../images/pokemon/${number}.png`)
// })

// getPokemonImage("001").pokemon()

// console.log(getPokemonImage("001").pokemon())

// eslint-disable-next-line react/prefer-stateless-function

function Preloader(props) {
	return <div>Loading..</div>
}
class App extends React.Component {
	render() {
		return (
			<Container>
				<Row>
					<Col md={4} style={{ backgroundColor: "red" }}>
						<ImageLoader>
							<img />
							<div>Error!</div>
							<Preloader />
						</ImageLoader>
					</Col>
				</Row>
			</Container>
		)
	}
}

export default App
