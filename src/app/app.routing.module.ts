import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CourcesComponent} from './cources/cources.component';
import {FlashComponent} from './flash/flash.component';
import {HeaderComponent} from './header/header.component';

const routes: Routes = [
  { path: 'flash', component: FlashComponent },
  { path: 'courses', component: CourcesComponent },
  { path: '', component: HeaderComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
