import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Import this module
import { ProductsComponent } from './products.component';
import { ProductsService } from '../../services/product.service';

describe('ProductsComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductsComponent],
      imports: [HttpClientTestingModule], // Add this to provide HttpClient
      providers: [ProductsService] // Provide your service
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ProductsComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
