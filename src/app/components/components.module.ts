import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { ComponentsComponent } from './components.component';
import { LayoutsModule } from '../layouts/layouts.module';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [ComponentsComponent],
  exports: [ComponentsComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    LayoutsModule,
    MatDialogModule,
  ],
})
export class ComponentsModule {}
