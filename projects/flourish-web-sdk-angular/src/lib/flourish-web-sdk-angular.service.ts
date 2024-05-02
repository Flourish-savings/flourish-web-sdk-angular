import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Endpoint } from "./utils/endpoint";
import { APP_VERSION } from './utils/version';

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
        Authorization: `Bearer ${accessToken}`,
        'Sdk-Version': APP_VERSION
      })
    };

    const url = `${endpoint.backend}/sign_in`
    
    return this.httpClient.post<SignInResponse>(url, null, httpOptions);
  }

}