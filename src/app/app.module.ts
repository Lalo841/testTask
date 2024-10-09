import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PackagesListComponent } from './components/packages-list/packages-list.component';
import { PackageCardComponent } from './components/package-card/package-card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { RefreshButtonComponent } from './components/refresh-button/refresh-button.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './pipes/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PackagesListComponent,
    PackageCardComponent,
    SearchBarComponent,
    RefreshButtonComponent,
    SearchPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
