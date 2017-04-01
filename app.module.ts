import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { AppComponent }  from './app.component';
import {HomeComponent} from './home.component';
import {AboutComponent} from './about.component';
import {RolesComponent} from './roles.component';
import {AdminComponent} from './admin.component';
import {SuperAdminComponent} from './superadmin.component';
import {MemberComponent} from './member.component';
@NgModule({
  imports:      [ BrowserModule ,
                   RouterModule.forRoot([
                     {path:'home',component:HomeComponent},
                     {path:'about',component:AboutComponent},
                      {path:'roles',component:RolesComponent},
                      {path:'admin',component:AdminComponent},
                      {path:'superadmin',component:SuperAdminComponent},
                      {path:'member',component:MemberComponent},
                   ])],
  declarations: [ AppComponent,HomeComponent,AboutComponent,RolesComponent,AdminComponent,SuperAdminComponent,MemberComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
