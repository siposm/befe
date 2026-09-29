import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './login/login.component';

/* !!! */
const routes: Routes = [
	{ path: "", redirectTo: 'list', pathMatch: "full" },
	{ path: "list", component: ListComponent },
	{ path: "login", component: LoginComponent },
	{ path: "create", component: CreateComponent, canActivate: [AuthService] },
	{ path: "edit/:id", component: EditComponent, canActivate: [AuthService] },
	{ path: "**", redirectTo: 'list', pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
