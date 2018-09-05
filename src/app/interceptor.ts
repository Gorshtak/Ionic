import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';


@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {
    constructor(private spinner: Ng4LoadingSpinnerService) {
    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            tap((ev: HttpEvent<any>) => {
                if (ev instanceof HttpResponse) {
                    console.log('processing response', ev);
                }
            })
        )
    }
};