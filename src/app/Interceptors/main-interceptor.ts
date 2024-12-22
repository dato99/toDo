import { HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { catchError, throwError } from "rxjs";

@Injectable()
export class MainInterceptor implements HttpInterceptor{
    constructor (private router: Router){}

    intercept(req: HttpRequest<any>, next: HttpHandler){
        const token: string | null = localStorage.getItem("Token");
        let request;

        if(token != null){
            request = req.clone({
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                })
            });
        }
        else{
            request = req.clone({
                headers: new HttpHeaders({
                    'Content-Type': 'application/json'
                })
            });
        }

        return next.handle(request).pipe(
            catchError(res => {
                if(res.status == 401 && this.router.url != "/login"){
                    this.router.navigate(['/login']);
                }
                else alert(res.error);
                return throwError(() => new Error(''));
            }));
                
    }
        
}
