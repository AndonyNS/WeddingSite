import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { HeaderComponent } from './home/header/header.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './home/nav-bar/nav-bar.component';
import { MyMaterialModule } from './my-material.module';

@NgModule({
    declarations: [AppComponent, HomeComponent, NavBarComponent, HeaderComponent, ConfirmationComponent],
    imports: [
        BrowserAnimationsModule,
        AppRoutingModule,
        MyMaterialModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
