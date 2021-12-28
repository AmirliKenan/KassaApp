import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KassaHomeComponent } from './kassa/kassa-home/kassa-home.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./kassa/kassa.module').then((m) => m.KassaModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
