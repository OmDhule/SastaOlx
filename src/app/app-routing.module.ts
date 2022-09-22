import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AutomobilesComponent } from './automobiles/automobiles.component';
import { CategComponent } from './categ/categ.component';
import { DummyComponent } from './dummy/dummy.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { FaqComponent } from './faq/faq.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { MylistComponent } from './mylist/mylist.component';
import { OffersComponent } from './offers/offers.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path: 'login', component:LoginComponent},
  {path: 'mylist', component: MylistComponent},
  {path: 'aboutus', component:AboutusComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'categ', component: CategComponent},
  {path: 'homepage', component: HomepageComponent},
  {path: 'electronics', component: ElectronicsComponent},
  {path: 'automobile', component: AutomobilesComponent},
  {path: 'furniture', component: FurnitureComponent},
  {path: 'dummy', component: DummyComponent},
  {path: 'faq', component:FaqComponent},
  {path: 'offers', component:OffersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, MylistComponent, AboutusComponent, ProfileComponent, CategComponent, HomepageComponent, ElectronicsComponent, AutomobilesComponent, FurnitureComponent, DummyComponent, FaqComponent, OffersComponent]
