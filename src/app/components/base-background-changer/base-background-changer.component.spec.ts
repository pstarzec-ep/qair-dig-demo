import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterService } from '../../services';
import { MockCounterService } from '../../services/testing';
import { ACTIVATE_BACKGROUND_COUNT } from '../../vars';

import { BaseBackgroundChangerComponent } from './base-background-changer.component';

describe('BaseBackgroundChangerComponent', () => {
  let component: BaseBackgroundChangerComponent;
  let fixture: ComponentFixture<BaseBackgroundChangerComponent>;
  let counterService: MockCounterService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseBackgroundChangerComponent],
      providers: [
        { provide: ACTIVATE_BACKGROUND_COUNT, useValue: 3 },
      ],
    })
      .overrideProvider(CounterService, { useFactory: () => new MockCounterService() })
      .compileComponents();

    counterService = TestBed.inject(CounterService) as any;

    fixture = TestBed.createComponent(BaseBackgroundChangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should setup activate function for directive', () => {
    // Arrange
    // Act
    // Assert
    expect(typeof component['backgroundChangerDirective'].activate).toEqual('function');
    expect(component['activateBackgroundCount']).toEqual(3);
  });
});
