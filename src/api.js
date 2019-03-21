import axios from "axios"

export const baseUrl = "https://pokeapi.co/api/v2/pokemon/"

const api = {
	pokemon: {
		get: pokemon => axios.get(`${baseUrl}`, pokemon).then(res => res.data)
	}
}

export default api
