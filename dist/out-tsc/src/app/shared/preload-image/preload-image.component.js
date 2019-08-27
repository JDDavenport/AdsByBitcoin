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
var PreloadImageComponent = /** @class */ (function () {
    function PreloadImageComponent(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._src = '';
        this._title = '';
        this._alt = '';
        this._class = '';
    }
    Object.defineProperty(PreloadImageComponent.prototype, "alt", {
        set: function (val) {
            this._alt = (val !== undefined && val !== null) ? val : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PreloadImageComponent.prototype, "title", {
        set: function (val) {
            this._title = (val !== undefined && val !== null) ? val : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PreloadImageComponent.prototype, "class", {
        set: function (val) {
            this._class = (val !== undefined && val !== null) ? val : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PreloadImageComponent.prototype, "src", {
        set: function (val) {
            this._src = (val !== undefined && val !== null) ? val : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PreloadImageComponent.prototype, "ratio", {
        set: function (ratio) {
            this._ratio = ratio || null;
        },
        enumerable: true,
        configurable: true
    });
    PreloadImageComponent.prototype.ngOnChanges = function () {
        var ratio_height = (this._ratio.h / this._ratio.w * 100) + '%';
        // Conserve aspect ratio (see: http://stackoverflow.com/a/10441480/1116959)
        // this._renderer.setStyle(this._elementRef.nativeElement, 'padding-bottom', ratio_height);
        this._renderer.setStyle(this._elementRef.nativeElement, 'padding', '0px 0px ' + ratio_height + ' 0px');
        this._update();
    };
    PreloadImageComponent.prototype._update = function () {
        this._loaded(false);
    };
    PreloadImageComponent.prototype._loaded = function (isLoaded) {
        if (isLoaded) {
            this._renderer.addClass(this._elementRef.nativeElement, 'img-loaded');
        }
        else {
            this._renderer.removeClass(this._elementRef.nativeElement, 'img-loaded');
        }
    };
    __decorate([
        core_1.ViewChild('_img'),
        __metadata("design:type", core_1.ElementRef)
    ], PreloadImageComponent.prototype, "_imageElement", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], PreloadImageComponent.prototype, "alt", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], PreloadImageComponent.prototype, "title", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], PreloadImageComponent.prototype, "class", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], PreloadImageComponent.prototype, "src", null);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], PreloadImageComponent.prototype, "ratio", null);
    PreloadImageComponent = __decorate([
        core_1.Component({
            selector: 'app-preload-image',
            templateUrl: './preload-image.component.html',
            styleUrls: [
                './styles/preload-image.styles.scss'
            ],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer2])
    ], PreloadImageComponent);
    return PreloadImageComponent;
}());
exports.PreloadImageComponent = PreloadImageComponent;
//# sourceMappingURL=preload-image.component.js.map