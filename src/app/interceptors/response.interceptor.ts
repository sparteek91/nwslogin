import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { ToastService } from '../shared/services/toastr.service';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { AuthService } from '../shared/services/auth.service';

@Injectable()
export class ResponseInterceptor implements HttpInterceptor {
    logoutCheck: boolean = false;
    constructor(private auth: AuthService, private toastr: ToastService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            tap((ev: HttpEvent<any>) => {
                if (ev instanceof HttpResponse) {
                    if (request.method !== 'GET') {
                        if (ev.body?.msg) {
                            // this.notifier(ev.body.msg, 'success');
                        }
                    }
                }
            }),
            catchError((error: HttpErrorResponse) => {
                // If Notification (toast) service is present we can show current error notification
                this.errorHandler(error);
                return throwError(error);
            })
        );
    }

    private errorHandler(error: HttpErrorResponse, type: string = 'error') {
        // const err: string = this.getError(error);
        console.log(error)
        switch (error.status) {
            case 401: {
                this.notifier('Access token expired', type);
                this.auth.logout();
                break;
            }
            case 400: {
                this.notifier('err', type);
                break;
            }
            case 404: {
                this.notifier('err', type);
                break;
            }
            case 500: {
                this.notifier('err', type);
                break;
            }
            case 0: {
                this.notifier('Seems there is some problem with the server. Try later!', type);
                break;
            }
        }
    }

    private notifier(msg: string, type: string = 'success') {
        if (type === 'error') {
            // const key: string = Object.keys(msgObj)[0]
            this.toastr.error(msg);
            return;
        }
        this.toastr.success('Success');
    }
}