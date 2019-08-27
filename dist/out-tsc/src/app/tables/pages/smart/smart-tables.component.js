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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var common_1 = require("@angular/common");
var material_1 = require("@angular/material");
var forms_1 = require("@angular/forms");
var collections_1 = require("@angular/cdk/collections");
var COMMA = 188;
var ENTER = 13;
var SmartTablesPageComponent = /** @class */ (function () {
    function SmartTablesPageComponent(fb, route, dialog, datePipe, platformId) {
        var _this = this;
        this.fb = fb;
        this.route = route;
        this.dialog = dialog;
        this.datePipe = datePipe;
        this.platformId = platformId;
        // Table 1 - external filters
        this.displayedColumnsTable1 = ['picture', 'name', 'country', 'interests', 'subscribed', 'age', 'status'];
        // Table 2 - local filters
        this.displayedColumnsTable2 = ['select', 'picture', 'name', 'country', 'interests', 'subscribed', 'age', 'status'];
        this.selection = new collections_1.SelectionModel(true, []);
        this.filtersVisible = true;
        this.toggleFiltersLabel = 'Hide filters';
        // Data from the resolver
        this.originalData = [];
        // Tags interests
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [COMMA, ENTER];
        this.interests = [];
        this.isBrowser = common_1.isPlatformBrowser(platformId);
        this.originalData = route.snapshot.data['tableData'].data;
        this.dataSourceTable1 = new material_1.MatTableDataSource(this.originalData);
        this.dataSourceTable2 = new material_1.MatTableDataSource(this.originalData);
        // Set up the form
        this.filtersForm = fb.group({
            search: '',
            ageRange: [[20, 50]],
            interests: [[]],
            subscribed: ''
        });
        this.filtersForm.valueChanges.subscribe(function (form) { _this.table1Filter(form); });
    }
    SmartTablesPageComponent.prototype.ngOnInit = function () {
        this.dataSourceTable2.paginator = this.paginatorTable2;
        // define a custom sort for the date field
        this.dataSourceTable2.sortingDataAccessor = function (item, property) {
            switch (property) {
                case 'subscribed': return new Date(item.subscribed);
                default: return item[property];
            }
        };
        this.dataSourceTable2.sort = this.sortTable2;
        this.dataSourceTable1.paginator = this.paginatorTable1;
        this.dataSourceTable1.sort = this.sortTable1;
    };
    /** Whether the number of selected elements matches the total number of rows. */
    SmartTablesPageComponent.prototype.isAllSelected = function () {
        var numSelected = this.selection.selected.length;
        var numRows = this.dataSourceTable2.data.length;
        return numSelected === numRows;
    };
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    SmartTablesPageComponent.prototype.masterToggle = function () {
        var _this = this;
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSourceTable2.data.forEach(function (row) { return _this.selection.select(row); });
    };
    SmartTablesPageComponent.prototype.applyFilterTable1 = function (filterValue) {
        this.dataSourceTable1.filter = filterValue.trim().toLowerCase();
        if (this.dataSourceTable1.paginator) {
            this.dataSourceTable1.paginator.firstPage();
        }
    };
    SmartTablesPageComponent.prototype.applyFilterTable2 = function (filterValue) {
        this.dataSourceTable2.filter = filterValue.trim().toLowerCase();
        if (this.dataSourceTable2.paginator) {
            this.dataSourceTable2.paginator.firstPage();
        }
    };
    // Show or hide the available filters
    SmartTablesPageComponent.prototype.toggleFilters = function () {
        this.filtersVisible = !this.filtersVisible;
        this.toggleFiltersLabel = this.filtersVisible ? 'Hide filters' : 'Show filters';
    };
    // Reset all the filters values
    SmartTablesPageComponent.prototype.clearFilters = function () {
        this.filtersForm.reset({
            search: '',
            ageRange: [0, 100],
            interests: [],
            subscribed: ''
        });
        this.interests = [];
        this.applyFilterTable1('');
        this.table1Filter(this.filtersForm.value);
    };
    SmartTablesPageComponent.prototype.resetDatePicker = function () {
        this.filtersForm.controls.subscribed.reset('');
    };
    // Check if a string contains another
    SmartTablesPageComponent.prototype.stringContains = function (haystack, needle) {
        return (haystack.toLowerCase().indexOf(needle.toLowerCase()) > -1);
    };
    // Check if a interest contains a string
    SmartTablesPageComponent.prototype.interestsContain = function (rowInterest, interests) {
        for (var _i = 0, interests_1 = interests; _i < interests_1.length; _i++) {
            var interest = interests_1[_i];
            if (this.stringContains(rowInterest, interest)) {
                return true;
            }
        }
        return (interests.length === 0);
    };
    // Run the filters for the smart table
    SmartTablesPageComponent.prototype.table1Filter = function (form) {
        var _this = this;
        var ageRange = form.ageRange;
        var interests = this.interests;
        var subscribed = form.subscribed;
        var results = [];
        this.originalData.forEach(function (row) {
            var filter_date = _this.datePipe.transform(subscribed, 'yyyy-MM-dd');
            if ((ageRange[0] <= row.age) && (ageRange[1] >= row.age) &&
                (_this.interestsContain(row.interests, interests)) &&
                ((subscribed === '') || (new Date(filter_date) > new Date(row.subscribed)))) {
                results.push(row);
            }
        });
        this.dataSourceTable1.data = results;
    };
    // Interest tags
    SmartTablesPageComponent.prototype.addInterest = function (event) {
        var input = event.input;
        var value = event.value;
        if ((value || '').trim()) {
            this.interests.push(value.trim());
            this.table1Filter(this.filtersForm.value);
        }
        if (input) {
            input.value = '';
        }
    };
    SmartTablesPageComponent.prototype.removeInterest = function (interest) {
        var index = this.interests.indexOf(interest);
        if (index >= 0) {
            this.interests.splice(index, 1);
            this.table1Filter(this.filtersForm.value);
        }
    };
    __decorate([
        core_1.ViewChild('paginatorTable1'),
        __metadata("design:type", material_1.MatPaginator)
    ], SmartTablesPageComponent.prototype, "paginatorTable1", void 0);
    __decorate([
        core_1.ViewChild('sortTable1'),
        __metadata("design:type", material_1.MatSort)
    ], SmartTablesPageComponent.prototype, "sortTable1", void 0);
    __decorate([
        core_1.ViewChild('paginatorTable2'),
        __metadata("design:type", material_1.MatPaginator)
    ], SmartTablesPageComponent.prototype, "paginatorTable2", void 0);
    __decorate([
        core_1.ViewChild('sortTable2'),
        __metadata("design:type", material_1.MatSort)
    ], SmartTablesPageComponent.prototype, "sortTable2", void 0);
    SmartTablesPageComponent = __decorate([
        core_1.Component({
            selector: 'app-smart-tables-page',
            templateUrl: './smart-tables.component.html',
            styleUrls: ['./styles/smart-tables.scss'],
            encapsulation: core_1.ViewEncapsulation.None,
            providers: [common_1.DatePipe]
        }),
        __param(4, core_1.Inject(core_1.PLATFORM_ID)),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            router_1.ActivatedRoute,
            material_1.MatDialog,
            common_1.DatePipe,
            Object])
    ], SmartTablesPageComponent);
    return SmartTablesPageComponent;
}());
exports.SmartTablesPageComponent = SmartTablesPageComponent;
//# sourceMappingURL=smart-tables.component.js.map