//import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import { NgaModule } from '../../theme/nga.module';
//import { HttpModule } from '@angular/http';
//import { routing } from './cliente.routing'; // roteamento do cliente
//
////import { Ng2SmartTableModule } from 'ng2-smart-table'; // Componente de Lista
////
////import { ClienteListService } from './components/clienteList/clienteList.service';
////import { ClienteService } from './cliente.service';
////import { ClienteList } from './components/clienteList/clienteList.component';
////import { ClienteForm } from './components/clienteForm/clienteForm.component';
//import { Cliente } from './cliente.component';
//
//@NgModule({
//    imports: [
//        CommonModule,
//        ReactiveFormsModule,
//        FormsModule,
//        NgaModule,
//        routing,
//        HttpModule,
////        Ng2SmartTableModule
//    ],
//    declarations: [
//        Cliente,
////        ClienteForm,
////        ClienteList
//    ],
//    providers: [
////        ClienteListService,
////        ClienteService
//    ]
//})
//export default class ClienteModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { routing } from './cliente.routing';

import { Ng2SmartTableModule } from 'ng2-smart-table'; 

import { ClienteComponent } from './cliente.component';
import { ClienteService } from './cliente.service';
import { ClienteList } from './components/clienteList/clienteList.component';
import { ClienteForm } from './components/clienteForm/clienteForm.component';
import { ClienteListService } from './components/clienteList/clienteList.service';


import { HttpModule } from '@angular/http';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgaModule,
        Ng2SmartTableModule,
        HttpModule,
        routing
    ],
    declarations: [
        ClienteComponent,
        ClienteForm,
        ClienteList
    ],
    providers: [
        ClienteService,
        ClienteListService
    ]
})
export class ClienteModule { }
