import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownCustomDataProviderComponent } from './dropdown-custom-data-provider.component';

describe('DropdownCustomDataProviderComponent', () => {
  let component: DropdownCustomDataProviderComponent;
  let fixture: ComponentFixture<DropdownCustomDataProviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownCustomDataProviderComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownCustomDataProviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
