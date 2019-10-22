/**
 * @namespace podProductService
 */

// POD Modules
const PodBaseService = require('pod-base-service');
const utils = require('pod-utilities');

// Project Modules
const schemas = require('./schemas');
const apiUrls = require('./urls');
const products = require('./products');

/**
 * podProductService
 * @memberOf podProductService
 */
class PodProductService extends PodBaseService {
  /**
   * @description This is the class constructor
   * @param {confObj} confObj
   */
  constructor (confObj) {
    if (!confObj) {
      confObj = {};
    }
    super(schemas, apiUrls, confObj, 'pod-product-service', true);
    this.clientInfo = {};
    this.clientInfo.apiToken = confObj.apiToken;
    this.clientInfo.tokenIssuer = confObj.tokenIssuer;
  }

  // #1 API Token
  /**
   * @description This function adds a new product
   * @param {addProductObj} data
   * @returns {Promise}
   */
  addProduct (data) {
    let apiName = 'addProduct';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.hasOwnProperty('attributes')) {
      data.attCode = [];
      data.attValue = [];
      data.attGroup = [];
      for (let i = 0; i < data.attributes.length; i++) {
        data.attCode.push(data.attributes[i].attCode);
        data.attValue.push(data.attributes[i].attValue);
        data.attGroup.push(data.attributes[i].attGroup);
      }
      delete data.attributes;
    }

    if (data.hasOwnProperty('tags') && Array.isArray(data.tags)) {
      data.tags = data.tags.join(',');
    }

    if (data.hasOwnProperty('tagTrees') && Array.isArray(data.tagTrees)) {
      data.tagTrees = data.tagTrees.join(',');
    }

