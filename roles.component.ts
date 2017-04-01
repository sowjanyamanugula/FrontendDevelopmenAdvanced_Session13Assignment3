import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Roles Component</h1>
              <nav>
              <a routerLink="/admin" routerLinkActive="active">Admin</a>
              <a routerLink="/superadmin" routerLinkActive="active">SuperAdmin</a>
              <a routerLink="/member" routerLinkActive="active">Member</a>
              </nav>
              <router-outlet></router-outlet>
             `
    
})
export class RolesComponent  {
  
  }



