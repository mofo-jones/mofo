import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { LoginComponent } from './login/index';

export const routes: Routes = [
    { path: '**', component: LoginComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
