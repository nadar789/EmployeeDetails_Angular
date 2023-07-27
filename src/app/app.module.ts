import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ShowdetailsComponent } from './components/showdetails/showdetails.component';
import { NgxWebstorageModule } from 'ngx-webstorage';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainpageComponent,
    FooterComponent,
    LoginComponent,
    RegistrationComponent,
    ShowdetailsComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxWebstorageModule.forRoot()
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
