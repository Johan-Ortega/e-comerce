import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

//Frames
import { PrincipalComponent } from './principal/principal.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { DevolucionComponent } from './devolucion/devolucion.component';
import { InventarioComponent } from './inventario/inventario.component';
import { HeaderPageComponent } from './header-page/header-page.component';
import { PreguntasFrecuentesComponent } from './preguntas-frecuentes/preguntas-frecuentes.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { Publicidad2Component } from './publicidad/publicidad2/publicidad2.component';
import { PubOfertasComponent } from './ofertas/pub-ofertas/pub-ofertas.component';
import { PublicarPComponent } from './publicar-productos/publicar-p/publicar-p.component';
import { ReclamosFormularioComponent } from './reclamos-formulario/reclamos-formulario.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RetiroComponent } from './retiro/retiro.component';
import { DatosRetiroComponent } from './datos-retiro/datos-retiro.component';
import { EstadisticaComponent } from './estadistica/estadistica.component';
import { SaldosComponent } from './saldos/saldos.component';

const routes: Routes = [  
  {
    path:'',
    component: PrincipalComponent,
  },
  {
    path:'home',
    component: HomepageComponent,
  },
  {
    path:'retiro',
    component: RetiroComponent,
  },
  {
    path:'datos-retiro',
    component: DatosRetiroComponent,
  },
  {
    path:'about-us',
    component: AboutUsComponent
  },
  {
    path:'saldos',
    component: SaldosComponent
  },
  {
    path:'devolucion',
    component: DevolucionComponent
  },
  {
    path:'inventario',
    component: InventarioComponent
  },
  {
    path:'tutorial',
    component: TutorialComponent
  },
  {
    path:'preguntas-frecuentes',
    component: PreguntasFrecuentesComponent
  },
  {
    path:'header-page',
    component: HeaderPageComponent
  },
  {  
    path: 'publicidad2',
    component: Publicidad2Component
  },
  {
    path: 'ofertas',
    component: PubOfertasComponent
  },
  {
    path: 'publicar-productos',
    component: PublicarPComponent
  },
  {
    path:'reclamos-formulario',
    component: ReclamosFormularioComponent
  },
  {
    path:'estadistica',
    component: EstadisticaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
