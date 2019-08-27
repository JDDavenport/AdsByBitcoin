"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var firestore_1 = require("@angular/fire/firestore");
var auth_service_1 = require("../auth/auth.service");
require("rxjs/add/operator/toPromise");
var FirebaseService = /** @class */ (function () {
    function FirebaseService(db, auth) {
        this.db = db;
        this.auth = auth;
    }
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
    FirebaseService.prototype.createAd = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var size, countOf, today, userId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("inCreateAd");
                        this.db.collection('ads').get().toPromise().then(function (snap) {
                            size = snap.size; // will return the collection size
                        });
                        countOf = {
                            ads: size
                        };
                        this.db.collection('count_of').add(countOf);
                        today = new Date();
                        userId = "";
                        return [4 /*yield*/, this.auth.getUser()];
                    case 1:
                        userId = _a.sent();
                        //  this.auth.isLoggedIn().then(data => {if(data && this.auth.user) {
                        // } else {
                        //   console.log('failed on create')
                        // }}
                        // )
                        return [2 /*return*/, this.db.collection('ads').add({
                                // $key: (size+1),
                                domain_url: value.domain_url,
                                owner_email: value.owner_email,
                                available: 'Yes',
                                impression_share_24_hour: 0,
                                impressions_24_hour: 0,
                                clicks_24_hour: 0,
                                ctr_24_hour: 0,
                                creation_date: today,
                                sub_domain: value.sub_domain,
                                image_height: value.image_height,
                                image_width: value.image_width,
                                image_size_limit: 10000,
                                country: value.country,
                                nsfw_score_limit: value.nsfw_score_limit,
                                demographic: "Family",
                                terms: value.terms,
                                website_categories: [],
                                purchase_price: value.purchase_price,
                                limit_reserve: value.limit_reserve,
                                fee: "25",
                                next_fee_date: today.setMonth(today.getMonth() + 1),
                                trend_30_days: 0,
                                current_lease: " ",
                                owned_by: userId
                            })];
                }
            });
        });
    };
    FirebaseService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [firestore_1.AngularFirestore, auth_service_1.AuthService])
    ], FirebaseService);
    return FirebaseService;
}());
exports.FirebaseService = FirebaseService;
//# sourceMappingURL=firebase.service.js.map