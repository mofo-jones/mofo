import { Routes, RouterModule } from '@angular/router';
import { Pages } from './pages.component';
import { AuthGuard } from 'app/login/guards/index';
import { ModuleWithProviders } from '@angular/core';
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [

    {
        path: 'pages',
        component: Pages,
        canActivate: [AuthGuard],
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
            { path: 'dashboard', loadChildren: 'app/pages/@demos/dashboard/dashboard.module#DashboardModule' },
            { path: 'new', loadChildren: 'app/pages/@new/new.module#NewModule' },
            { path: 'materia', loadChildren: 'app/pages/publicacoes/materia.module#MateriaModule' },
            { path: 'cliente', loadChildren: 'app/pages/cliente/cliente.module#ClienteModule' },
            { path: 'editors', loadChildren: 'app/pages/@demos/editors/editors.module#EditorsModule' },
            { path: 'components', loadChildren: 'app/pages/@demos/components/components.module#ComponentsModule' },
            { path: 'charts', loadChildren: 'app/pages/@demos/charts/charts.module#ChartsModule' },
            { path: 'ui', loadChildren: 'app/pages/@demos/ui/ui.module#UiModule' },
            { path: 'forms', loadChildren: 'app/pages/@demos/forms/forms.module#FormsModule' },
            { path: 'tables', loadChildren: 'app/pages/@demos/tables/tables.module#TablesModule' },
            { path: 'maps', loadChildren: 'app/pages/@demos/maps/maps.module#MapsModule' },
        ]
    }


];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
