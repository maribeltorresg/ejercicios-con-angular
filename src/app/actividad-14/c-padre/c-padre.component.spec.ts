import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CPadreComponent } from './c-padre.component';

describe('CPadreComponent', () => {
  let component: CPadreComponent;
  let fixture: ComponentFixture<CPadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CPadreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
