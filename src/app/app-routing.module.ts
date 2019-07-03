import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
// import {ale}
// import {alert-uiSuccess} from './alert-ui/alert-ui.component';
  
const appRoutes: Routes = [ // <-- Establish custom routes
  {path: '', redirectTo: '/main', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {enableTracing: true})],
  exports: [RouterModule]
})

export class AppRoutingModule {
} 
