import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideformComponent } from './sideform.component';

describe('SideformComponent', () => {
  let component: SideformComponent;
  let fixture: ComponentFixture<SideformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
