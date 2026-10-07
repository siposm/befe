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

	delete(developer : Developer): void {
    this.service.delete(developer)
  }
}
