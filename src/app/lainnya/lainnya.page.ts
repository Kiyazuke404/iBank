import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lainnya',
  templateUrl: './lainnya.page.html',
  styleUrls: ['./lainnya.page.scss'],
})
export class LainnyaPage implements OnInit {

  constructor(public router:Router) { 

  }

  goBack(){
	this.router.navigate(['tabs/tab1'])
	}

  ngOnInit() {
  }

}
