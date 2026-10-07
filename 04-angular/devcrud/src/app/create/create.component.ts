import { Component, inject } from '@angular/core'
import { Developer } from '../models/developer'
import { Router } from '@angular/router'
import { DeveloperService } from '../services/developer.service'

@Component({
  selector: 'app-create',
  standalone: false,
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent {
  developer: Developer = new Developer()
  showAlert: boolean = false
	router = inject(Router)
	service = inject(DeveloperService)

  save(): void {
		// save via service
    this.service.create(this.developer)

    // redirect
    this.router.navigate(["list"])
  }

	showExplanation(): void {
		this.showAlert = true
		setTimeout(() => {
			this.showAlert = false
		}, 5000)
	}
}
