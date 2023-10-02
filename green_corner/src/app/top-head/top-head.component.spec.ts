import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopHeadComponent } from './top-head.component';

describe('TopHeadComponent', () => {
  let component: TopHeadComponent;
  let fixture: ComponentFixture<TopHeadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopHeadComponent]
    });
    fixture = TestBed.createComponent(TopHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
