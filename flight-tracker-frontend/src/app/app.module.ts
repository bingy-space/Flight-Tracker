import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AirlineComponent } from './components/airline/airline.component';
import { AllFlightInfoComponent } from './components/all-flight-info/all-flight-info.component';
import { EditFlightInfoComponent } from './components/edit-flight-info/edit-flight-info.component';
import { NewFlightInfoComponent } from './components/new-flight-info/new-flight-info.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'new-flight-info', component: NewFlightInfoComponent},
  {path: 'edit-flight-info', component: EditFlightInfoComponent},
  {path: 'all-flight-info', component: AllFlightInfoComponent},
  {path: 'airline', component: AirlineComponent},
  {path: '', redirectTo: '/dashboard', pathMatch:'full'},
  {path: '**', redirectTo: '/dashboard', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AirlineComponent,
    AllFlightInfoComponent,
    EditFlightInfoComponent,
    NewFlightInfoComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
