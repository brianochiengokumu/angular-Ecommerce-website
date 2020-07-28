import { Injectable } from '@angular/core';
import { Product } from './product.model';
import { Observable, from } from 'rxjs';
import { Order } from './order.model';

@Injectable()
export class StaticDataSource {
    private products: Product[] = [
        new Product(1, 'product 1', 'category 1', 'Product 1 Category 1', 99.99),
        new Product(2, 'product 2', 'category 1', 'Product 2 Category 1', 99.99),
        new Product(3, 'product 3', 'category 1', 'Product 3 Category 1', 99.99),
        new Product(4, 'product 4', 'category 2', 'Product 4 Category 2', 99.99),
        new Product(5, 'product 5', 'category 2', 'Product 5 Category 2', 99.99),
        new Product(6, 'product 6', 'category 2', 'Product 6 Category 2', 99.99),
        new Product(7, 'product 7', 'category 3', 'Product 7 Category 3', 99.99),
        new Product(8, 'product 8', 'category 3', 'Product 8 Category 3', 99.99),
        new Product(9, 'product 9', 'category 3', 'Product 9 Category 3', 99.99),
        new Product(10, 'product 10', 'category 4', 'Product 10 Category 4', 99.99),
        new Product(11, 'product 11', 'category 4', 'Product 11 Category 4', 99.99),
        new Product(12, 'product 12', 'category 4', 'Product 12 Category 4', 99.99),
        new Product(13, 'product 13', 'category 4', 'Product 13 Category 4', 99.99),
        new Product(14, 'product 14', 'category 5', 'Product- 14 Category 5', 99.99),
        new Product(15, 'product 15', 'category 5', 'Product 15 Category 5', 99.99),
        new Product(16, 'product 16', 'category 6', 'Product 16 Category 6', 99.99),
        new Product(17, 'product 17', 'category 6', 'Product 17 Category 6', 99.99),
        new Product(18, 'product 18', 'category 6', 'Product 18 Category 6', 99.99)
    ];
    getProducts(): Observable<Product[]> {
        return from([this.products]);
    }
    saveOrder(order: Order): Observable<Order> {
        console.log(JSON.stringify(order));
        return from([order]);
    }
}
