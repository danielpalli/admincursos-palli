import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from './material/material.module';
import { FlexModule } from '@angular/flex-layout';
import { ErrorMsgDirective } from './directives/error-msg.directive';
import { ImagenPipe } from './pipes/imagen.pipe';
import { NombreYApellidoPipe } from './pipes/nombre-yapellido.pipe';
import { AgrandarLetraDirective } from './directives/agrandar-letra.directive';
import { DashboardRoutingModule } from '../modules/dashboard/dashboard-routing.module';

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    HeaderComponent,
    ErrorMsgDirective,
    ImagenPipe,
    NombreYApellidoPipe,
    AgrandarLetraDirective,
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    HeaderComponent,
    AgrandarLetraDirective,
  ],
  imports: [MaterialModule, FlexModule, DashboardRoutingModule],
})
export class SharedModule {}