    if (data.hasOwnProperty('metadata')) {
      data.metadata = JSON.stringify(data.metadata);
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers['Content-Type'] = 'application/x-www-form-urlencoded';
    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;

    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, { attCode: true, attValue: true, attGroup: true }, true);
  }

  // #2 API Token
  /**
   * @description This function adds more than one product
   * @param {addProductsObj} data
   * @returns {Promise}
   */
  addProducts (data) {
    let apiName = 'addProducts';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    for (let i = 0; i < data.data.length; i++) {
      if (data.data[i].hasOwnProperty('attributes')) {
        data.data[i].attCode = [];
        data.data[i].attValue = [];
        data.data[i].attGroup = [];
        for (let j = 0; j < data.data[i].attributes.length; j++) {
          data.data[i].attCode.push(data.data[i].attributes[j].attCode);
          data.data[i].attValue.push(data.data[i].attributes[j].attValue);
          data.data[i].attGroup.push(data.data[i].attributes[j].attGroup);
        }
        delete data.data[i].attributes;
      }

      if (data.data[i].hasOwnProperty('tags') && Array.isArray(data.data[i].tags)) {
        data.data[i].tags = data.data[i].tags.join(',');
      }

      if (data.data[i].hasOwnProperty('tagTrees') && Array.isArray(data.data[i].tagTrees)) {
        data.data[i].tagTrees = data.data[i].tagTrees.join(',');
      }

      if (data.data[i].hasOwnProperty('metadata')) {
        data.data[i].metadata = JSON.stringify(data.data[i].metadata);
      }
    }

    data.data = JSON.stringify(data.data);

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;

    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, {}, true);
  }

  // #3 API Token updates the given product information
  /**
   * @description This function
   * @param {updateProductObj} data
   * @returns {Promise}
   */
  updateProduct (data) {
    let apiName = 'updateProduct';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.hasOwnProperty('attributes')) {
      data.attCode = [];
      data.attValue = [];
      data.attGroup = [];
      for (let i = 0; i < data.attributes.length; i++) {
        data.attCode.push(data.attributes[i].attCode);
        data.attValue.push(data.attributes[i].attValue);
        data.attGroup.push(data.attributes[i].attGroup);
      }
      delete data.attributes;
    }

    if (data.hasOwnProperty('tags') && Array.isArray(data.tags)) {
      data.tags = data.tags.join(',');
    }

    if (data.hasOwnProperty('tagTrees') && Array.isArray(data.tagTrees)) {
      data.tagTrees = data.tagTrees.join(',');
    }

    if (data.hasOwnProperty('metadata')) {
      data.metadata = JSON.stringify(data.metadata);
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;

    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, { categories: true, attValue: true, attCode: true, attGroup: true }, true);
  }

  // #4 API Token
  /**
   * @description This function updates more than one product
   * @param {updateProductsObj} data
   * @returns {Promise}
   */
  updateProducts (data) {
    let apiName = 'updateProducts';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    for (let i = 0; i < data.data.length; i++) {
      if (data.data[i].hasOwnProperty('attributes')) {
        data.data[i].attCode = [];
        data.data[i].attValue = [];
        data.data[i].attGroup = [];
        for (let j = 0; j < data.data[i].attributes.length; j++) {
          data.data[i].attCode.push(data.data[i].attributes[j].attCode);
          data.data[i].attValue.push(data.data[i].attributes[j].attValue);
          data.data[i].attGroup.push(data.data[i].attributes[j].attGroup);
        }
        delete data.data[i].attributes;
      }

      if (data.data[i].hasOwnProperty('tags') && Array.isArray(data.data[i].tags)) {
        data.data[i].tags = data.data[i].tags.join(',');
      }

      if (data.data[i].hasOwnProperty('tagTrees') && Array.isArray(data.data[i].tagTrees)) {
        data.data[i].tagTrees = data.data[i].tagTrees.join(',');
      }

      if (data.data[i].hasOwnProperty('metadata')) {
        data.data[i].metadata = JSON.stringify(data.data[i].metadata);
      }
    }

    data.data = JSON.stringify(data.data);

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;

    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, {}, true);
  }

  // #5 API Token | Access Token
  /**
   * @description This function returns the product list
   * @param {productListObj} data
   * @returns {Promise}
   */
  getProductList (data) {
    let apiName = 'productList';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.hasOwnProperty('attributes')) {
      data.attributeCode = [];
      data.attributeValue = [];
      for (let i = 0; i < data.attributes.length; i++) {
        data.attributeCode.push(data.attributes[i].attributeCode);
        data.attributeValue.push(data.attributes[i].attributeValue);
      }
      delete data.attributes;
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;

    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, { attributeCode: true, attributeValue: true }, true);
  }

  // #6 API Token
  /**
   * @description This function returns the product list
   * @param {businessProductListObj} data
   * @returns {Promise}
   */
  getBusinessProductList (data) {
    let apiName = 'businessProductList';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.hasOwnProperty('attributes')) {
      data.attributeCode = [];
      data.attributeValue = [];
      for (let i = 0; i < data.attributes.length; i++) {
        data.attributeCode.push(data.attributes[i].attributeCode);
        data.attributeValue.push(data.attributes[i].attributeValue);
      }
      delete data.attributes;
    }

    if (data.hasOwnProperty('scVoucherHash')) {
      headers.scVoucherHash = data.scVoucherHash;
      delete data.scVoucherHash;
    }
    if (data.hasOwnProperty('scApiKey')) {
      headers.scApiKey = data.scApiKey;
      delete data.scApiKey;
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;

    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, { attributeCode: true, attributeValue: true }, true);
  }

  // #7 API Token | Access Token
  /**
   * @description This function returns the attributes of a given template
   * @param {attributeTemplateListObj} data
   * @returns {Promise}
   */
  getAttributeTemplateList (data) {
    let apiName = 'attributeTemplateList';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;

    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, {}, true);
  }

  // #8 API Token | Access Token
  /**
   * @description This function searches the products
   * @param {searchProductObj} data
   * @returns {Promise}
   */
  searchProduct (data) {
    let apiName = 'searchProduct';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.hasOwnProperty('attributes')) {
      data.attributeCode = [];
      data.attributeValue = [];
      for (let i = 0; i < data.attributes.length; i++) {
        data.attributeCode.push(data.attributes[i].attributeCode);
        data.attributeValue.push(data.attributes[i].attributeValue);
      }
      delete data.attributes;
    }

    if (data.hasOwnProperty('query')) {
      data.q = data.query;
      delete data.query;
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;

    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, { attributeCode: true, attributeValue: true }, true);
  }

  // #9 API Token
  /**
   * @description This function adds a sub product
   * @param {addProductObj} data
   * @returns {Promise}
   */
  addSubProduct (data) {
    let apiName = 'addSubProduct';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.hasOwnProperty('attributes')) {
      data.attCode = [];
      data.attValue = [];
      data.attGroup = [];
      for (let i = 0; i < data.attributes.length; i++) {
        data.attCode.push(data.attributes[i].attCode);
        data.attValue.push(data.attributes[i].attValue);
        data.attGroup.push(data.attributes[i].attGroup);
      }
      delete data.attributes;
    }

    if (data.hasOwnProperty('tags') && Array.isArray(data.tags)) {
      data.tags = data.tags.join(',');
    }

    if (data.hasOwnProperty('tagTrees') && Array.isArray(data.tagTrees)) {
      data.tagTrees = data.tagTrees.join(',');
    }

    if (data.hasOwnProperty('metadata')) {
      data.metadata = JSON.stringify(data.metadata);
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers['Content-Type'] = 'application/x-www-form-urlencoded';
    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;

    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, { attCode: true, attValue: true, attGroup: true }, true);
  }

  // #10 API Token | Access Token
  /**
   * @description This function adds a sub product
   * @param {addProductObj} data
   * @returns {Promise}
   */
  searchSubProduct (data) {
    let apiName = 'searchSubProduct';
    let headers = {};

    if (typeof data !== 'object') {
      data = {};
    }
    else {
      data = utils.clone(data);
    }

    data = utils.trimNestedObject(data);

    data.token = data.token || this.clientInfo.apiToken;
    data.tokenIssuer = data.tokenIssuer || this.clientInfo.tokenIssuer || this.getDefaultTokenIssuer();

    try {
      this.validateBody(apiName, data);
    }
    catch (e) {
      return Promise.reject(e);
    }

    if (data.hasOwnProperty('attributes')) {
      data.attributeCode = [];
      data.attributeValue = [];
      for (let i = 0; i < data.attributes.length; i++) {
        data.attributeCode.push(data.attributes[i].attributeCode);
        data.attributeValue.push(data.attributes[i].attributeValue);
      }
      delete data.attributes;
    }

    if (data.hasOwnProperty('query')) {
      data.q = data.query;
      delete data.query;
    }

    if (data.hasOwnProperty('scVoucherHash') && typeof data.scVoucherHash === 'string') {
      data.scVoucherHash = [data.scVoucherHash];
    }
    data.scProductId = products[apiName];

    headers['Content-Type'] = 'application/x-www-form-urlencoded';
    headers._token_ = data.token;
    headers._token_issuer_ = data.tokenIssuer;

    delete data.token;
    delete data.tokenIssuer;

    return this.callService(apiName, headers, data, { attributeCode: true, attributeValue: true }, true);
  }
}

module.exports = PodProductService;
