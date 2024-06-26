//Source code generated by AppGPT (www.appgpt.tech)

//Class to create tables and seed new database
import { DataSource } from 'typeorm';
import { DBConfiguration } from './Configuration';
import { SettingsEntity } from './db/Settings.entity';
//autogenerate imports based on resources
import { UsersEntity } from './db/Users.entity';
import { VendorsEntity } from './db/Vendors.entity';
import { CustomersEntity } from './db/Customers.entity';
import { InventoryEntity } from './db/Inventory.entity';
import { ProductsEntity } from './db/Products.entity';
import { ProductCategoriesEntity } from './db/ProductCategories.entity';
import { DiscountsEntity } from './db/Discounts.entity';
import { ShoppingCartEntity } from './db/ShoppingCart.entity';
import { OrdersEntity } from './db/Orders.entity';
import { OrderDetailsEntity } from './db/OrderDetails.entity';
import { PaymentsEntity } from './db/Payments.entity';
import { ReviewsEntity } from './db/Reviews.entity';
import { SupportTicketsEntity } from './db/SupportTickets.entity';

export class Database {
  static dbConfiguration: DBConfiguration;
  public static ds: DataSource;

  static async Initialize(dbConfiguration: DBConfiguration) {
    Database.dbConfiguration = dbConfiguration;
    let dbConfig: any = dbConfiguration as any;
    //Autogenerate entities array from resource names

    dbConfig.entities = [
      SettingsEntity,
      UsersEntity,
      VendorsEntity,
      CustomersEntity,
      InventoryEntity,
      ProductsEntity,
      ProductCategoriesEntity,
      DiscountsEntity,
      ShoppingCartEntity,
      OrdersEntity,
      OrderDetailsEntity,
      PaymentsEntity,
      ReviewsEntity,
      SupportTicketsEntity,
    ];
    Database.ds = new DataSource(dbConfig);
    await Database.ds.initialize();

    //TODO: Drop all tables

    await Database.Seed();
  }
  static async Seed() {
    let data: any = {
      Users: [
        {
          username: 'username 1',
          email: 'email 1',
          password: 'password 1',
          role: 'role 1',
          id: 91,
        },
        {
          username: 'username 2',
          email: 'email 2',
          password: 'password 2',
          role: 'role 2',
          id: 4,
        },
        {
          username: 'username 3',
          email: 'email 3',
          password: 'password 3',
          role: 'role 3',
          id: 46,
        },
        {
          username: 'username 4',
          email: 'email 4',
          password: 'password 4',
          role: 'role 4',
          id: 89,
        },
        {
          username: 'username 5',
          email: 'email 5',
          password: 'password 5',
          role: 'role 5',
          id: 79,
        },
      ],
      Vendors: [
        {
          companyName: 'companyName 1',
          contactName: 'contactName 1',
          email: 'email 1',
          password: 'password 1',
          id: 63,
        },
        {
          companyName: 'companyName 2',
          contactName: 'contactName 2',
          email: 'email 2',
          password: 'password 2',
          id: 11,
        },
        {
          companyName: 'companyName 3',
          contactName: 'contactName 3',
          email: 'email 3',
          password: 'password 3',
          id: 41,
        },
        {
          companyName: 'companyName 4',
          contactName: 'contactName 4',
          email: 'email 4',
          password: 'password 4',
          id: 41,
        },
        {
          companyName: 'companyName 5',
          contactName: 'contactName 5',
          email: 'email 5',
          password: 'password 5',
          id: 100,
        },
      ],
      Customers: [
        {
          customerName: 'customerName 1',
          email: 'email 1',
          password: 'password 1',
          billingAddress: 'billingAddress 1',
          shippingAddress: 'shippingAddress 1',
          country: 'country 1',
          phone: 'phone 1',
          id: 3,
        },
        {
          customerName: 'customerName 2',
          email: 'email 2',
          password: 'password 2',
          billingAddress: 'billingAddress 2',
          shippingAddress: 'shippingAddress 2',
          country: 'country 2',
          phone: 'phone 2',
          id: 91,
        },
        {
          customerName: 'customerName 3',
          email: 'email 3',
          password: 'password 3',
          billingAddress: 'billingAddress 3',
          shippingAddress: 'shippingAddress 3',
          country: 'country 3',
          phone: 'phone 3',
          id: 4,
        },
        {
          customerName: 'customerName 4',
          email: 'email 4',
          password: 'password 4',
          billingAddress: 'billingAddress 4',
          shippingAddress: 'shippingAddress 4',
          country: 'country 4',
          phone: 'phone 4',
          id: 22,
        },
        {
          customerName: 'customerName 5',
          email: 'email 5',
          password: 'password 5',
          billingAddress: 'billingAddress 5',
          shippingAddress: 'shippingAddress 5',
          country: 'country 5',
          phone: 'phone 5',
          id: 40,
        },
      ],
      Inventory: [
        { product: 1, quantity: 1, lowStockThreshold: 1, id: 92 },
        { product: 2, quantity: 2, lowStockThreshold: 2, id: 50 },
        { product: 3, quantity: 3, lowStockThreshold: 3, id: 73 },
        { product: 4, quantity: 4, lowStockThreshold: 4, id: 22 },
        { product: 5, quantity: 5, lowStockThreshold: 5, id: 51 },
      ],
      Products: [
        {
          productName: 'productName 1',
          vendor: 1,
          price: 0.51,
          weight: 0.81,
          description: 'description 1',
          thumbnail: 'thumbnail 1',
          image: 'image 1',
          category: 1,
          creationDate: '2024-03-22T14:37:05.651Z',
          stock: 1,
          id: 18,
        },
        {
          productName: 'productName 2',
          vendor: 2,
          price: 0.96,
          weight: 0.68,
          description: 'description 2',
          thumbnail: 'thumbnail 2',
          image: 'image 2',
          category: 2,
          creationDate: '2024-04-19T10:25:58.192Z',
          stock: 2,
          id: 50,
        },
        {
          productName: 'productName 3',
          vendor: 3,
          price: 0.21,
          weight: 0.87,
          description: 'description 3',
          thumbnail: 'thumbnail 3',
          image: 'image 3',
          category: 3,
          creationDate: '2024-03-23T02:25:35.313Z',
          stock: 3,
          id: 15,
        },
        {
          productName: 'productName 4',
          vendor: 4,
          price: 0.89,
          weight: 0.05,
          description: 'description 4',
          thumbnail: 'thumbnail 4',
          image: 'image 4',
          category: 4,
          creationDate: '2024-03-31T12:40:41.793Z',
          stock: 4,
          id: 78,
        },
        {
          productName: 'productName 5',
          vendor: 5,
          price: 0.34,
          weight: 0.76,
          description: 'description 5',
          thumbnail: 'thumbnail 5',
          image: 'image 5',
          category: 5,
          creationDate: '2024-03-06T19:10:50.745Z',
          stock: 5,
          id: 16,
        },
      ],
      ProductCategories: [
        { category: 'category 1', id: 80 },
        { category: 'category 2', id: 84 },
        { category: 'category 3', id: 76 },
        { category: 'category 4', id: 79 },
        { category: 'category 5', id: 83 },
      ],
      Discounts: [
        {
          product: 1,
          discountType: 'discountType 1',
          description: 'description 1',
          discountAmount: 0.29,
          discountPercent: 0.89,
          id: 1,
        },
        {
          product: 2,
          discountType: 'discountType 2',
          description: 'description 2',
          discountAmount: 0.99,
          discountPercent: 0.02,
          id: 59,
        },
        {
          product: 3,
          discountType: 'discountType 3',
          description: 'description 3',
          discountAmount: 0.36,
          discountPercent: 0.3,
          id: 70,
        },
        {
          product: 4,
          discountType: 'discountType 4',
          description: 'description 4',
          discountAmount: 0.89,
          discountPercent: 0.86,
          id: 2,
        },
        {
          product: 5,
          discountType: 'discountType 5',
          description: 'description 5',
          discountAmount: 0.59,
          discountPercent: 0.51,
          id: 16,
        },
      ],
      ShoppingCart: [
        { customer: 1, product: 1, priceAtPurchase: 0.4, quantity: 1, id: 41 },
        { customer: 2, product: 2, priceAtPurchase: 0.38, quantity: 2, id: 15 },
        { customer: 3, product: 3, priceAtPurchase: 0.34, quantity: 3, id: 53 },
        { customer: 4, product: 4, priceAtPurchase: 0.09, quantity: 4, id: 16 },
        { customer: 5, product: 5, priceAtPurchase: 0.35, quantity: 5, id: 78 },
      ],
      Orders: [
        {
          orderNumber: 'orderNumber 1',
          customer: 1,
          totalAmount: 0.06,
          vat: 0.58,
          totalAmountWithVat: 0.16,
          shippingCost: 0.73,
          shippingAddress: 'shippingAddress 1',
          orderAddress: 'orderAddress 1',
          orderEmail: 'orderEmail 1',
          orderDate: '2024-10-09T13:43:27.111Z',
          orderStatus: 'orderStatus 1',
          trackingNo: 'trackingNo 1',
          id: 41,
        },
        {
          orderNumber: 'orderNumber 2',
          customer: 2,
          totalAmount: 0.79,
          vat: 1,
          totalAmountWithVat: 0.44,
          shippingCost: 0.65,
          shippingAddress: 'shippingAddress 2',
          orderAddress: 'orderAddress 2',
          orderEmail: 'orderEmail 2',
          orderDate: '2023-10-31T15:35:47.984Z',
          orderStatus: 'orderStatus 2',
          trackingNo: 'trackingNo 2',
          id: 25,
        },
        {
          orderNumber: 'orderNumber 3',
          customer: 3,
          totalAmount: 0.94,
          vat: 0.06,
          totalAmountWithVat: 0.45,
          shippingCost: 0.99,
          shippingAddress: 'shippingAddress 3',
          orderAddress: 'orderAddress 3',
          orderEmail: 'orderEmail 3',
          orderDate: '2023-07-27T23:37:07.089Z',
          orderStatus: 'orderStatus 3',
          trackingNo: 'trackingNo 3',
          id: 33,
        },
        {
          orderNumber: 'orderNumber 4',
          customer: 4,
          totalAmount: 0.39,
          vat: 0.58,
          totalAmountWithVat: 0,
          shippingCost: 0.4,
          shippingAddress: 'shippingAddress 4',
          orderAddress: 'orderAddress 4',
          orderEmail: 'orderEmail 4',
          orderDate: '2024-04-08T04:30:22.634Z',
          orderStatus: 'orderStatus 4',
          trackingNo: 'trackingNo 4',
          id: 48,
        },
        {
          orderNumber: 'orderNumber 5',
          customer: 5,
          totalAmount: 0.08,
          vat: 0.74,
          totalAmountWithVat: 0.35,
          shippingCost: 0.27,
          shippingAddress: 'shippingAddress 5',
          orderAddress: 'orderAddress 5',
          orderEmail: 'orderEmail 5',
          orderDate: '2024-10-10T10:01:36.059Z',
          orderStatus: 'orderStatus 5',
          trackingNo: 'trackingNo 5',
          id: 90,
        },
      ],
      OrderDetails: [
        {
          orderNumber: 1,
          line: 1,
          product: 1,
          price: 0.7,
          quantity: 1,
          id: 11,
        },
        {
          orderNumber: 2,
          line: 2,
          product: 2,
          price: 0.44,
          quantity: 2,
          id: 19,
        },
        {
          orderNumber: 3,
          line: 3,
          product: 3,
          price: 0.26,
          quantity: 3,
          id: 36,
        },
        {
          orderNumber: 4,
          line: 4,
          product: 4,
          price: 0.02,
          quantity: 4,
          id: 18,
        },
        {
          orderNumber: 5,
          line: 5,
          product: 5,
          price: 0.11,
          quantity: 5,
          id: 64,
        },
      ],
      Payments: [
        {
          orderNumber: 1,
          amount: 0.64,
          paymentMethod: 'paymentMethod 1',
          paymentDate: '2023-10-16T15:40:10.989Z',
          paymentStatus: 'paymentStatus 1',
          id: 79,
        },
        {
          orderNumber: 2,
          amount: 0.97,
          paymentMethod: 'paymentMethod 2',
          paymentDate: '2024-08-12T17:18:13.119Z',
          paymentStatus: 'paymentStatus 2',
          id: 57,
        },
        {
          orderNumber: 3,
          amount: 0.16,
          paymentMethod: 'paymentMethod 3',
          paymentDate: '2025-02-02T11:32:28.208Z',
          paymentStatus: 'paymentStatus 3',
          id: 76,
        },
        {
          orderNumber: 4,
          amount: 0.43,
          paymentMethod: 'paymentMethod 4',
          paymentDate: '2024-03-19T11:35:04.722Z',
          paymentStatus: 'paymentStatus 4',
          id: 45,
        },
        {
          orderNumber: 5,
          amount: 0.97,
          paymentMethod: 'paymentMethod 5',
          paymentDate: '2023-06-30T18:58:00.307Z',
          paymentStatus: 'paymentStatus 5',
          id: 9,
        },
      ],
      Reviews: [
        {
          product: 1,
          customer: 1,
          vendor: 1,
          rating: 0.48,
          reviewDetails: 'reviewDetails 1',
          date: '2024-10-05T18:00:08.080Z',
          id: 0,
        },
        {
          product: 2,
          customer: 2,
          vendor: 2,
          rating: 0.29,
          reviewDetails: 'reviewDetails 2',
          date: '2023-04-28T23:23:53.960Z',
          id: 15,
        },
        {
          product: 3,
          customer: 3,
          vendor: 3,
          rating: 0.4,
          reviewDetails: 'reviewDetails 3',
          date: '2025-02-05T05:48:41.943Z',
          id: 96,
        },
        {
          product: 4,
          customer: 4,
          vendor: 4,
          rating: 0.45,
          reviewDetails: 'reviewDetails 4',
          date: '2025-01-08T21:34:26.317Z',
          id: 73,
        },
        {
          product: 5,
          customer: 5,
          vendor: 5,
          rating: 0.05,
          reviewDetails: 'reviewDetails 5',
          date: '2023-05-31T19:28:15.036Z',
          id: 31,
        },
      ],
      SupportTickets: [
        {
          user: 1,
          customer: 1,
          description: 'description 1',
          status: 'status 1',
          creationDate: '2023-09-14T15:25:44.760Z',
          resolutionDate: '2023-06-30T13:27:13.328Z',
          id: 10,
        },
        {
          user: 2,
          customer: 2,
          description: 'description 2',
          status: 'status 2',
          creationDate: '2023-08-03T13:59:39.093Z',
          resolutionDate: '2024-06-01T22:38:39.883Z',
          id: 77,
        },
        {
          user: 3,
          customer: 3,
          description: 'description 3',
          status: 'status 3',
          creationDate: '2023-04-27T06:06:23.094Z',
          resolutionDate: '2023-06-30T01:35:50.587Z',
          id: 30,
        },
        {
          user: 4,
          customer: 4,
          description: 'description 4',
          status: 'status 4',
          creationDate: '2024-05-22T07:01:07.725Z',
          resolutionDate: '2024-12-10T21:05:47.683Z',
          id: 3,
        },
        {
          user: 5,
          customer: 5,
          description: 'description 5',
          status: 'status 5',
          creationDate: '2023-11-03T21:22:41.557Z',
          resolutionDate: '2024-04-03T13:50:59.375Z',
          id: 39,
        },
      ],
    };
    //Autogenerate multiple such calls ie for each resource and its data object
    let isSeeded = await this.IsSeeded();
    //if (!isSeeded) {
    //forcing app recreation
    if (true) {
      console.log('   Seeding database...');
      await this.SeedResource('UsersEntity', data.Users);
      await this.SeedResource('VendorsEntity', data.Vendors);
      await this.SeedResource('CustomersEntity', data.Customers);
      await this.SeedResource('InventoryEntity', data.Inventory);
      await this.SeedResource('ProductsEntity', data.Products);
      await this.SeedResource(
        'ProductCategoriesEntity',
        data.ProductCategories,
      );
      await this.SeedResource('DiscountsEntity', data.Discounts);
      await this.SeedResource('ShoppingCartEntity', data.ShoppingCart);
      await this.SeedResource('OrdersEntity', data.Orders);
      await this.SeedResource('OrderDetailsEntity', data.OrderDetails);
      await this.SeedResource('PaymentsEntity', data.Payments);
      await this.SeedResource('ReviewsEntity', data.Reviews);
      await this.SeedResource('SupportTicketsEntity', data.SupportTickets);
      await this.SeedResource('SettingsEntity', {
        settingname: 'isSeeded',
        settingvalue: 'true',
      });
    } else {
      console.log('   Database seeded already!');
    }
  }
  static async IsSeeded() {
    const repo = Database.ds.getRepository('SettingsEntity');
    let rec: any = await repo.findOne({
      select: {
        settingname: true,
        settingvalue: true,
      },
      where: {
        settingname: 'isSeeded',
      },
    });
    if (rec && rec.settingvalue) return true;
    return false;
  }
  static async SeedResource(resourceName: any, resourceData: any) {
    const repo = Database.ds.getRepository(resourceName);
    //await repo.clear();
    console.log('   Seeding table ' + resourceName);
    await repo.upsert(resourceData, ['id']);
  }
}
