import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private router:Router, private alertSvc:AlertService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
    .pipe(
      tap( {
        error: (err) => {
          console.log(err)
           if(err instanceof HttpErrorResponse) {
            switch(err.status) {
              case 400:
             this.alertSvc.showAlert("Bad request (err 400)")
              break;
              case 401:
                this.alertSvc.showAlert("You are not authenticated");
                this.router.navigate(['/login']);
              break;
              case 403:
                this.alertSvc.showAlert("You are not authorized")
                this.router.navigate(['/login']);
              break;
              case 404:
                this.alertSvc.showAlert("Ressource is not available")
              break;

              default:
              this.alertSvc.showAlert("Server error")
            }
          }
        },
      })
    )
  }
}
