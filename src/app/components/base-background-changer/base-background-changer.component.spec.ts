import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseBackgroundChangerComponent } from './base-background-changer.component';

describe('BaseBackgroundChangerComponent', () => {
  let component: BaseBackgroundChangerComponent;
  let fixture: ComponentFixture<BaseBackgroundChangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseBackgroundChangerComponent],
    })
      .compileComponents();

    fixture = TestBed.createComponent(BaseBackgroundChangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
