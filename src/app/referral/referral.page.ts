import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-referral',
  templateUrl: './referral.page.html',
  styleUrls: ['./referral.page.scss'],
})
export class ReferralPage implements OnInit {

  constructor(public router:Router) { 

  }

   goBack(){
	this.router.navigate(['tabs/tab1'])
	}

  ngOnInit() {
  }

}
