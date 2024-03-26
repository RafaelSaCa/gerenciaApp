import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  exports:[
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatDividerModule,
  ],
})
export class AppMaterialModule {}
