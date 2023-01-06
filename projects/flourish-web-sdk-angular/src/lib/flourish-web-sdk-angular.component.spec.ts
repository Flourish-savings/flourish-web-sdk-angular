import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlourishWebSdkAngularComponent } from './flourish-web-sdk-angular.component';

describe('FlourishWebSdkAngularComponent', () => {
  let component: FlourishWebSdkAngularComponent;
  let fixture: ComponentFixture<FlourishWebSdkAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlourishWebSdkAngularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlourishWebSdkAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
