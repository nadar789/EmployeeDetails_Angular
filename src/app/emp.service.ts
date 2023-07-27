import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { Employee } from './employee.model';



@Injectable({
  providedIn: 'root'
})
export class EmpService {

  private User = {
    email: 'Anburaj',
    password: '123456789'
  };

  MemberAuth(email: string, password: string): boolean {
     if (email === this.User.email && password === this.User.password) {
       return true;
     } else {
       return false;
     }
  }
  constructor(private storage: LocalStorageService) { }

  employees: Employee[] = [];


  addEmployee(employee: Employee):void {
    this.employees.push(employee);
    this.storage.store('employees', this.employees);
  }

  getEmployees(): Employee[] {
    const storedEmployees = this.storage.retrieve('employees');
    if (storedEmployees) {
      this.employees = storedEmployees;
    }
    return this.employees;
  }
}