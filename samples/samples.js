const PodProductService = require('pod-common-service');

// Variable Declaration & Initialization
let podProduct = new PodProductService({
  apiToken: 'API TOKEN'
});

// *****************************************************************
// #1
// function: addProduct
let addProductData = {
  // ------ REQUIRED ------
  name: 'NAME',
  canComment: true, // true | false
  canLike: true, //  true | false
  enable: true, //  true | false
  availableCount: 0,
  price: 0,
  discount: 0

  // ------ OPTIONAL ------
  // parentProductId: 0,
  // description: 'DESCRIPTION',
  // uniqueId: 'UNIQUE ID',
  // metadata: { meta1: 'META1' },
  // businessId: 0 // needs admin access
  // unlimited:  true | false,
  // guildCode: 'GUILD CODE',
  // allowUserInvoice: true | false,
  // allowUserPrice: true | false,
  // currencyCode: 'CURRENCY CODE', // no server check
  // attTemplateCode: 'TEMPLATE CODE',
  // attributes: [
  //  { attCode: 'ATT CODE', attValue: 'ATT VALUE', attGroup: true |false },
  //  { attCode: 'ATT CODE', attValue: 'ATT VALUE', attGroup: true |false },
  // ],
  // lat: 0,
  // lng: 0,
  // tags: ['TAG 1', 'TAG 2'],
  // content: 'SECRET CONTENT',
  // previewImage: 'IMAGE ADDRESS',
  // tagTrees: ['TAG TREE 1', 'TAG TREE 2'],
  // tagTreeCategoryName: 'TAG TREE CATEGORY NAME', // When tagTrees is given this has to be present
  // preferredTaxRate: 0,
  // quantityPrecision: 0
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiToken: 'SC API TOKEN'
};

podProduct.addProduct(addProductData)
  .then(function (result) {
    console.log('function: addProduct ============>', JSON.stringify(result, null, 2));
  })
  .catch(function (error) {
    console.log('error addProduct ============>', error);
  });

// *****************************************************************
// #2
// function: addProducts
let addProductsData = {
  // ------ OPTIONAL -----
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiToken: 'SC API TOKEN'
};
addProductsData.data = require('./YOURJSONFILE.json');

podProduct.addProducts(addProductsData)
  .then(function (result) {
    console.log('function: addProducts ============>', JSON.stringify(result, null, 2));
  })
  .catch(function (error) {
    console.log('error addProducts ============>', error);
  });

// *****************************************************************
// #3
// function: updateProduct
let updateProductData = {
  // ------ REQUIRED ------
  name: 'NAME',
  description: 'DESCRIPTION',
  canComment: true, // true | false
  canLike: true, // true | false
  enable: true, // true | false
  entityId: 0,
  price: 0,
  discount: 0,
  changePreview: false // true | false
  // availableCount: 0, // required when unlimited is not true

  // ------ OPTIONAL ------
  // version: 0,
  // metadata: {META1: 'META1'},
  // unlimited: true | false,
  // categories: [CATEGORY 1, CATEGORY 2],
  // guildCode: 'GUILD CODE',
  // allowUserInvoice: true | false,
  // allowUserPrice: true | false,
  // attTemplateCode: 'پیراهن مردانه',
  // attTemplateCode: 'TEMPLATE CODE',
  // attributes: [
  //  { attCode: 'ATT CODE', attValue: 'ATT VALUE', attGroup: true |false },
  //  { attCode: 'ATT CODE', attValue: 'ATT VALUE', attGroup: true |false },
  // ],
  // groupId: 0,
  // lat: 0,
  // lng: 0,
  // tags: ['TAG 1', 'TAG 2'],
  // content: 'SECRET CONTENT',
  // previewImage: 'YOUR IMAGE ADDRESS',
  // tagTrees: [],
  // tagTreeCategoryName: '',
  // preferredTaxRate: 0,
  // quantityPrecision: 0
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiToken: 'SC API TOKEN'
};

podProduct.updateProduct(updateProductData)
  .then(function (result) {
    console.log('function: updateProduct ============>', JSON.stringify(result, null, 2));
  })
  .catch(function (error) {
    console.log('error updateProduct ============>', error);
  });

// *****************************************************************
// #4
// function: updateProducts
let updateProductsData = {};
updateProductsData.data = require('./YOURJSONFILE.json');

podProduct.updateProducts(updateProductsData)
  .then(function (result) {
    console.log('function: updateProducts ============>', JSON.stringify(result, null, 2));
  })
  .catch(function (error) {
    console.log('error updateProducts ============>', error);
  });

// *****************************************************************
// #5
// function: getProductList
let getProductListData = {
  // ------ REQUIRED ------

  // ------ ONE OF THESE ARE REQUIRED ------
  offset: 0
  // firstId: 0
  // lastId: 2,

  // ------ OPTIONAL ------
  // size: 0,
  // businessId: 0,
  // id: [],
  // uniqueId: ['UNIQUE ID 1'و 'UNIQUE ID 2']
  // categoryCode: [],
  // guildCode: ['GUILD CODE'],
  // currencyCode: 'CURRENCY CODE',
  // attributeTemplateCode: 'ATTRIBUTE TEMPLATE CODE',
  // attributes: [],
  // orderByLike: 'asc' // asc | desc,
  // orderByPrice: 'asc' // asc | desc,
  // orderBySale: 'asc' // asc | desc,
  // tags: ['TAG 1', 'TAG 2'],
  // tagTrees: ['TAG TREE 1', 'TAG TREE 2']
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiToken: 'SC API TOKEN'
};

