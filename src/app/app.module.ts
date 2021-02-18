import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import {ReactiveFormsModule,FormsModule} from '@angular/forms'
import {HomeComponent} from './home/home.component'
import {ProductComponent} from './product/product.component'
import {SecurityComponent} from './security/security.component'

import { RouterModule, Routes } from '@angular/router';
import {SparityLibModule} from "../../projects/sparity-lib/src/lib/sparity-lib.module";
import { DialogComponent } from './shared/dialog/dialog.component';
import { TosterComponent } from './toster/toster.component';
import { Toster1Component } from './toster1/toster1.component';
import { SampleComponent } from './sample/sample.component'
import {SharedModule} from './shared/shared.module';

const routes :Routes = [
  {path : '',component:HomeComponent},
  {path : 'product',component:ProductComponent},
  {path : 'security',component:SecurityComponent},
  {path : 'form',component:SampleComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    SecurityComponent,
    DialogComponent,
    TosterComponent,
    Toster1Component,
    SampleComponent,
  ],
   entryComponents:[DialogComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    SparityLibModule,
    FormsModule,
    SharedModule
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
