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
var FileUploaderDirective = /** @class */ (function () {
    function FileUploaderDirective() {
        this.background = '';
        this.allowedExtensions = [];
        this.filesChangeEmiter = new core_1.EventEmitter();
        this.filesInvalidEmiter = new core_1.EventEmitter();
    }
    FileUploaderDirective.prototype.onDrop = function (e) {
        e.preventDefault();
        e.stopPropagation();
        this.background = '#eee';
        var files = e.dataTransfer.files;
        var validFiles = [];
        var invalidFiles = [];
        if (files.length > 0) {
            for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
                var file = files_1[_i];
                var ext = file.name.split('.')[file.name.split('.').length - 1];
                if ((!this.allowedExtensions.length) ||
                    (this.allowedExtensions.lastIndexOf(ext) !== -1)) {
                    validFiles.push(file);
                }
                else {
                    invalidFiles.push(file);
                }
            }
            this.filesChangeEmiter.emit(validFiles);
            this.filesInvalidEmiter.emit(invalidFiles);
        }
    };
    FileUploaderDirective.prototype.onDragOver = function (e) {
        e.preventDefault();
        e.stopPropagation();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], FileUploaderDirective.prototype, "allowedExtensions", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], FileUploaderDirective.prototype, "filesChangeEmiter", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], FileUploaderDirective.prototype, "filesInvalidEmiter", void 0);
    __decorate([
        core_1.HostListener('drop', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FileUploaderDirective.prototype, "onDrop", null);
    __decorate([
        core_1.HostListener('dragover', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FileUploaderDirective.prototype, "onDragOver", null);
    FileUploaderDirective = __decorate([
        core_1.Directive({
            selector: '[appFileUpload]'
        })
    ], FileUploaderDirective);
    return FileUploaderDirective;
}());
exports.FileUploaderDirective = FileUploaderDirective;
//# sourceMappingURL=file-uploader.directive.js.map