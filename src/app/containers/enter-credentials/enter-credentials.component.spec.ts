import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterCredentialsComponent } from './enter-credentials.component';

describe('EnterCredentialsComponent', () => {
  let component: EnterCredentialsComponent;
  let fixture: ComponentFixture<EnterCredentialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterCredentialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterCredentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
