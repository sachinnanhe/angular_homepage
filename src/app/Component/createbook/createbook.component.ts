import { Component, OnInit } from '@angular/core';
import User from 'src/app/entity/user';
import{UserService} from 'src/app/user.service'

@Component({
  selector: 'app-createbook',
  templateUrl: './createbook.component.html',
  styleUrls: ['./createbook.component.css']
})
export class CreatebookComponent implements OnInit {

  user: User = new User();

  users: User[] = [];


  save(){
    const observable= this.userService.createuser(this.user);
    observable.subscribe(
      (response:any)=> {
         console.log(response);
      },)
    
   }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    
  }

}
