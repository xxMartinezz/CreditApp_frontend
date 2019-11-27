import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from '../components/welcome/welcome.component';
import { AdminComponent } from '../components/admin/admin.component';
import { CreditListComponent } from '../components/credit-list/credit-list.component';
import { CreditFormComponent } from '../components/credit-form/credit-form.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '', redirectTo: '/welcome', pathMatch: 'full'},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'admin', component: AdminComponent,
    children: [
      {path: '', redirectTo: 'credits', pathMatch: 'full'},
      {path: 'credits', component: CreditListComponent},
      {path: 'credits/new', component: CreditFormComponent}
    ]
  },
  {path: "**", component: PageNotFoundComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
