import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch"

@Injectable()
export class AppService
{
	apiurl = 'http://www.omdbapi.com/?s=';

	constructor( private http: Http ){}

	getMovie(movie: string):Observable<any>
	{
		return this.http.get(this.apiurl+movie).map((res:Response) => res.json()['Search']);
  }
}
    //.catch(this.handleError);

// 	}
// 	 private handleError (error: Response | any)  
//     {
//     let errMsg: string;
//     if (error instanceof Response)  
//     {
//       const body = error.json() || '';
//       const err = body.error || JSON.stringify(body);
//       errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
//     } 
//     else 
//     {
//       errMsg = error.message ? error.message : error.toString();
//     }
//     return Observable.throw(errMsg);
//   }
 