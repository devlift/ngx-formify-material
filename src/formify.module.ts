import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { FormGroupService } from './services/form-group.service';
import { MatInputModule, MatSelectModule, MatRadioModule, MatCheckboxModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatSelectModule,
        MatRadioModule,
        MatCheckboxModule,
        FlexLayoutModule
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
export class FormifyModule { }
