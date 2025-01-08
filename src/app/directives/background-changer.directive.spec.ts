import { BackgroundChangerDirective } from './background-changer.directive';

describe('BackgroundChangerDirective', () => {
  let directive: BackgroundChangerDirective;

  beforeEach(() => {
    directive = new BackgroundChangerDirective();
  });

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should get null when active condition is false', () => {
    // Arrange
    directive.activate = false;
    // Act
    // Assert
    expect(directive.backgroundColor).toBeNull();
  });

  it('should get null when active condition is function that returns false', () => {
    // Arrange
    directive.activate = () => false;
    // Act
    // Assert
    expect(directive.backgroundColor).toBeNull();
  });

  it('should get color when active condition is true', () => {
    // Arrange
    directive.activate = true;
    // Act
    // Assert
    expect(directive.backgroundColor).toEqual(directive.color);
  });

  it('should get color when active condition is function that returns true', () => {
    // Arrange
    directive.activate = () => true;
    // Act
    // Assert
    expect(directive.backgroundColor).toEqual(directive.color);
  });
});
