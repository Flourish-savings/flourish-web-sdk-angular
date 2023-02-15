[<img width="400" src="https://github.com/Flourish-savings/flourish-web-sdk-angular/blob/main/images/logo_flourish.png?raw=true"/>](https://flourishfi.com)
# Web SDK for Angular

Everything you need to know to start integrating your Angular application with Flourish

## Getting Started
The integration with us works as follows, the client will make a call to our [API](https://docs.flourishfi.com/#intro) to authenticates himself, retrieve an access token and pass to our component, given that, the sdk serves to encapsulate and help in loading this webview.

### Step 1: Installation
Start by adding our SDK into your project with the following command: 

```sh
npm install flourish-web-sdk-angular
```

Add our module into your app's imports, like this:
```javascript
import { AppComponent } from './app.component';
import { FlourishWebSdkAngularModule } from 'flourish-web-sdk-angular'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FlourishWebSdkAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

After adding our module, it is necessary to retrieve an access token from our [API](https://docs.flourishfi.com/#intro), and we strongly recommend that it be done through a backend because the request needs your credentials and it's good to avoid the harmful environment of the web.

With your `accessToken` in hand, a call must happen to the `initialize` method along with your application initialization, which is required to complete the initialization of our component. Like for example adding in the `onInit` of the `app.component.ts`:
```javascript
environment: Environment = Environment.STAGING;
language: Language = Language.ENGLISH;

constructor(private appService: AppService, private flourishWebSdkAngularComponent: FlourishWebSdkAngularComponent) {}

ngOnInit(): void {
  this.appService.getFlourishAccessToken()
    .subscribe((response) => {
      this.flourishWebSdkAngularComponent.initialize(this.environment, this.language, response.flourishAccessToken);
      localStorage.setItem('flourishAccessToken', response.flourishAccessToken);
    });
}
```

### Step 2: Using the SDK

Then, after having initialized, it's possible to use SDK component, along with the desired environment and language, just like this:

```html
<flourish-web-sdk-angular
    [accessToken]="accessToken"
    [environment]="environment"
    [language]="language"
    >
</flourish-web-sdk-angular>
```

### Step 3: Listening events

You can register for some events to know when something happens within our platform.

You can listen to a specific already mapped events or an unmapped event.

For example, if you need know when ou Trivia feature finished, you can listen to the "TriviaFinishedEvent", and to do that, you need to create your method to listen and pass it to the SDK component, just like this:

```html
<flourish-web-sdk-angular
    [accessToken]="accessToken"
    [environment]="environment"
    [language]="language"
    (onTriviaFinishedEvent)="onTriviaFinishedEvent($event)"
    >
</flourish-web-sdk-angular>
```
```javascript
onTriviaFinishedEvent(triviaFinishedEvent: TriviaFinishedEvent): void {
    console.log(`Event name: ${triviaFinishedEvent.name}`);
    console.log(`Event data: ${JSON.stringify(triviaFinishedEvent.data)}`);
}
```
You can find our all mapped events [here](https://github.com/Flourish-savings/flourish-web-sdk-angular/tree/main/projects/flourish-web-sdk-angular/src/lib/events).

## Example
Inside this repository, you have an example app to show how to integrate with us:

https://github.com/Flourish-savings/flourish-web-sdk-angular/tree/main/projects/flourish-web-sdk-angular-example
<br>
