import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListTachesPage } from './list-taches.page';

describe('ListTachesPage', () => {
  let component: ListTachesPage;
  let fixture: ComponentFixture<ListTachesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListTachesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
