import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [

    { path: 'register', loadChildren: 'app/register/register.module#RegisterModule' },
    { path: 'login', loadChildren: 'app/login/login.module#LoginModule' },
    { path: '', redirectTo: 'pages', pathMatch: 'full' },
    { path: '**', redirectTo: 'login' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
