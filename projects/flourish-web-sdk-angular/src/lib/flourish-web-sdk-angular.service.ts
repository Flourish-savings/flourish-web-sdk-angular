import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Endpoint } from "./utils/endpoint";

interface SignInResponse {
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class FlourishWebSdkAngularService {

  constructor(private httpClient: HttpClient) { }

  signIn(accessToken: String, endpoint: Endpoint): Observable<SignInResponse> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        Authorization: `Bearer ${accessToken}`
      })
    };

    const url = `${endpoint.backend}/sign_in`
    
    return this.httpClient.post<SignInResponse>(url, null, httpOptions);
  }

}