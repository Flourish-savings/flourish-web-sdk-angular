import { Component } from '@angular/core';
import { Environment, Language } from 'flourish-web-sdk-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  sdkEnvironment: Environment = Environment.STAGING;
  sdkLanguage: Language = Language.ENGLISH;
  
  constructor() {}

}
