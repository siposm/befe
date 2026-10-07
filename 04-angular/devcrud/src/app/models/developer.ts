import { Guid } from 'guid-typescript' /* npm i guid-typescript */

export class Developer {
  id: string = Guid.create().toString()
  name: string = ""
  email: string = ""
  image: string = ""
  job: string = ""
  age: number | null = null
  salary: number | null = null
	skills: string[] = []

	public get skillsAsString(): string {
		return this.skills.join(',')
	}

	public set skillsAsString(value: string) {
		this.skills = value.split(',')
	}
}
