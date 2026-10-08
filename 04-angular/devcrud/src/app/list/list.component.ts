import { Component, inject } from '@angular/core';
import { Developer } from '../models/developer';
import { DeveloperService } from '../services/developer.service';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

	service = inject(DeveloperService)
	developers$ = this.service.getDevelopers()

	delete(developer: Developer): void {
    this.service.delete(developer).subscribe({
      next: (response) => {
        console.log("::SUCCESS::")
        console.log("DELETE request result: ", response)

				// re-load all
				this.developers$ = this.service.getDevelopers()
      },
      error: (error) => {
        console.log("::ERROR::")
        console.log("DELETE request result: ", error)
      }
    })
  }
}
