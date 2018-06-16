import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductComponent } from './product/product.component';
import { StarsComponent } from './stars/stars.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from "@angular/router";
import { FilmComponent } from './film/film.component';
import { AboutComponent } from './about/about.component';
import { ConnectionComponent } from './connection/connection.component';

const routeConfig:Routes=[
  {path:'',component:HomeComponent},
  {path:'product/:prodTitle/:detail/:src',component:ProductDetailComponent},
  {path:'film/:title',component:FilmComponent},
  {path:'about',component:AboutComponent},
  {path:'connection',component:ConnectionComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SearchComponent,
    CarouselComponent,
    ProductComponent,
    StarsComponent,
    ProductDetailComponent,
    HomeComponent,
    FilmComponent,
    AboutComponent,
    ConnectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routeConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
