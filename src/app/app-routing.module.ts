import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AuthentificationComponent} from "./pages/authentification/authentification.component";

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "authentification"},
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
