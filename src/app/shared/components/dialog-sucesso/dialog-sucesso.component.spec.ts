import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSucessoComponent } from './dialog-sucesso.component';

describe('DialogSucessoComponent', () => {
  let component: DialogSucessoComponent;
  let fixture: ComponentFixture<DialogSucessoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DialogSucessoComponent]
    });
    fixture = TestBed.createComponent(DialogSucessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
