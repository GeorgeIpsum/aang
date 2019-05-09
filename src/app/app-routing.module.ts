import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RxjsComponent } from './pages/rxjs/rxjs.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'rxjs', component: RxjsComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
