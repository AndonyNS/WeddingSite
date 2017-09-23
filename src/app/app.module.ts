import { MyMaterialModule } from './my-material.module';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './home/nav-bar/nav-bar.component';
import { HeaderComponent } from './home/header/header.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';

@NgModule({
    declarations: [AppComponent, HomeComponent, NavBarComponent, HeaderComponent, ConfirmationComponent],
    imports: [BrowserAnimationsModule, AppRoutingModule, MyMaterialModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
