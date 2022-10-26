export interface NestedDropdownItem {
	id: number | string
	label: string
}

export interface DropdownItem {
	id: number | string
	label: string
	opened: boolean
	disabled: boolean
	items: NestedDropdownItem[]
}
