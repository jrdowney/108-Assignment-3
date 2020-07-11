import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  constructor(private data: DataService) {

    let list = this.data.getAllUsers(); // get the array of users from the service
    console.log("user in the service: " + list.length);
    
  }

  ngOnInit(): void {
  }

}
