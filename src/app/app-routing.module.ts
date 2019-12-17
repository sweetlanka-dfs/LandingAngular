import {HomeComponent} from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import {NgModule} from '@angular/core';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  { path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      { enableTracing: true }
    )
  ]
})

export class AppModule { }
