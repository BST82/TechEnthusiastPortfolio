import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { PreloaderComponent } from './preloader/preloader.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { LoadingspinnerComponent } from './loadingspinner/loadingspinner.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PreloaderComponent,
    LoadingspinnerComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    RouterModule
  ],
  exports: [
    HeaderComponent, 
    FooterComponent,
    PreloaderComponent,
    LoadingspinnerComponent,
    MatProgressSpinnerModule,
    HomeComponent
  ]
})
export class ComponentModuleModule { }