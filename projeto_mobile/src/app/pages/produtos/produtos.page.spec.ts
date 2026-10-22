import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProdutosPage } from './produtos.page';

describe('ProdutosPage', () => {
  let component: ProdutosPage;
  let fixture: ComponentFixture<ProdutosPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ProdutosPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ProdutosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
