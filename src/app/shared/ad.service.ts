import { Injectable } from '@angular/core';
import { Ad } from './Interfaces/ad';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class AdService {
  adsRef: AngularFireList<any>;
  adRef: AngularFireObject<any>;
  constructor(private db: AngularFireDatabase) { }
  /* Create Ad */
  AddAd(ad: Ad) {
    this.adsRef.push({
      destination_url: ad.destination_url,
      creation_date: ad.creation_date,
      image_height: ad.image_height,
      image_width: ad.image_width,
      available: ad.available,
      nsfw_score_limit: ad.nsfw_score_limit,
      main_category: ad.main_category,
      website_categories: ad.website_categories
    })
      .catch(error => {
        this.errorMgmt(error);
      })
  }
  /* Get book */
  GetAd(id: string) {
    this.adRef = this.db.object('ad-list/' + id);
    return this.adRef;
  }
  /* Get book list */
  GetAdList() {
    this.adsRef = this.db.list('ad-list');
    return this.adsRef;
  }
  /* Update book */
  UpdateAd(id, ad: Ad) {
    this.adRef.update({
      destination_url: ad.destination_url,
      creation_date: ad.creation_date,
      image_height: ad.image_height,
      image_width: ad.image_width,
      available: ad.available,
      nsfw_score_limit: ad.nsfw_score_limit,
      main_category: ad.main_category,
      website_categories: ad.website_categories
    })
      .catch(error => {
        this.errorMgmt(error);
      })
  }
  /* Delete book */
  DeleteAd(id: string) {
    this.adRef = this.db.object('ad-list/' + id);
    this.adRef.remove()
      .catch(error => {
        this.errorMgmt(error);
      })
  }
  // Error management
  private errorMgmt(error) {
    console.log(error)
  }
}
