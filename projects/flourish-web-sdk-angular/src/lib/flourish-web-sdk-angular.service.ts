import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Environment } from './enums/environment.enum';
import { Language } from './enums/language.enum';
import { Endpoint } from './utils/endpoint'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlourishWebSdkAngularService {

  partnerId: String = '';
  partnerSecret: String = '';
  customerCode: String = '';
  environment: Environment = Environment.STAGING;
  language: Language = Language.ENGLISH;
  _endpoint: Endpoint = new Endpoint(this.environment, this.language);
  accessToken: String = '';

  constructor(private httpClient: HttpClient) { }

  initialize(partnerId: String, partnerSecret: String, customerCode: String, environment: Environment, language: Language, endpoint: Endpoint) {
    this.partnerId = partnerId;
    this.partnerSecret = partnerSecret;
    this.customerCode = customerCode;
    this.environment = environment;
    this.language = language;
    this._endpoint = endpoint;
  }

  authenticate(): Observable<{access_token: String}> {
    const body = {
        "partner_uuid": this.partnerId,
        "partner_secret": this.partnerSecret,
        "customer_code": this.customerCode
    };
    
    return this.httpClient.post<{access_token: String}> (
      this._endpoint.backend + "/access_token", 
      body
    );
  }

}
