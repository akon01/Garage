import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CheckInComponent } from './check-in/check-in.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatOptionModule, MatSelectModule, MatInputModule, MatCardModule, MatButtonModule, MatDialog, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { VehicleViewComponent } from './vehicle-view/vehicle-view.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { TicketViewComponent } from './ticket-view/ticket-view.component';
import { GarageViewComponent } from './garage-view/garage-view.component';
import { EnumConverterPipe } from './enum-converter.pipe';
import { ZeroToInfinitPipe } from './zero-to-infinit.pipe';
import { AsyncTestComponent } from './async-test/async-test.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CheckInComponent,
    VehicleViewComponent,
    CheckOutComponent,
    TicketViewComponent,
    GarageViewComponent,
    EnumConverterPipe,
    ZeroToInfinitPipe,
    AsyncTestComponent,
  ],
  entryComponents: [TicketViewComponent, VehicleViewComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [{ provide: MatDialogRef, useValue: {} },
  { provide: MAT_DIALOG_DATA, useValue: [] },],

  bootstrap: [AppComponent]
})
export class AppModule { }
