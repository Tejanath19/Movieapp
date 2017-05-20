import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
 import { SearchBarComponent } from './search-bar/search-bar.component';
import { MovieAppMaterialModule } from './movie-app-material.module'
import { AppService } from './app.service';
import { RouterModule,Router,Routes}   from '@angular/router';
import { MovieComponent} from './movie/movie.component';

 const router:Routes = [{path: 'movielist/:movie',component: MovieComponent}]
@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MovieAppMaterialModule,
    [RouterModule.forRoot(router)]
   
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
