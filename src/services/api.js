import axios from "axios"

const api = async page => {
    const URL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=${page}&sparkline=false`
    const response = await axios.get(URL)
    return response.data
}


export default api
