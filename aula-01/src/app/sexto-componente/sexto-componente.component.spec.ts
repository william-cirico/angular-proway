import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SextoComponenteComponent } from './sexto-componente.component';

describe('QuintoComponenteComponent', () => {
  let component: SextoComponenteComponent;
  let fixture: ComponentFixture<SextoComponenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SextoComponenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SextoComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
