import { Component } from '@angular/core'
import { Developer } from '../developer'
import { Router } from '@angular/router'
import { DeveloperService } from '../services/developer.service'

@Component({
  selector: 'app-create',
  standalone: false,
  templateUrl: './create.component.html',
  styleUrl: './create.component.css',
})
export class CreateComponent {
  developer: Developer
  router: Router

  constructor(router: Router, private service: DeveloperService) {
    this.router = router
    this.developer = new Developer()
  }

  save() {
		// save via service
    this.service.create(this.developer)

    // redirect
    this.router.navigate(["list"])
  }
}
