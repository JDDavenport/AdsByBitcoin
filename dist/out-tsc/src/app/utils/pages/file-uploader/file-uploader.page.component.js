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
var material_1 = require("@angular/material");
var shared_1 = require("../../../shared");
var FileUploaderPageComponent = /** @class */ (function () {
    function FileUploaderPageComponent(dialog) {
        this.dialog = dialog;
        this.placeholder = 'https://via.placeholder.com/190x190';
        this.uploaders = {
            avatar: {
                progress: undefined,
                url: undefined
            },
            files: {
                list: [],
                invalidList: []
            },
            image: {
                progress: undefined,
                url: undefined
            }
        };
    }
    FileUploaderPageComponent.prototype.onMultipleChange = function (event, uploader) {
        this.onDropzoneMultipleChange(event.target.files, uploader);
    };
    FileUploaderPageComponent.prototype.onSingleChange = function (event, uploader) {
        this.onDropzoneSingleChange(event.target.files, uploader);
    };
    FileUploaderPageComponent.prototype.onDropzoneMultipleChange = function (fileList, uploader) {
        for (var _i = 0, fileList_1 = fileList; _i < fileList_1.length; _i++) {
            var file = fileList_1[_i];
            var l = this.uploaders[uploader].list.push(file);
            this.read(file, this.uploaders[uploader].list[l - 1]);
        }
    };
    FileUploaderPageComponent.prototype.onDropzoneSingleChange = function (fileList, uploader) {
        this.uploaders[uploader] = fileList[0];
        this.read(fileList[0], this.uploaders[uploader]);
    };
    FileUploaderPageComponent.prototype.resetUploader = function (uploader) {
        if (uploader === 'files') {
            this.uploaders[uploader] = {
                list: [],
                invalidList: []
            };
        }
        else {
            this.uploaders[uploader] = {};
        }
    };
    FileUploaderPageComponent.prototype.post = function () {
        var _this = this;
        var dialogRef = this.dialog.open(shared_1.AlertComponent, {
            data: {
                icon: 'check-circle',
                iconColor: 'success',
                title: 'File uploaded corretly',
                text: 'Your file has been uploaded',
                button: 'DONE'
            }
        });
        dialogRef.afterClosed().subscribe(function (_) {
            _this.resetUploader('image');
        });
    };
    FileUploaderPageComponent.prototype.read = function (file, store) {
        store.total = (file.size / 1024).toFixed(2);
        store.progress = 0;
        store.loaded = 0;
        var reader = new FileReader();
        reader.onload = function (e) {
            store.url = e.target.result;
        };
        reader.onprogress = function (e) {
            if (e.lengthComputable) {
                store.progress = Math.round((e.loaded / e.total) * 100);
                store.loaded = (e.loaded / 1024).toFixed(2);
            }
        };
        reader.readAsDataURL(file);
    };
    FileUploaderPageComponent = __decorate([
        core_1.Component({
            selector: 'app-file-uploader-page',
            templateUrl: './file-uploader.page.component.html',
            styleUrls: ['./styles/file-uploader.page.scss'],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __metadata("design:paramtypes", [material_1.MatDialog])
    ], FileUploaderPageComponent);
    return FileUploaderPageComponent;
}());
exports.FileUploaderPageComponent = FileUploaderPageComponent;
//# sourceMappingURL=file-uploader.page.component.js.map