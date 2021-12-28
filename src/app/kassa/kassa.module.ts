import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { KassaRoutingModule } from './kassa-routing.module';
import { KassaHomeComponent } from './kassa-home/kassa-home.component';
import { KassaListComponent } from './kassa-list/kassa-list.component';
import { KassaCreateComponent } from './kassa-create/kassa-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { KassaEditComponent } from './kassa-edit/kassa-edit.component';

@NgModule({
  declarations: [KassaHomeComponent, KassaListComponent, KassaCreateComponent, KassaEditComponent],
  imports: [CommonModule, KassaRoutingModule, ReactiveFormsModule],
})
export class KassaModule {}
