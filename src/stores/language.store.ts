import { makeAutoObservable } from 'mobx'

export interface Language {
	label: string
	value: string
}

class LanguageStore {
	private _languages: Language[] = [
		{
			label: 'RU',
			value: 'ru'
		},
		{
			label: 'ENG',
			value: 'eng'
		},
		{
			label: 'MOL',
			value: 'mol'
		}
	]
	get languages() {
		return this._languages
	}

	private _selectedLanguage: Language = this.languages[0]
	get selectedLanguage() {
		return this._selectedLanguage
	}

	constructor() {
		makeAutoObservable(this)
	}

	setLanguage(language: Language) {
		this._selectedLanguage = language
	}
}

export default new LanguageStore()
