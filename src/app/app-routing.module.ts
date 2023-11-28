import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { UserLoginComponent } from './property/user-login/user-login.component';
import { UserRegisterComponent } from './property/user-register/user-register.component';
import { PropertyDetailResolverService } from './property/property-detail/property-detail-resolver.service';

const routes: Routes = [
  { path: '', component: PropertyListComponent },
  { path: 'rent-property', component: PropertyListComponent },
  { path: 'add-property', component: AddPropertyComponent },
  { path: 'user-login', component: UserLoginComponent },
  { path: 'user-register', component: UserRegisterComponent },
  {
    path: 'property-detail/:id',
    component: PropertyDetailComponent,
    resolve: { prp: PropertyDetailResolverService }
  },
  { path: '**', component: PropertyListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
