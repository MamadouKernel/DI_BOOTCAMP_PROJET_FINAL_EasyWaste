import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AuthentificationComponent} from "./pages/authentification/authentification.component";

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "/authentification"},
  {path: "welcome", loadChildren: () => import("./pages/welcome/welcome.module").then(m => m.WelcomeModule)},
  {
    path: "authentification",
    component: AuthentificationComponent,
    loadChildren: () => import("./pages/authentification/authentification.module").then(m => m.AuthentificationModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
