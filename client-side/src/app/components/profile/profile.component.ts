import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {UserService} from '../../services/user.service';
import {CourseService} from '../../services/course.service';
import {Router} from '@angular/router';
import {Transaction} from '../../models/transaction';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser:User;
  transactionList:Array<Transaction>;

  constructor(private userService:UserService,private courseService:CourseService,
              private router:Router) {
    this.currentUser=this.userService.currentUserValue;
  }

  ngOnInit(): void {
    if(!this.currentUser){
      this.router.navigate(['/login']);
      return;
    }
    this.findTransactionOfUser();
  }

  findTransactionOfUser(){
    this.courseService.findTransactionsOfUser(this.currentUser.id).subscribe(data=>{
      this.transactionList=data;
    });
  }

  logOut(){
  // this.userService.logOut().subscribe(data=>{
      this.userService.logOut();
      this.router.navigate(['/login']);
    //});
  }

}
