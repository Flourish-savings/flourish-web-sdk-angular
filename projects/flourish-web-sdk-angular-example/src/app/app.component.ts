import { Component, OnInit } from '@angular/core';
import { Environment, Language, FlourishWebSdkAngularComponent } from 'flourish-web-sdk-angular';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ AppService, FlourishWebSdkAngularComponent ],
})
export class AppComponent implements OnInit {

  environment: Environment = Environment.STAGING;
  language: Language = Language.SPANISH;
  
  constructor(private appService: AppService, private flourishWebSdkAngularComponent: FlourishWebSdkAngularComponent) {}

  ngOnInit(): void {
    this.appService.getFlourishAccessToken()
      .subscribe((response) => {
        this.flourishWebSdkAngularComponent.initialize(this.environment, this.language, response.flourishAccessToken);
        localStorage.setItem('flourishAccessToken', response.flourishAccessToken);
      });
  }

}
