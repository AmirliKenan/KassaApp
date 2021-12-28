import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KassaCreateComponent } from './kassa-create/kassa-create.component';
import { KassaEditComponent } from './kassa-edit/kassa-edit.component';
import { KassaListComponent } from './kassa-list/kassa-list.component';

const routes: Routes = [
  {
    path: '',
    component: KassaListComponent,
  },
  {
    path: 'create',
    component: KassaCreateComponent,
  },
  {
    path: 'kassa/edit/:id',
    component: KassaEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KassaRoutingModule {}
