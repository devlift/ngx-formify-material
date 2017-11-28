(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('@angular/common'), require('@angular/material'), require('@angular/flex-layout')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/forms', '@angular/common', '@angular/material', '@angular/flex-layout'], factory) :
	(factory((global['ngx-formify-material'] = {}),global.ng.core,global.ng.forms,global.ng.common,global.material,global.flexLayout));
}(this, (function (exports,core,forms,common,material,flexLayout) { 'use strict';

function __extends(d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

var FormComponent = /** @class */ (function () {
    function FormComponent() {
        this.formClass = "";
        this.controlClass = "";
        this.controlInnerClass = "";
        this.onFileSelected = new core.EventEmitter();
        this.keys = [];
    }
    FormComponent.prototype.ngOnInit = function () {
        this.keys = Object.keys(this.formGroup.controls);
    };
    FormComponent.prototype.ngOnChanges = function (changes) {
        this.keys = Object.keys(this.formGroup.controls);
        console.log(changes);
    };
    FormComponent.prototype.fileSelected = function (files, formControlName) {
        this.onFileSelected.emit({ files: files, formControlName: formControlName });
    };
    __decorate([
        core.Input()
    ], FormComponent.prototype, "formGroup", void 0);
    __decorate([
        core.Input()
    ], FormComponent.prototype, "formClass", void 0);
    __decorate([
        core.Input()
    ], FormComponent.prototype, "controlClass", void 0);
    __decorate([
        core.Input()
    ], FormComponent.prototype, "controlInnerClass", void 0);
    __decorate([
        core.Output()
    ], FormComponent.prototype, "onFileSelected", void 0);
    FormComponent = __decorate([
        core.Component({
            selector: 'formify',
            template: "<form class=\"formify\" [class]=\"formClass\">\n\t<ng-container *ngFor=\"let control of keys\">\n\t\t<ng-container *ngIf=\"formGroup.controls[control].controlType === 'Input' || formGroup.controls[control].controlType === 'TextArea' || formGroup.controls[control].controlType === 'Password'\">\n\t\t\t<mat-form-field class=\"formify-input\" *ngIf=\"formGroup.controls[control].flex\" [fxFlex]=\"formGroup.controls[control].flex\">\n\t\t\t\t<input matInput *ngIf=\"formGroup.controls[control].controlType === 'Input'\" [formControl]=\"formGroup.controls[control]\" type=\"text\" [placeholder]=\"formGroup.controls[control].placeholder\" />\n\t\t\t\t<textarea matInput *ngIf=\"formGroup.controls[control].controlType === 'TextArea'\" [placeholder]=\"formGroup.controls[control].placeholder\" [formControl]=\"formGroup.controls[control]\"></textarea>\n\t\t\t\t<input matInput *ngIf=\"formGroup.controls[control].controlType === 'Password'\" [formControl]=\"formGroup.controls[control]\" type=\"password\" [placeholder]=\"formGroup.controls[control].placeholder\" />\n\t\t\t</mat-form-field>\n\t\t\t<mat-form-field class=\"formify-input\" *ngIf=\"!formGroup.controls[control].flex\">\n\t\t\t\t<input matInput *ngIf=\"formGroup.controls[control].controlType === 'Input'\" [formControl]=\"formGroup.controls[control]\" type=\"text\" [placeholder]=\"formGroup.controls[control].placeholder\" />\n\t\t\t\t<textarea matInput *ngIf=\"formGroup.controls[control].controlType === 'TextArea'\" [placeholder]=\"formGroup.controls[control].placeholder\" [formControl]=\"formGroup.controls[control]\"></textarea>\n\t\t\t\t<input matInput *ngIf=\"formGroup.controls[control].controlType === 'Password'\" [formControl]=\"formGroup.controls[control]\" type=\"password\" [placeholder]=\"formGroup.controls[control].placeholder\" />\n\t\t\t</mat-form-field>\n\t\t</ng-container>\n\n\t\t<mat-select class=\"formify-input\" *ngIf=\"formGroup.controls[control].controlType === 'Select' && formGroup.controls[control].flex\" [formControl]=\"formGroup.controls[control]\" [fxFlex]=\"formGroup.controls[control].flex\">\n\t\t\t<mat-option *ngFor=\"let option of formGroup.controls[control].options\" [value]=\"option.data\">{{option.label}}</mat-option>\n\t\t</mat-select>\n\t\t<mat-select class=\"formify-input\" *ngIf=\"formGroup.controls[control].controlType === 'Select' && !formGroup.controls[control].flex\" [formControl]=\"formGroup.controls[control]\">\n\t\t\t<mat-option *ngFor=\"let option of formGroup.controls[control].options\" [value]=\"option.data\">{{option.label}}</mat-option>\n\t\t</mat-select>\n\t\t\n\t\t<mat-radio-group class=\"formify-input\" *ngIf=\"formGroup.controls[control].controlType === 'Radio' && formGroup.controls[control].flex\" [formControl]=\"formGroup.controls[control]\" [fxFlex]=\"formGroup.controls[control].flex\">\n\t\t\t<mat-radio-button *ngFor=\"let option of formGroup.controls[control].options\" class=\"formify-radio-line\" [value]=\"option.data\">{{option.label}}</mat-radio-button>\n\t\t</mat-radio-group>\n\t\t<mat-radio-group class=\"formify-input\" *ngIf=\"formGroup.controls[control].controlType === 'Radio' && !formGroup.controls[control].flex\" [formControl]=\"formGroup.controls[control]\">\n\t\t\t<mat-radio-button *ngFor=\"let option of formGroup.controls[control].options\" class=\"formify-radio-line\" [value]=\"option.data\">{{option.label}}</mat-radio-button>\n\t\t</mat-radio-group>\n\n\t\t<mat-checkbox class=\"formify-input\" *ngIf=\"formGroup.controls[control].controlType === 'Checkbox' && formGroup.controls[control].flex\" [formControl]=\"formGroup.controls[control]\" [fxFlex]=\"formGroup.controls[control].flex\">{{formGroup.controls[control].placeholder}}</mat-checkbox>\n\t\t<mat-checkbox class=\"formify-input\" *ngIf=\"formGroup.controls[control].controlType === 'Checkbox' && !formGroup.controls[control].flex\" [formControl]=\"formGroup.controls[control]\">{{formGroup.controls[control].placeholder}}</mat-checkbox>\n\n\t\t<input *ngIf=\"formGroup.controls[control].controlType === 'File'\" [formControl]=\"formGroup.controls[control]\" type=\"file\" (change)=\"fileSelected( $event.target.files )\" />\n\t</ng-container>\n</form>",
        })
    ], FormComponent);
    return FormComponent;
}());

var FormControlExtended = /** @class */ (function (_super) {
    __extends(FormControlExtended, _super);
    function FormControlExtended() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return FormControlExtended;
}(forms.FormControl));

var FormGroupService = /** @class */ (function () {
    function FormGroupService() {
    }
    FormGroupService.prototype.build = function (model) {
        var form = new forms.FormGroup({});
        var instance;
        if (model) {
            instance = new model();
        }
        if (instance) {
            var data = [];
            var haveNoOrder = true;
            for (var key in instance) {
                var d = instance[key + "-form-metadata"];
                if (d) {
                    data.push(d);
                    if (d.order) {
                        haveNoOrder = false;
                    }
                }
            }
            if (!haveNoOrder) {
                data = data.sort(function (a, b) { return (a.order !== undefined ? a.order : Number.MAX_VALUE) - (b.order !== undefined ? b.order : Number.MAX_VALUE); });
            }
            data.forEach(function (datum) {
                var control = new FormControlExtended();
                control.setValue(datum.defaultValue || '');
                control.setValidators(datum.validators || []);
                control.placeholder = datum.placeholder || '';
                control.controlType = datum.type;
                control.options = datum.options;
                control.flex = datum.flex;
                form.addControl(datum.name, control);
            });
        }
        return form;
    };
    FormGroupService = __decorate([
        core.Injectable()
    ], FormGroupService);
    return FormGroupService;
}());

var FormifyModule = /** @class */ (function () {
    function FormifyModule() {
    }
    FormifyModule = __decorate([
        core.NgModule({
            imports: [
                common.CommonModule,
                forms.FormsModule,
                forms.ReactiveFormsModule,
                material.MatInputModule,
                material.MatSelectModule,
                material.MatRadioModule,
                material.MatCheckboxModule,
                flexLayout.FlexLayoutModule
            ],
            declarations: [
                FormComponent
            ],
            providers: [
                FormGroupService
            ],
            exports: [
                FormComponent
            ]
        })
    ], FormifyModule);
    return FormifyModule;
}());

var FormControl$1 = function (type, options) {
    var o = options || {};
    return function (target, property) {
        Object.defineProperties(target, (_a = {}, _a[property + "-form-metadata"] = {
                value: {
                    name: property,
                    type: type,
                    order: o.order,
                    placeholder: o.placeholder,
                    validators: o.validators,
                    defaultValue: o.defaultValue,
                    flex: o.flex
                },
                enumerable: false,
                configurable: false
            }, _a));
        var _a;
    };
};

var FormSelectControl = function (type, values, options) {
    return function (target, property) {
        var o = options || {};
        Object.defineProperties(target, (_a = {}, _a[property + "-form-metadata"] = {
                value: {
                    name: property,
                    type: type,
                    order: o.order,
                    validators: o.validators,
                    defaultValue: o.defaultValue,
                    options: values
                },
                enumerable: false,
                configurable: false
            }, _a));
        var _a;
    };
};

(function (FormControlType) {
    FormControlType["Input"] = "Input";
    FormControlType["TextArea"] = "TextArea";
    FormControlType["Select"] = "Select";
    FormControlType["Radio"] = "Radio";
    FormControlType["Checkbox"] = "Checkbox";
    FormControlType["Password"] = "Password";
    FormControlType["File"] = "File";
})(exports.FormControlType || (exports.FormControlType = {}));

var FormFileControl = function (options) {
    var o = options || {};
    return function (target, property) {
        Object.defineProperties(target, (_a = {}, _a[property + "-form-metadata"] = {
                value: {
                    name: property,
                    type: exports.FormControlType.File,
                    order: o.order
                },
                enumerable: false,
                configurable: false
            }, _a));
        var _a;
    };
};

exports.FormifyModule = FormifyModule;
exports.FormComponent = FormComponent;
exports.FormGroupService = FormGroupService;
exports.FormControl = FormControl$1;
exports.FormSelectControl = FormSelectControl;
exports.FormFileControl = FormFileControl;

Object.defineProperty(exports, '__esModule', { value: true });

})));
