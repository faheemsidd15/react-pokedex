import React from "react"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import ImageLoader from "react-load-image"


function Preloader(props) {
	return <div>Loading..</div>
}




class App extends React.Component {
	render() {
		return (
			<Container>
				<Row>
					<Col md={4} style={{ backgroundColor: "red" }}>
						<ImageLoader src="images/pokemon/001.png">
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
