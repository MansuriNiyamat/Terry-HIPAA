import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HipaaComponent } from './hipaa.component';

describe('HipaaComponent', () => {
  let component: HipaaComponent;
  let fixture: ComponentFixture<HipaaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HipaaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HipaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
