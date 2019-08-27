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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var database_1 = require("@angular/fire/database");
var AdService = /** @class */ (function () {
    function AdService(db) {
        this.db = db;
    }
    /* Create Ad */
    AdService.prototype.AddAd = function (ad) {
        var _this = this;
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
            .catch(function (error) {
            _this.errorMgmt(error);
        });
    };
    /* Get book */
    AdService.prototype.GetAd = function (id) {
        this.adRef = this.db.object('ad-list/' + id);
        return this.adRef;
    };
    /* Get book list */
    AdService.prototype.GetAdList = function () {
        this.adsRef = this.db.list('ad-list');
        return this.adsRef;
    };
    /* Update book */
    AdService.prototype.UpdateAd = function (id, ad) {
        var _this = this;
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
            .catch(function (error) {
            _this.errorMgmt(error);
        });
    };
    /* Delete book */
    AdService.prototype.DeleteAd = function (id) {
        var _this = this;
        this.adRef = this.db.object('ad-list/' + id);
        this.adRef.remove()
            .catch(function (error) {
            _this.errorMgmt(error);
        });
    };
    // Error management
    AdService.prototype.errorMgmt = function (error) {
        console.log(error);
    };
    AdService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [database_1.AngularFireDatabase])
    ], AdService);
    return AdService;
}());
exports.AdService = AdService;
//# sourceMappingURL=ad.service.js.map