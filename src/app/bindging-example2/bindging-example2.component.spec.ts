import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindgingExample2Component } from './bindging-example2.component';

describe('BindgingExample2Component', () => {
  let component: BindgingExample2Component;
  let fixture: ComponentFixture<BindgingExample2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindgingExample2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BindgingExample2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
