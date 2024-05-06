import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddappartComponent } from './addappart.component';

describe('AddappartComponent', () => {
  let component: AddappartComponent;
  let fixture: ComponentFixture<AddappartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddappartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddappartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
