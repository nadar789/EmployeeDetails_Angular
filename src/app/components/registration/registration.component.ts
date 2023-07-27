import { Component } from '@angular/core';
import { EmpService } from 'src/app/emp.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  name: string | undefined;
  email!: string 
  password!: string;
  phoneNumber!: string;

  

  constructor(private EmpService: EmpService) { }

  onSubmit() {
    const employee = { name: this.name, email: this.email, password:this.password ,phoneNumber: this.phoneNumber, };
    this.EmpService.addEmployee(employee);
    
    this.name = '';
    this.email = '';
    this.password = '';
    this.phoneNumber = '';
  }


}
