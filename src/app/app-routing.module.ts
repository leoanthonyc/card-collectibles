import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardFormComponent } from './components/card-form/card-form.component';
import { CardsComponent } from './components/cards/cards.component';

const routes: Routes = [
  { path: '', component: CardsComponent },
  {
    path: 'card',
    component: CardFormComponent,
  },
  {
    path: 'card/:id',
    component: CardFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
