import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ShowdetailsComponent } from './components/showdetails/showdetails.component';
import { MemberAuthGuard } from './member-auth.guard';

const routes: Routes = [

  {
    path: '',
    component: MainpageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { path: 'registration', 
    component: RegistrationComponent 
  },
  { path: 'mainpage',
    component: MainpageComponent 
  },
  { path: 'showdetails', 
    component: ShowdetailsComponent, canActivate: [MemberAuthGuard] 
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
