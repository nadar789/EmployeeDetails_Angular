import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmpService } from 'src/app/emp.service'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router, private empService: EmpService) {}

  login(log: any): void {
    const email = log.value.email;
    const password = log.value.password;

    if (this.empService.MemberAuth(email, password)) {
      this.router.navigate(['/showdetails'], { queryParams: { email: email, password: password } });
    } else {
      console.log("Logged Successfully")
    }
  }
}
