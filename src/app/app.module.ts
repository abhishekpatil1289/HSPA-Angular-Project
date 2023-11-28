import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ButtonsModule } from 'ngx-bootstrap/buttons'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { HousingService } from './service/housing.service';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { UserLoginComponent } from './property/user-login/user-login.component';
import { UserRegisterComponent } from './property/user-register/user-register.component';
import { UserServiceService } from './service/user-service.service';
import { AlertifyService } from './service/alertify.service';
import { AuthService } from './service/auth.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PropertyDetailResolverService } from './property/property-detail/property-detail-resolver.service';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { FilterPipe } from './Pipes/filter.pipe';
import { SortPipe } from './Pipes/sort.pipe';


@NgModule({
  declarations: [
    AppComponent, 
    AddPropertyComponent,
    NavBarComponent,
    PropertyListComponent,
    PropertyCardComponent,
    PropertyDetailComponent,
    UserLoginComponent,
    UserRegisterComponent,
    FilterPipe,
    SortPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    BrowserAnimationsModule,
    TabsModule.forRoot(),
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    ButtonsModule.forRoot(),
    NgxGalleryModule
  ],
  providers: [
    HousingService,
    UserServiceService,
    AlertifyService,
    AuthService,
    PropertyDetailResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
