import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PathlistComponent } from './pathlist.component';

describe('PathlistComponent', () => {
  let component: PathlistComponent;
  let fixture: ComponentFixture<PathlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PathlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PathlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
