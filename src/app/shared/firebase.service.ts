import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AuthService } from '../auth/auth.service';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  AdDocument: AngularFirestoreDocument<any>;
  AdObservable: Observable<any>;
  ADS: Observable<any[]>;
  myADS: Observable<any[]>;
  CurrentUserId: string;
  constructor(public db: AngularFirestore, public auth: AuthService) { }

  // getAvatars(){
  //     return this.db.collection('/avatar').valueChanges()
  // }

  // getUser(userKey){
  //   return this.db.collection('users').doc(userKey).snapshotChanges();
  // }

  // updateUser(userKey, value){
  //   value.nameToSearch = value.name.toLowerCase();
  //   return this.db.collection('users').doc(userKey).set(value);
  // }

  // deleteUser(userKey){
  //   return this.db.collection('users').doc(userKey).delete();
  // }

  // getUsers(){
  //   return this.db.collection('users').snapshotChanges();
  // }

  // searchUsers(searchValue){
  //   return this.db.collection('users',ref => ref.where('nameToSearch', '>=', searchValue)
  //     .where('nameToSearch', '<=', searchValue + '\uf8ff'))
  //     .snapshotChanges()
  // }

  // searchUsersByAge(value){
  //   return this.db.collection('users',ref => ref.orderBy('age').startAt(value)).snapshotChanges();
  // }
  // getAd(adId: any){
  //   console.log(adId)
  //   console.log(this.db.doc('ads/'+adId))
  //   this.adDocument = this.db.doc('books/adId');
  //   this.adObservable = this.adDocument.snapshotChanges();
  //   return this.adObservable
  // }
  GetAd(id: string) {
    this.AdDocument = this.db.doc('ads/' + id);
    this.AdObservable = this.AdDocument.valueChanges();

    return this.AdObservable;
  }
  DeleteAd(id: any) {
    this.db.doc('ads/' + id).delete();
    console.log("deleted " + id);
  }
  async BuyAd(id: any) {
    let userC = await this.auth.getUser()
    this.CurrentUserId = userC.uid
    this.db.collection('ads-and-users-who-buy').add({
      current_ad_owner: userC.uid,
      ad: id,
      current_date: new Date(),
      buy_price: 100
    })
    this.db.doc('ads/' + id).update({ current_lease: userC.uid });
    console.log("updated " + id);
  }
  getAllAds(): any {
    this.ADS = this.db.collection("ads").snapshotChanges();
    return this.ADS;
  }
  async getAllMyAds() {
    let userC = await this.auth.getUser()

    //   this.ARef = this.db.object('books/atlas-shrugged');
    //  this.bookObservable = this.bookRef.valueChanges()
    console.log(userC.uid)
      this.myADS = this.db.collection("ads", ref => ref.where('owned_by', '==', userC.uid)).snapshotChanges();
    // console.log(this.myADS.forEach(test => console.log(1)) )

    //     return this.myADS;
    // console.log(this.db.list("ads").where, ref => ref.where('owner_by', '==', userID)).valueChanges();)
    
    // this.myADS=this.db.list("ads", ref => ref.where('owner_by', '==', userID)).valueChanges();
    // this.myADS = this.db.collection('ads').where('owner_by', '==', userID).valueChanges()
    
  }
  // async getUserId()
  // {
  //   let userC = await this.auth.getUser().then(res => res.uid = this.CurrentUserId)
  //   let id = ''
  //   id = userC.uid
  //   return id
  // }
  createAd(data) {
        return new Promise<any>((resolve, reject) => {
          this.db
            .collection("ads")
            .add(data)
            .then(res => { }, err => reject(err));
        });
      }
//   updateCoffeeOrder(data) {
//    return
//        this.firestore
//        .collection("coffeeOrders")
//        .doc(data.payload.doc.id)
//        .set({ completed: true }, { merge: true });
// }
  // async createAd(value){
  // console.log("inCreateAd"+value)
  // let size; 
  //   this.db.collection('ads').get().toPromise().then(snap => {
  //     size = snap.size // will return the collection size
  //  });
  //  var countOf = {
  //    ads : size
  //  }
  // console.log("inCreateAd"+value)

  //  this.db.collection('count_of').add(countOf)
  //  let today= new Date()
  //  let userId= ""
  // console.log("inCreateAd"+value)

  //  userId = await this.auth.getUser();

  // //  this.auth.isLoggedIn().then(data => {if(data && this.auth.user) {
  // // } else {
  // //   console.log('failed on create')
  // // }}
  // // )
  // return this.db.collection('ads').add({

  //     // $key: (size+1),
  //     domain_url: value.domain_url,
  //     owner_email: value.owner_email,
  //     available: 'Yes',
  //     impression_share_24_hour: 0,
  //     impressions_24_hour: 0,
  //     clicks_24_hour: 0,
  //     ctr_24_hour: 0,
  //     creation_date: today,
  //     sub_domain: value.sub_domain,
  //     image_height: value.image_height,
  //     image_width: value.image_width,
  //     image_size_limit: 10000,
  //     country: value.country,
  //     nsfw_score_limit: value.nsfw_score_limit,
  //     demographic: "Family",
  //     terms: value.terms,
  //     website_categories: [],
  //     purchase_price: value.purchase_price,
  //     limit_reserve: value.limit_reserve,
  //     fee: "25",
  //     next_fee_date: today.setMonth(today.getMonth()+1),
  //     trend_30_days: 0,
  //     current_lease: " ",
  //     owned_by: userId
  // });
  // }
}