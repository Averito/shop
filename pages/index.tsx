import { GetServerSideProps } from 'next'

import { Home } from '@pages/Home'
import { agbApi } from '@api/agbApi'
import {
	DropdownItem,
	NestedDropdownItem
} from '@components/DropdownList/types'

export default Home

export const getServerSideProps: GetServerSideProps = async () => {
	const priceTreeResponse = await agbApi.getPriceTree()
	const priceTree = priceTreeResponse.price.map(price => ({
		...price,
		name: decodeURI(price.name)
	}))
	const priceTreeWithoutParent = priceTree.filter(price => !price.parent)

	const dropdownList: DropdownItem[] = priceTreeWithoutParent.map(
		price =>
			({
				id: price.folder_id,
				label: price.name,
				opened: false,
				disabled: false,
				items: priceTree
					.filter(nestedPrice => nestedPrice.parent === price.folder_id)
					.map(
						nestedPrice =>
							({
								id: nestedPrice.folder_id,
								label: nestedPrice.name
							} as NestedDropdownItem)
					)
			} as DropdownItem)
	)

	const prices = await agbApi.getPriceList()

	return {
		props: {
			dropdownList,
			prices: prices.price_list
		}
	}
}
