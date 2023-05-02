import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


/* Cuando hago CLICK .button, .nav TOGGLE 'activo' */

const button = (document.querySelector('.button') as HTMLButtonElement)
const menu    = (document.querySelector('.menu')    as HTMLElement)

button.addEventListener('click',() : void => {
    menu.classList.toggle('activo')
})