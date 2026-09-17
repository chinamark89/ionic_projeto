import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DetalhesPage } from './detalhes.page';

describe('DetalhesPage', () => {
  let component: DetalhesPage;
  let fixture: ComponentFixture<DetalhesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [DetalhesPage],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalhesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
