import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignatureComakerComponent } from './signature-comaker.component';

describe('SignatureComakerComponent', () => {
  let component: SignatureComakerComponent;
  let fixture: ComponentFixture<SignatureComakerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignatureComakerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignatureComakerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
