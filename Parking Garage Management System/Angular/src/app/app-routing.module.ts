import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { CheckInComponent } from './check-in/check-in.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { GarageViewComponent } from './garage-view/garage-view.component';
import { AsyncTestComponent } from './async-test/async-test.component';


const routes: Routes = [
  { path: "", component: MainPageComponent },
  { path: "CheckIn", component: CheckInComponent },
  { path: "CheckOut", component: CheckOutComponent },
  { path: "GarageView", component: GarageViewComponent },
  { path: "CheckInAsyncTest", component: AsyncTestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
