import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindgingExampleComponent } from './bindging-example.component';

describe('BindgingExampleComponent', () => {
  let component: BindgingExampleComponent;
  let fixture: ComponentFixture<BindgingExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindgingExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BindgingExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
