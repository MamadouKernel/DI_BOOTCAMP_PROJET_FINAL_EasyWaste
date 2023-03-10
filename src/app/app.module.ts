import {registerLocaleData} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import fr from "@angular/common/locales/fr";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {fr_FR, NZ_I18N} from "ng-zorro-antd/i18n";
import {NzLayoutModule} from "ng-zorro-antd/layout";
import {NzMenuModule} from "ng-zorro-antd/menu";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {IconsProviderModule} from "./icons-provider.module";
import {LayoutsModule} from "./layouts/layouts.module";
import {WelcomeModule} from "./pages/welcome/welcome.module";

registerLocaleData(fr);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    LayoutsModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: fr_FR },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
