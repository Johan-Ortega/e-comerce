import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

//Frames
import { PrincipalComponent } from './principal/principal.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DevolucionComponent } from './devolucion/devolucion.component';

const routes: Routes = [  
  {
    path:'',
    component: PrincipalComponent,
  },
  {
    path:'about-us',
    component: AboutUsComponent
  },
  {
    path:'devolucion',
    component: DevolucionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }