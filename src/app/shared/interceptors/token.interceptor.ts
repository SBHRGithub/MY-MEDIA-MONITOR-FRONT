import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    environmenT = environment;

    cloneRequest!:HttpRequest<unknown>;

    constructor() {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
        let token = localStorage.getItem('token');

        console.log(request);
        console.log(token);

        if(request.url.includes(this.environmenT.API_VIDEOAPP_MOVIEUPDATE)||
            request.url.includes(this.environmenT.API_VIDEOAPP_TVUPDATE)||
            request.url.includes(this.environmenT.API_VIDEOAPP_MOVIEFIND)||
            request.url.includes(this.environmenT.API_VIDEOAPP_TVFIND)
            ) {
            if(request.method == 'GET'||request.method == 'POST') {
                this.cloneRequest = request
                .clone({headers: request.headers.set('Authorization', 'Bearer '+token)})
            }
            }
            else {
                this.cloneRequest = request;
            }                    

            return next.handle(this.cloneRequest);
    }
}
