import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { NavComponent } from "./nav/nav.component";
import { ContentComponent } from "./content/content.component";

@NgModule({
  imports: [BrowserModule, HttpClientModule],
  declarations: [AppComponent, NavComponent, ContentComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
