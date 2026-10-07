import { Component, inject } from '@angular/core';
import { Developer } from '../models/developer';
import { ActivatedRoute, Router } from '@angular/router';
import { DeveloperService } from '../services/developer.service';
import { map, Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-edit',
  standalone: false,
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  developerToEdit$! : Observable<Developer>
	service = inject(DeveloperService)
	router = inject(Router)
	route = inject(ActivatedRoute)

  constructor() {
		this.developerToEdit$ = this.route.params.pipe(
			switchMap(params => {
				let id = params["id"]

				return this.service.getDevelopers().pipe(
					map(developers =>
						developers.find(x => x.id === id)!
					)
				)
			})
		)
	}

  save(developerToSend: Developer): void {
		// update via service
		this.service.update(developerToSend).subscribe({
      next: (response) => {
        console.log("::SUCCESS::")
        console.log("UPDATE request result: ", response)

				// redirect
				this.router.navigate(["/list"])
      },
      error: (error) => {
        console.log("::ERROR::")
        console.log("UPDATE request result: ", error)
      }
    })
  }
}