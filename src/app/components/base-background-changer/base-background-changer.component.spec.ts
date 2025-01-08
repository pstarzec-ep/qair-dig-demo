import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ACTIVATE_BACKGROUND_COUNT } from '../../vars';

import { BaseBackgroundChangerComponent } from './base-background-changer.component';

describe('BaseBackgroundChangerComponent', () => {
  let component: BaseBackgroundChangerComponent;
  let fixture: ComponentFixture<BaseBackgroundChangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseBackgroundChangerComponent],
      providers: [
        { provide: ACTIVATE_BACKGROUND_COUNT, useValue: 3 },
      ],
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
