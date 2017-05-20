import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit 
{
	x=[];

  constructor(private appservice:AppService, private route:ActivatedRoute) { }

  ngOnInit() :void
  {
  	this.route.params.switchMap((params:Params)=> this.appservice.getMovie(params['movie'])).subscribe(x => this.x = x);

  }

}
