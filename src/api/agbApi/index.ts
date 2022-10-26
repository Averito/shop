import oldAxios from 'axios'
import { PriceList, PriceTree } from '@api/agbApi/types'

const axios = oldAxios.create({
	baseURL: 'https://himinfo.net/cl/test/api/'
})

export const agbApi = {
	async getPriceList() {
		const response = await axios.get<PriceList>('?PriceList')
		return response.data
	},
	async getPriceTree(id = 0) {
		const response = await axios.get<PriceTree>(`?PriceTree={"id":"${id}"}`)
		return response.data
	}
}
