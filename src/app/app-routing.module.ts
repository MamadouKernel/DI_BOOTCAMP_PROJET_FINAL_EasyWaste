import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AdminLayoutComponent} from "./layouts/admin-layout/admin-layout.component";
import {AuthentificationComponent} from "./pages/authentification/authentification.component";

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "authentification"},
  {
    path: "admin",
    component: AdminLayoutComponent,
    loadChildren: () => import("./pages/welcome/welcome.module").then(value => value.WelcomeModule),
  },
  {
    path: "authentification",
    component: AuthentificationComponent,
    loadChildren: () => import("./pages/authentification/authentification.module").then(m => m.AuthentificationModule),
  },
  {path: "**", redirectTo: "authentification", pathMatch: "full"},

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
