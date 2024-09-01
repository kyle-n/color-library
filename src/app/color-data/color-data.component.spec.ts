import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorDataComponent } from './color-data.component';

describe('ColorDataComponent', () => {
  let component: ColorDataComponent;
  let fixture: ComponentFixture<ColorDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorDataComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColorDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
