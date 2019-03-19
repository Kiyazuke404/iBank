import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {

  constructor(public router:Router) { 

  }

   goBack(){
	this.router.navigate(['tabs/tab1'])
	}

  ngOnInit() {
  }

}
