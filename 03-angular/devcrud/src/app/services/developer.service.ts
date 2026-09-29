import { Injectable } from '@angular/core';
import { Developer } from '../developer';

@Injectable({
  providedIn: 'root'
})
export class DeveloperService {

	developers: Developer[] = []

  constructor() {
		this.load()
	}

	load(): void {
		let jsonArray = JSON.parse(localStorage.getItem("developersDB") ?? "[]")
		this.developers = Object.values(jsonArray).map(x => Object.assign(new Developer(), x))
	}

	save(): void {
		localStorage.setItem("developersDB", JSON.stringify(this.developers))
	}

	create(developer: Developer): void {
		this.developers.push(developer)
		this.save()
	}

	update(developer: Developer): void {
		let index = this.developers.findIndex(x => x.id === developer.id)
		this.developers[index] = developer
		this.save()
	}

	findById(id: string): Developer {
		return this.developers.find(dev => dev.id === id) as Developer
	}

	delete(developer: Developer): void {
		this.developers = this.developers.filter(x => x.id !== developer.id)
		this.save()
	}
}
