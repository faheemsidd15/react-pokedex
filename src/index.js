import React from "react"
import ReactDOM from "react-dom"
import App from "./containers/App"
import "./index.css"
import ApolloClient from "apollo-boost"
import { HashRouter as Router } from "react-router-dom"
import { ApolloProvider } from "react-apollo"
//import gql from "graphql-tag"

const client = new ApolloClient({
	uri: "https://pokeapi-graphiql.herokuapp.com/?"
})

// client
// 	.query({
// 		query: gql`
// 			{
// 				pokemon(number: 1) {
// 					name
// 				}
// 			}
// 		`
// 	})
// 	.then(result => console.log(result))

//import * as serviceWorker from "./serviceWorker"

ReactDOM.render(
	<ApolloProvider client={client}>
		<Router>
			<App />
		</Router>
	</ApolloProvider>,
	document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister()
