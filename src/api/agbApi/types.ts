export interface CatalogItem {
	folder_id: string
	parent: string
	name: string
	comm: string
	sort_index: string
}

export interface Price {
	id: number
	folder_id: string
	code: string
	name: string
	unit: string
	price: string
	group_p: string
	group_c: string
	price_id: string
	top_parent: string
	order_addon_pack_id: string
	sort_index: string
}

export interface PriceTree {
	error: number
	price: CatalogItem[]
}

export interface PriceList {
	error: number
	price_list: Price[]
}
