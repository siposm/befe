import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Skill } from '../models/skill';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  skills: Skill[] = []
  skillToEdit: Skill = { id: "", name: "", description: "" }
	skillToCreate: Skill = { id: "", name: "", description: "" }

  constructor(private http: HttpClient) {
    this.load()
  }

  load(): void {
    this.http.get<Skill[]>(environment.skillApiUrl).subscribe(x => this.skills = x)
  }

	loadForEdit(skill: Skill): void {
    this.skillToEdit = { ...skill }
  }

  create(): void {
    this.http.post(environment.skillApiUrl, this.skillToCreate).subscribe({
      next: (response) => {
        console.log("::SUCCESS::")
        console.log("Create request result:", response)

        // update id based on server response
        this.skillToCreate.id = (response as any).skill.id
        this.skills.push(this.skillToCreate)
        // this.load()

        this.skillToCreate = { id: "", name: "", description: "" }
      },
      error: (error) => {
        console.log("::ERROR::")
        console.log("Create request result:", error)
      }
    })
  }

  update(): void {
    this.http.put(environment.skillApiUrl, this.skillToEdit).subscribe({
      next: (response) => {
        console.log("::SUCCESS::")
        console.log("UPDATE REQUEST RESULT:", response)
        let index = this.skills.findIndex(x => x.id === this.skillToEdit.id)
        this.skills[index] = this.skillToEdit
        // this.load()
      },
      error: (error) => {
        console.log("::ERROR::")
        console.log("UPDATE REQUEST RESULT:", error)
      }
    })
  }

  delete(skill: Skill): void {
    this.http.delete(environment.skillApiUrl, {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem("auth-token")
      }),
      body: {
        id: skill.id
      }
    }).subscribe({
      next: (response) => {
        console.log("::SUCCESS::")
        console.log("DELETE REQUEST RESULT:", response)
        this.skills = this.skills.filter(x => x.id !== skill.id)
      },
      error: (error) => {
        console.log("::ERROR::")
        console.log("DELETE REQUEST RESULT:", error)
      }
    })
  }
}
