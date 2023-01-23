import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BackendResponse } from "./backend-response";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private httpClient: HttpClient) { }

  getFlourishAccessToken(): Observable<BackendResponse> {
    const url = "http://localhost:3002/api/v1/flourish-access-token"
    
    return this.httpClient.get<BackendResponse>(url);
  }

}