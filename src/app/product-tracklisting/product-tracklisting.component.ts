import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { Http } from '@angular/http';


@Component({
  selector: 'app-product-tracklisting',
  templateUrl: './product-tracklisting.component.html',
  styleUrls: ['./product-tracklisting.component.css']
})
export class ProductTracklistingComponent implements OnInit {

  constructor(private _http:Http, ) { }

  ngOnInit() {
  }

}
