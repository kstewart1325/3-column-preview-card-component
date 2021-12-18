import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnPreviewCardComponent } from './column-preview-card.component';

describe('ColumnPreviewCardComponent', () => {
  let component: ColumnPreviewCardComponent;
  let fixture: ComponentFixture<ColumnPreviewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColumnPreviewCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnPreviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
