import { Component ,OnInit} from '@angular/core';
import { EmpService } from 'src/app/emp.service';


@Component({
  selector: 'app-showdetails',
  templateUrl: './showdetails.component.html',
  styleUrls: ['./showdetails.component.css']
})
export class ShowdetailsComponent  implements OnInit{

  employees: any[] = [];

  constructor(private EmpService: EmpService) { }

  ngOnInit() {
    this.employees = this.EmpService.getEmployees();
  }
}
