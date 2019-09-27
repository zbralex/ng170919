import { NgModule } from '@angular/core';
import {MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatGridListModule,
  MatProgressSpinnerModule} from '@angular/material';



@NgModule({
  declarations: [],
  exports: [
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatProgressSpinnerModule
  ]
})
export class SharedModule { }
