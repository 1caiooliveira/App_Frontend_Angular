import { throwError } from 'rxjs';
import { HttpErrorResponse, HttpHeaders } from "@angular/common/http"

export abstract class BaseService {
    protected UrlServiceV1: string = ""

    protected ObterHeaderJson() {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/Json'
            })
        };
    }

    protected extractData(response: any){
        return response.data || {};
    }

    protected serviceError(response : Response | any){
        let customError: string[] = [];
        if(response instanceof HttpErrorResponse){
            if(response.statusText === "Unknown Error"){
                customError.push("Ocorreu um erro desconhecido");
                response.error.errors = customError;
            }
            console.log(response.message)
        }
        console.error(response);
        return throwError(response);
    }


}