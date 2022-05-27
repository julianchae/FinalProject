import { LogoutComponent } from './components/logout/logout.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

// Angular Material Imports
import {MatCardModule} from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NavigationComponent } from './components/navigation/navigation.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { SingleTruckComponent } from './components/single-truck/single-truck.component';





@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    HomeComponent,
    NavigationComponent,
    SingleTruckComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
