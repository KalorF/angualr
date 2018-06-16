import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  title:string;
  constructor() { }

  ngOnInit() {
    
  }
  // onClick() {
  //   var title1 = (document.getElementsByName('val')[0] as HTMLInputElement).value;
  // }
  onKeyup() {
    var title1 = (document.getElementsByName('val')[0] as HTMLInputElement).value;
    this.title=title1;
  }
}
