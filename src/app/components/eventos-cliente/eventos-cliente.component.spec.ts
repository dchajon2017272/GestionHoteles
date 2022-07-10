import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosClienteComponent } from './eventos-cliente.component';

describe('EventosClienteComponent', () => {
  let component: EventosClienteComponent;
  let fixture: ComponentFixture<EventosClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventosClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventosClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
