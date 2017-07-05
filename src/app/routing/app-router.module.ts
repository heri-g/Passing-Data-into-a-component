import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelloComponent } from '../components/hello/hello.component';
import { GoodbyeComponent } from '../components/goodbye/goodbye.component';
import { NewComponent } from '../components/new/new.component';

const appRoutes: Routes = [
  { path: 'hello', component: HelloComponent },
  { path: 'goodbye', component: GoodbyeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: [NewComponent]
})

export class AppRoutingModule {

}
