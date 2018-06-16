import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router"

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productTitle:string;
  detail:string;
  src:string;
  constructor(private routeInfo:ActivatedRoute) { }

  ngOnInit() {
    this.productTitle=this.routeInfo.snapshot.params["prodTitle"];
    this.detail=this.routeInfo.snapshot.params["detail"];
    this.src=this.routeInfo.snapshot.params["src"];
  }

}
