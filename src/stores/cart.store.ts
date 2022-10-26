import { makeAutoObservable } from 'mobx'

export interface CartItem {
	id: number | string
	name: string
	price: string
	count: number
}

export interface CartCategory {
	name: string
	items: CartItem[]
}

class CartStore {
	private _cart: CartCategory[] = []
	public get cart() {
		return this._cart
	}

	public get itemsCount() {
		return this._cart.reduce(
			(prevResult, category) => prevResult + category.items.length,
			0
		)
	}

	public get itemsSum() {
		let sum = 0

		this._cart.forEach(category => {
			sum += category.items.reduce(
				(prevResult, cartItem) =>
					prevResult + parseInt(cartItem.price) * cartItem.count,
				0
			)
		})

		return sum
	}

	constructor() {
		makeAutoObservable(this)
	}

	add(item: CartItem, category: string) {
		const cartCategoryIdx = this._cart.findIndex(
			cartCateg => cartCateg.name === category
		)
		if (cartCategoryIdx === -1) {
			this._cart.push({
				name: category,
				items: [item]
			})
			return true
		}

		const isItemDuplicate = this._cart[cartCategoryIdx].items.find(
			cartItem => cartItem.id === item.id
		)
		if (isItemDuplicate) return false

		this._cart[cartCategoryIdx].items.push(item)
		return true
	}

	increment(itemId: number | string, category: string) {
		const cartCategoryIdx = this._cart.findIndex(
			cartCateg => cartCateg.name === category
		)
		if (cartCategoryIdx === -1) return false

		this._cart[cartCategoryIdx].items = this._cart[cartCategoryIdx].items.map(
			cartItem => ({
				...cartItem,
				count: cartItem.id === itemId ? cartItem.count + 1 : cartItem.count
			})
		)
		return true
	}

	decrement(itemId: number | string, category: string) {
		const cartCategoryIdx = this._cart.findIndex(
			cartCateg => cartCateg.name === category
		)
		if (cartCategoryIdx === -1) return false

		this._cart[cartCategoryIdx].items = this._cart[cartCategoryIdx].items.map(
			cartItem => ({
				...cartItem,
				count: cartItem.id === itemId ? cartItem.count - 1 : cartItem.count
			})
		)
		return true
	}

	remove(id: number | string, category: string) {
		const cartCategoryIdx = this._cart.findIndex(
			cartCateg => cartCateg.name === category
		)
		if (cartCategoryIdx === -1) return false

		const categoryItemsWithoutItem = this._cart[cartCategoryIdx].items.filter(
			cartItem => cartItem.id !== id
		)

		if (categoryItemsWithoutItem.length === 0) {
			this._cart = this._cart.filter(
				cartCategory => cartCategory.name !== category
			)
			return true
		}

		this._cart[cartCategoryIdx].items = categoryItemsWithoutItem
		return true
	}
}

export default new CartStore()
