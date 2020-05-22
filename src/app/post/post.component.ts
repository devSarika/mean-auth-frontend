import { Component, OnInit } from '@angular/core';
import { ApiService} from '../api.service'
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private apiservice: ApiService) { }
  postmsg=''
  ngOnInit(): void {
  }
  post(){
 this.apiservice.postMessage({msg:this.postmsg})
  }
 
}
