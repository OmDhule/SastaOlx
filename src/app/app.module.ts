import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// import { NgImageSliderModule } from 'ng-image-slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { MylistComponent } from './mylist/mylist.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ProfileComponent } from './profile/profile.component';
import { CategComponent } from './categ/categ.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { ProductSliderComponent } from './product-slider/product-slider.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { AutomobilesComponent } from './automobiles/automobiles.component';
import { FurnitureComponent } from './furniture/furniture.component';
import { ListformComponent } from './listform/listform.component';
import { DummyComponent } from './dummy/dummy.component';
import { FaqComponent } from './faq/faq.component';
import { OffersComponent } from './offers/offers.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { MyListingComponent } from './my-listing/my-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    MylistComponent,
    AboutusComponent,
    ProfileComponent,
    CategComponent,
    HomepageComponent,
    ImageSliderComponent,
    ProductSliderComponent,
    ElectronicsComponent,
    AutomobilesComponent,
    FurnitureComponent,
    ListformComponent,
    DummyComponent,
    FaqComponent,
    OffersComponent,
    ProfilePageComponent,
    MyListingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
