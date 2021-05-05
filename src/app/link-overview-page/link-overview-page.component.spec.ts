import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkOverviewPageComponent } from './service-eagle-page.component';

describe('LinkOverviewPageComponent', () => {
  let component: LinkOverviewPageComponent;
  let fixture: ComponentFixture<LinkOverviewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkOverviewPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinkOverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
