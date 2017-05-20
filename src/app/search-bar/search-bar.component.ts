import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router} from '@angular/router';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {


  constructor(private appservice:AppService, private route: Router) { }
  onsubmit(movie:string)
  {
  	console.log(movie);
    this.route.navigate(['movielist',movie]);

  	

  }

  ngOnInit() 
  {

  }

}
