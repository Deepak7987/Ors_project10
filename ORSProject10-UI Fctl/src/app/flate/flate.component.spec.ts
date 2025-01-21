import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlateComponent } from './flate.component';

describe('FlateComponent', () => {
  let component: FlateComponent;
  let fixture: ComponentFixture<FlateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
