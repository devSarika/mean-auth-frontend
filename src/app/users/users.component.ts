import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(public apiservice: ApiService) { }

  ngOnInit(): void {
    this.apiservice.getUsers();
  }

  
}
