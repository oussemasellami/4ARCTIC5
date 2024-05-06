import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateappartComponent } from './updateappart.component';

describe('UpdateappartComponent', () => {
  let component: UpdateappartComponent;
  let fixture: ComponentFixture<UpdateappartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateappartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateappartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
