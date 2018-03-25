import { RouterModule, Routes } from '@angular/router';
import { ApplicationformComponent } from '../forms/applicationform/applicationform.component';
import { ConsentComponent } from '../forms/consent/consent.component';
import { RequestComponent } from '../applications/request/request.component';
import { NotfoundComponent } from '../notfound/notfound.component';
import { HomeComponent } from '../pages/home/home.component';


const appRoutes: Routes = [
    { path: 'forms/applicationform', component: ApplicationformComponent },
    { path: 'forms/consent', component:ConsentComponent },
    { path: 'application/request', component:RequestComponent },
    { path: 'pages/home', component:HomeComponent },
    //{ path: 'home', component: Home },
    { path: '**', component: NotfoundComponent }, //always last
  ];
  
  export const AppRouting = RouterModule.forRoot(appRoutes, { 
    useHash: true
  });