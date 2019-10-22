// External Modules
const expect = require('chai').expect;

// Main Module
const PodProductService = require('../lib/main');

let apiToken = 'API TOKEN'; // API TOKEN
let podProduct = new PodProductService({
  apiToken: apiToken
});

// #1
describe('Method: addProduct', function () {
  this.timeout(10000);
  let addProductData = {
    // ------ REQUIRED ------
    name: 'NAME1t2',
    canComment: true,
    canLike: true,
    enable: true,
    availableCount: 100,
    price: 100,
    discount: 20,

    // ------ OPTIONAL ------
    parentProductId: 24274,
    // description: 'DESCRIPTION',
    // uniqueId: 'UNIQUE ID',
    metadata: { meta1: 'meta1' },
    // businessId: 0 // needs admin access
    // unlimited: true,
    guildCode: 'INFORMATION_TECHNOLOGY_GUILD',
    allowUserInvoice: false,
    allowUserPrice: false,
    currencyCode: 'IRR', // no server check
    attTemplateCode: 'پیراهن مردانه',
    attributes: [
      { attCode: 'gender', attValue: 'مردانه', attGroup: false },
      { attCode: 'color', attValue: 'سیاه', attGroup: false },
      { attCode: 'size', attValue: '32', attGroup: false }
    ],
    lat: 32,
    lng: 25.2565,
    tags: ['tags1', 'tags2'],
    content: 'SECRET CONTENT',
    previewImage: 'WHAT IS THIS',
    tagTrees: ['tagTree1', 'tagTree2'],
    tagTreeCategoryName: 'TAG TREE CATEGORY NAME', // When tagTrees is given this has to be present
    preferredTaxRate: 0.02,
    quantityPrecision: 3
  };
  it('correct request', function (done) {
    podProduct.addProduct(addProductData)
      .then(function (result) {
        console.log(JSON.stringify(result, null, 2));
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #2
describe('Method: addProducts', function () {
  this.timeout(10000);
  let addProductsData = {};
  addProductsData.data = require('./addProducts.json');
  it('correct request', function (done) {
    podProduct.addProducts(addProductsData)
      .then(function (result) {
        console.log(JSON.stringify(result, null, 2));
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #3
describe.only('Method: updateProduct', function () {
  this.timeout(10000);
  let updateProductData = {
    // ------ REQUIRED ------
    name: 'NAME',
    description: 'DESCRIPTION',
    canComment: true,
    canLike: true,
    enable: true,
    entityId: 24274,
    price: 0,
    discount: 0,
    changePreview: false,
    // availableCount: 258, // required when unlimited is not true

    // ------ OPTIONAL ------
    // version: 2545,
    metadata: {},
    // unlimited: true,
    categories: [],
    guildCode: 'INFORMATION_TECHNOLOGY_GUILD',
    allowUserInvoice: false,
    allowUserPrice: false,
    attTemplateCode: 'پیراهن مردانه',
    attributes: [
      { attCode: 'gender', attValue: 'WRRRRRRRRRRRRWWWWWWWWمردانه', attGroup: false },
      { attCode: 'color', attValue: 'سیاه', attGroup: false },
      { attCode: 'size', attValue: '32', attGroup: false }
    ],
    // groupId: 0,
    lat: 0,
    lng: 0,
    tags: [],
    content: 'CONTENT',
    previewImage: 'YOUR IMAGE ADDRESS',
    tagTrees: [],
    tagTreeCategoryName: '',
    preferredTaxRate: 0,
    quantityPrecision: 0
  };

  it('correct request', function (done) {
    podProduct.updateProduct(updateProductData)
      .then(function (result) {
        console.log(JSON.stringify(result, null, 2));
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #4
describe('Method: updateProducts', function () {
  this.timeout(10000);

  let updateProductsData = {};
  updateProductsData.data = require('./updateProducts.json');

  it('correct request', function (done) {
    podProduct.updateProducts(updateProductsData)
      .then(function (result) {
        console.log(JSON.stringify(result, null, 2));
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #5
describe('Method: getProductList', function () {
  this.timeout(10000);
  let productListData = {
    // ------ REQUIRED ------

    // ------ ONE OF THESE ARE REQUIRED ------
    offset: 0
    // firstId: 0
    // lastId: 2,

    // ------ OPTIONAL ------
    // size: 5,
    // businessId: 3605,
    // id: [],
    // uniqueId: ['UNIQUE ID1']
    // categoryCode: [],
    // guildCode: ['TOILETRIES_GUILD'],
    // currencyCode: 'CURRENCY CODE',
    // attributeTemplateCode: 'ATTRIBUTE TEMPLATE CODE',
    // attributes: [],
    // orderByLike: 'asc',
    // orderByPrice: 'asc',
    // orderBySale: 'asc',
    // tags: [],
    // tagTrees: []
  };

  it('correct request', function (done) {
    podProduct.getProductList(productListData)
      .then(function (result) {
        console.log(JSON.stringify(result, null, 2));
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #6
describe('Method: getBusinessProductList', function () {
  this.timeout(20000);
  let businessProductListData = {
    // ------ REQUIRED ------

    // ------ ONE OF THESE ARE REQUIRED ------
    offset: 0
    // firstId: 0,
    // lastId: 2,

    // ------ OPTIONAL ------
    // size: 2
    // businessId: 0,
    // id: 0,
    // uniqueId: 0,
    // categoryCode: [],
    // guildCode: ['GUILD CODE'],
    // currencyCode: 'CURRENCY CODE',
    // firstId: 0,
    // lastId: 0,
    // attributeTemplateCode: 'ATTRIBUTE TEMPLATE CODE',
    // attributes: {},
    // orderByLike: 'asc',
    // orderByPrice: 'asc',
    // orderBySale: 'asc',
    // tags: [],
    // tagTrees: [],
    // scope: 'PARENT_PRODUCT', // 'BUSINESS_PRODUCT' | 'DEALER_PRODUCT_PERMISSION',
    // attributeSearchQuery: {},
    // scVoucherHash: [],
    // scApiKey: 'SC API KEY'
  };

  it('correct request', function (done) {
    podProduct.getBusinessProductList(businessProductListData)
      .then(function (result) {
        console.log(JSON.stringify(result, null, 2));
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #7
describe('Method: getAttributeTemplateList', function () {
  this.timeout(10000);
  let getAttributeTemplateListData = {
    // ------ REQUIRED ------
    size: 2,
    offset: 0

    // ------ OPTIONAL ------
    // guildCode: ['GUILD CODE 1', 'GUILD CODE 2'],
    // firstId: 0,
    // lastId: 0,
    // offset: 0
  };

  it('correct request', function (done) {
    podProduct.getAttributeTemplateList(getAttributeTemplateListData)
      .then(function (result) {
        console.log(JSON.stringify(result, null, 2));
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('ott');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #8
describe('Method: searchProduct', function () {
  this.timeout(10000);
  let searchProductData = {
    // ------ REQUIRED ------

    // ------ OPTIONAL ------
    size: 2,
    // offset: 0,

    // ------ OPTIONAL ------
    query: 'QUERY',
    id: [24274],
    uniqueId: [],
    businessId: 0,
    categoryCodes: [],
    guildCode: [],
    currencyCode: 'CURRENCY CODE',
    // firstId: 0,
    // lastId: 20,
    attributeTemplateCode: 'ATTRIBUTE TEBPLATE CODE',
    attributes: [],
    // orderByLike: 'asc', // desc
    // orderByPrice: 'asc', // desc
    orderBySale: 'asc', // desc
    tags: [],
    tagTrees: []
  };

  it('correct request', function (done) {
    podProduct.searchProduct(searchProductData)
      .then(function (result) {
        console.log(JSON.stringify(result, null, 2));
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(error);
        done(new Error());
      });
  });
});

// #9
describe('Method: addSubProduct', function () {
  this.timeout(10000);
  let addProductData = {
    // ------ REQUIRED ------
    name: 'NAME',
    availableCount: 100,
    price: 100,
    discount: 20,

    // ------ OPTIONAL ------
    parentProductId: 24274,
    description: 'DESCRIPTION',
    // uniqueId: 'UNIQUE ID',
    metadata: { meta1: 'meta1' },
    // businessId: 0 // needs admin access
    // unlimited: true,
    guildCode: 'INFORMATION_TECHNOLOGY_GUILD',
    allowUserInvoice: false,
    allowUserPrice: false,
    currencyCode: 'IRR', // no server check
    attTemplateCode: 'پیراهن مردانه',
    attributes: [
      { attCode: 'gender', attValue: 'مردانه', attGroup: false },
      { attCode: 'color', attValue: 'سیاه', attGroup: false },
      { attCode: 'size', attValue: '32', attGroup: false }
    ],
    groupId: 941,
    lat: 32,
    lng: 25.2565,
    tags: ['tags1', 'tags2'],
    content: 'SECRET CONTENT',
    previewImage: 'WHAT IS THIS',
    tagTrees: ['tagTree1', 'tagTree2'],
    tagTreeCategoryName: 'TAG TREE CATEGORY NAME', // When tagTrees is given this has to be present
    preferredTaxRate: 0.02,
    quantityPrecision: 3
  };
  it('correct request', function (done) {
    podProduct.addSubProduct(addProductData)
      .then(function (result) {
        console.log(JSON.stringify(result, null, 2));
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log(JSON.stringify(error, null, 2));
        done(new Error());
      });
  });
});

// #10
describe('Method: searchSubProduct', function () {
  this.timeout(10000);
  let searchSubProductData = {
    // ------ REQUIRED ------
    productGroupId: [941]

    // ------ OPTIONAL ------
    // query: 'QUERY',
    // offset: 0,
    // size: 1,
    // attributes: [{attributeCode: 'CODE', attributeValue: 'VALUE'}, {attributeCode: 'CODE', attributeValue: 'VALUE'}],
    // orderByLike: 'asc', // desc
    // orderByAttributeCode: 'asc', // desc
    // orderByDirection: 'asc', // desc
    // tags: ['TAG#1', ''TAG#2'],
    // tagTrees: ['TAGTREE#2', 'TAGTREE#2']
  };

  it('correct request', function (done) {
    podProduct.searchSubProduct(searchSubProductData)
      .then(function (result) {
        console.log('##############################', JSON.stringify(result, null, 2));
        expect(result).to.have.property('hasError', false);
        expect(result).to.have.property('result');
        done();
      })
      .catch(function (error) {
        console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!', error);
        done(new Error());
      });
  });
});
