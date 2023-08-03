import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormTachePage } from './form-tache.page';

describe('FormTachePage', () => {
  let component: FormTachePage;
  let fixture: ComponentFixture<FormTachePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FormTachePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
