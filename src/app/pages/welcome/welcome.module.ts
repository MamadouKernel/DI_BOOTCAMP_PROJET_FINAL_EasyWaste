import {NgModule} from "@angular/core";
import {NzIconModule} from "ng-zorro-antd/icon";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";
import {WelcomeRoutingModule} from "./welcome-routing.module";
import {WelcomeComponent} from "./welcome.component";


@NgModule({
  imports: [
    WelcomeRoutingModule,
    NzLayoutModule,
    NzMenuModule,
    NzIconModule,
  ],
  declarations: [WelcomeComponent],
})
export class WelcomeModule {
}