podProduct.getProductList(getProductListData)
  .then(function (result) {
    console.log('function: getProductList ============>', JSON.stringify(result, null, 2));
  })
  .catch(function (error) {
    console.log('error getProductList ============>', error);
  });

// *****************************************************************
// #6
// function: getBusinessProductList
let getBusinessProductListData = {
  // ------ REQUIRED ------

  // ------ ONE OF THESE ARE REQUIRED ------
  offset: 0
  // firstId: 0,
  // lastId: 2,

  // ------ OPTIONAL ------
  // size: 0
  // businessId: 0,
  // id: 0,
  // uniqueId: 0,
  // categoryCode: ['CATEGORY CODE'],
  // guildCode: ['GUILD CODE'],
  // currencyCode: 'CURRENCY CODE',
  // attributeTemplateCode: 'ATTRIBUTE TEMPLATE CODE',
  // attributes: {},
  // orderByLike: 'asc', // asc | desc,
  // orderByPrice: 'asc', // asc | desc,
  // orderBySale: 'asc', // asc | desc,
  // tags: ['TAG 1', 'TAG 2'],
  // tagTrees: ['TREE', 'TREE'],
  // scope: 'PARENT_PRODUCT', // 'BUSINESS_PRODUCT' | 'DEALER_PRODUCT_PERMISSION',
  // attributeSearchQuery: {},
  // scVoucherHash: ['HASH1', 'HASH2'],
  // scApiKey: 'SC API KEY'
  // scApiToken: 'SC API TOKEN'
};

podProduct.getBusinessProductList(getBusinessProductListData)
  .then(function (result) {
    console.log('function: getBusinessProductList ============>', JSON.stringify(result, null, 2));
  })
  .catch(function (error) {
    console.log('error getBusinessProductList ============>', error);
  });

// *****************************************************************
// #7
// function: getAttributeTemplateList
let getAttributeTemplateListData = {
  // ------ REQUIRED ------

  // ------ ONE OF THESE ARE REQUIRED ------
  offset: 0
  // firstId: 0
  // lastId: 2,

  // ------ OPTIONAL ------
  // guildCode: ['GUILD CODE 1', 'GUILD CODE 2']
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiToken: 'SC API TOKEN'
};
podProduct.getAttributeTemplateList(getAttributeTemplateListData)
  .then(function (result) {
    console.log('function: getAttributeTemplateList ============>', JSON.stringify(result, null, 2));
  })
  .catch(function (error) {
    console.log('error getAttributeTemplateList ============>', error);
  });

// *****************************************************************
// #8
// function: searchProduct
let searchProductData = {

  // ------ REQUIRED ------

  // ------ ONE OF THESE ARE REQUIRED ------
  offset: 0
  // firstId: 0
  // lastId: 2,

  // ------ OPTIONAL ------
  // query: 'QUERY',
  // id: [0, 0],
  // uniqueId: [],
  // businessId: 0,
  // categoryCodes: [],
  // guildCode: [],
  // currencyCode: 'CURRENCY CODE',
  // attributeTemplateCode: 'ATTRIBUTE TEBPLATE CODE',
  // attributes: [],
  // orderByLike: 'asc', // asc | desc
  // orderByPrice: 'asc', // asc | desc
  // orderBySale: 'asc', // asc | desc
  // tags: ['TAG1', 'TAG2'],
  // tagTrees: ['Tree1', 'Tree2']
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiToken: 'SC API TOKEN'
};

podProduct.searchProduct(searchProductData)
  .then(function (result) {
    console.log('function: searchProduct ============>', JSON.stringify(result, null, 2));
  })
  .catch(function (error) {
    console.log('error searchProduct ============>', error);
  });

// *****************************************************************
// #9
// function: searchProduct
let addSubProductData = {
  // ------ REQUIRED ------
  name: 'NAME',
  availableCount: 0,
  price: 0,
  discount: 0,

  // ------ OPTIONAL ------
  parentProductId: 0,
  description: 'DESCRIPTION',
  // uniqueId: 'UNIQUE ID',
  metadata: { META1: 'META1' },
  // businessId: 0 // needs admin access
  // unlimited: true,
  guildCode: 'GUILD CODE',
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
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiToken: 'SC API TOKEN'
};

podProduct.addSubProduct(addSubProductData)
  .then(function (result) {
    console.log('function: addSubProduct ============>', JSON.stringify(result, null, 2));
  })
  .catch(function (error) {
    console.log('error addSubProduct ============>', error);
  });

// *****************************************************************
// #10
// function: searchSubProduct
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
  // scVoucherHash: ['HASH#1', 'HASH#2']
  // token: 'API TOKEN'
  // tokenIssuer: 0 | 1
  // scApiToken: 'SC API TOKEN'
};
podProduct.searchSubProduct(searchSubProductData)
  .then(function (result) {
    console.log('function: searchSubProduct ============>', JSON.stringify(result, null, 2));
  })
  .catch(function (error) {
    console.log('error searchSubProduct ============>', error);
  });
