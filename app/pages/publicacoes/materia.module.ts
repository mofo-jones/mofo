import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { routing } from './materia.routing';
import { MateriaComponent } from './materia.component';

import { MateriaService } from './materia.service';
import { NgUploaderModule } from 'ngx-uploader';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgaModule,
        NgUploaderModule,
        routing
    ],
    declarations: [
        MateriaComponent
    ],
    providers: [
        MateriaService
    ]
})
export class MateriaModule { }
