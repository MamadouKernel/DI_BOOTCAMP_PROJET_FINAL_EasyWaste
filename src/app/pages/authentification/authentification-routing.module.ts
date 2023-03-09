import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
  {
    path: "login",
    component: LoginComponent,
    title: "Connexion",
  },
  {
    path: "register",
    component: RegisterComponent,
    title: "Création de compte",
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthentificationRoutingModule {
}
