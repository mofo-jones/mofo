import { Routes, RouterModule }  from '@angular/router';

import { MateriaComponent } from './materia.component';

const routes: Routes = [
  {
    path: '',
    component: MateriaComponent
  }
];

export const routing = RouterModule.forChild(routes);
