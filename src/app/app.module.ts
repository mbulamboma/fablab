import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { FabheaderComponent } from './my-library/fabheader/fabheader.component';
import { FabfooterComponent } from './my-library/fabfooter/fabfooter.component';
import { FabcountsComponent } from './my-library/fabcounts/fabcounts.component';

@NgModule({
  declarations: [
    AppComponent,
    FabheaderComponent,
    FabfooterComponent,
    FabcountsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
