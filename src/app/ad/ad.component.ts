import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../shared';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ad',
  templateUrl: 'ad.component.html',
  styles: []
})
export class AdComponent implements OnInit {
  ad: Observable<any>;
  adId: any;
  constructor(public firebase: FirebaseService, public route: ActivatedRoute, public router: Router) {
    var id = this.route.snapshot.paramMap.get('id');
    this.adId= id;
    this.ad =this.firebase.GetAd(id);
     }
  buyThisAd(){
    this.firebase.BuyAd(this.adId);
  }
  deleteThisAd(){
    this.firebase.DeleteAd(this.adId);
    this.router.navigate(['tables/smart'])
  }

  ngOnInit() {
    // this.ad = this.firebase.getAd(
    //   this.route.snapshot.params['id'])
    //   console.log( this.route.snapshot.params['id'])
    //   console.log( this.ad.)
  }

}
