import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedViewerComponent } from './shared-viewer.component';

describe('SharedViewerComponent', () => {
  let component: SharedViewerComponent;
  let fixture: ComponentFixture<SharedViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedViewerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
