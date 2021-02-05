import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import {  MatSidenavModule,  MatToolbarModule,  MatIconModule,  MatListModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon'
import {MatListModule} from '@angular/material/list'
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTabsModule,
    MatSidenavModule,
    FormsModule,
    ReactiveFormsModule,
    
  ],
  declarations: []
})
export class MaterialModule { }
