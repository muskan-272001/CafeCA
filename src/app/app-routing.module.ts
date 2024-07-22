import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup/signup.component';
// import { AboutUsComponent } from './about-us/about-us.component';

const routes: Routes = [
  {path: 'signup', loadChildren: () => import('./signup/signup.module').then(m => m.SignupModule)},
  {path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  {path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
  {path : 'about-us' , loadChildren : () => import('./about-us/about-us.module').then(m => m.AboutUsModule)},
  {path : 'menu', loadChildren : () => import('./menu/menu.module').then(m => m.MenuModule)},
  {path : 'contact-us', loadChildren : () => import('./contact-us/contact-us.module').then(m => m.ContactUsModule)},
  {path: '**', component: SignupComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
