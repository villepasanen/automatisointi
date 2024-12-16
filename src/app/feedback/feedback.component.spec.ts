import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeedbackComponent } from './feedback.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
//import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

describe('FeedbackComponent', () => {
  let component: FeedbackComponent;
  let fixture: ComponentFixture<FeedbackComponent>;
  const testRouter = {navigate: jasmine.createSpy('navigate')}

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackComponent ],
      providers: [{provide: Router, useValue: testRouter} ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Title field should be empty', () => {
  
  
  expect(component.fbForm.value.title).toEqual('');
  });
  
  it('Title field should return test', () => {

    component.fbForm.controls['title'].setValue('test')
    expect(component.fbForm.value.title).toEqual('test');
   
  });
  it('Title field should have min 2 characters validator', () => {
    component.fbForm.controls['title'].setValue('a');
    expect(component.fbForm.controls['title'].hasError('minlength')).toBe(true, 'Has minlegth Error');

    component.fbForm.controls['title'].setValue('Bo');
    expect(component.fbForm.controls['title'].hasError('minlength')).toBe(false,'No Minlength error');

  });

  it('should have fields: title, description, name, email, phone', () => {
    expect(component.fbForm.controls['title']).toBeTruthy();
    expect(component.fbForm.controls['description']).toBeTruthy();
    expect(component.fbForm.controls['name']).toBeTruthy();
    expect(component.fbForm.controls['email']).toBeTruthy();
    expect(component.fbForm.controls['phone']).toBeTruthy();
       
  });
  it('cancel button should navigate home', () => {
    component.cancel();
    expect(testRouter.navigate).toHaveBeenCalledWith(['home']);
  
  });



});
