import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilteredHeroesComponent } from './filtered-heroes.component';

describe('FilteredHeroesComponent', () => {
  let component: FilteredHeroesComponent;
  let fixture: ComponentFixture<FilteredHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilteredHeroesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilteredHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
