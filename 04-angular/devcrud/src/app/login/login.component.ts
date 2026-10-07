import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

	user: User = {
		username: "",
		password: ""
	}

	constructor(public authService: AuthService) { }
}
