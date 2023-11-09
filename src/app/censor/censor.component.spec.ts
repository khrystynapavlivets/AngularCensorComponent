import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CensorComponent } from './censor.component';

describe('CensorComponent', () => {
  let component: CensorComponent;
  let fixture: ComponentFixture<CensorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CensorComponent]
    });
    fixture = TestBed.createComponent(CensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
