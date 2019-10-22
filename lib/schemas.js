module.exports = {
  moduleConfig: {
    type: 'object',
    properties: {
      apiToken: {
        notEmpty: []
      },
      tokenIssuer: {
        type: 'integer',
        enum: [0, 1]
      }
    },
    required: ['apiToken'],
    additionalProperties: false
  },

  // #1
  addProduct: {
    body: {
      type: 'object',
      properties: {
        token: {
          type: 'string'
        },
        tokenIssuer: {
          type: 'integer'
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        parentProductId: {
          type: 'integer'
        },
        name: {
          notEmpty: []
        },
        description: {
          type: 'string'
        },
        uniqueId: {
          string: 'integer'
        },
        canComment: {
          type: 'boolean'
        },
        canLike: {
          type: 'boolean'
        },
        enable: {
          type: 'boolean'
        },
        metadata: {
          type: 'object'
        },
        businessId: {
          type: 'integer'
        },
        unlimited: {
          type: 'boolean'
        },
        availableCount: {
          type: 'number'
        },
        price: {
          type: 'number'
        },
        discount: {
          type: 'number',
          minimum: 0,
          maximum: 100
        },
        guildCode: {
          type: 'string'
        },
        allowUserInvoice: {
          type: 'boolean'
        },
        allowUserPrice: {
          type: 'boolean'
        },
        currencyCode: {
          type: 'string'
        },
        attTemplateCode: {
          type: 'string'
        },
        attributes: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              attCode: {
                type: 'string'
              },
              attValue: {
                type: 'string'
              },
              attGroup: {
                type: 'boolean'
              }
            },
            required: ['attCode', 'attValue', 'attGroup'],
            additionalProperties: false
          }
        },
        lat: {
          type: 'number'
        },
        lng: {
          type: 'number'
        },
        tags: {
          oneOf: [
            {
              type: 'array',
              items: {
                type: 'string'
              }
            },
            {
              type: 'string'
            }
          ]
        },
        content: {
          type: 'string'
        },
        previewImage: {
          type: 'string'
        },
        tagTrees: {
          oneOf: [
            {
              type: 'array',
              items: {
                type: 'string'
              }
            },
            {
              type: 'string'
            }
          ]
        },
        tagTreeCategoryName: {
          type: 'string'
        },
        preferredTaxRate: {
          type: 'number',
          minimum: 0,
          exclusiveMaximum: 1
        },
        quantityPrecision: {
          type: 'number'
        }
      },
      oneOf: [
        { required: ['token', 'tokenIssuer', 'name', 'description', 'canComment', 'canLike', 'enable', 'availableCount', 'price', 'discount'] },
        { required: ['token', 'tokenIssuer', 'name', 'description', 'canComment', 'canLike', 'enable', 'unlimited', 'price', 'discount'] }
      ],
      additionalProperties: false
    }
  },

  // #2
  addProducts: {
    body: {
      type: 'object',
      properties: {
        token: {
          type: 'string'
        },
        tokenIssuer: {
          type: 'integer'
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        data: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              parentProductId: {
                type: 'integer'
              },
              name: {
                notEmpty: []
              },
              description: {
                type: 'string'
              },
              uniqueId: {
                string: 'integer'
              },
              canComment: {
                type: 'boolean'
              },
              canLike: {
                type: 'boolean'
              },
              enable: {
                type: 'boolean'
              },
              metadata: {
                type: 'object'
              },
              businessId: {
                type: 'integer'
              },
              unlimited: {
                type: 'boolean'
              },
              availableCount: {
                type: 'number'
              },
              price: {
                type: 'number'
              },
              discount: {
                type: 'number'
              },
              guildCode: {
                type: 'string'
              },
              allowUserInvoice: {
                type: 'boolean'
              },
              allowUserPrice: {
                type: 'boolean'
              },
              currencyCode: {
                type: 'string'
              },
              attTemplateCode: {
                type: 'string'
              },
              attributes: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    attCode: {
                      type: 'string'
                    },
                    attValue: {
                      type: 'string'
                    },
                    attGroup: {
                      type: 'boolean'
                    }
                  },
                  required: ['attCode', 'attValue', 'attGroup'],
                  additionalProperties: false
                }
              },
              groupId: {
                type: 'integer'
              },
              lat: {
                type: 'number'
              },
              lng: {
                type: 'number'
              },
              tags: {
                oneOf: [
                  {
                    type: 'array',
                    items: {
                      type: 'string'
                    }
                  },
                  {
                    type: 'string'
                  }
                ]
              },
              content: {
                type: 'string'
              },
              previewImage: {
                type: 'string'
              },
              tagTrees: {
                oneOf: [
                  {
                    type: 'array',
                    items: {
                      type: 'string'
                    }
                  },
                  {
                    type: 'string'
                  }
                ]
              },
              tagTreeCategoryName: {
                type: 'string'
              },
              preferredTaxRate: {
                type: 'number',
                minimum: 0,
                exclusiveMaximum: 1
              },
              quantityPrecision: {
                type: 'number'
              }
            },
            oneOf: [
              { required: ['name', 'description', 'canComment', 'canLike', 'enable', 'availableCount', 'price', 'discount'] },
              { required: ['name', 'description', 'canComment', 'canLike', 'enable', 'unlimited', 'price', 'discount'] }
            ],
            additionalProperties: false
          }
        }
      },
      required: ['token', 'tokenIssuer', 'data'],
      additionalProperties: false
    }
  },

  // #3
  updateProduct: {
    body: {
      type: 'object',
      properties: {
        token: {
          type: 'string'
        },
        tokenIssuer: {
          type: 'integer'
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        name: {
          notEmpty: []
        },
        description: {
          type: 'string'
        },
        version: {
          type: 'integer'
        },
        canComment: {
          type: 'boolean'
        },
        canLike: {
          type: 'boolean'
        },
        enable: {
          type: 'boolean'
        },
        metadata: {
          type: 'object'
        },
        entityId: {
          type: 'integer'
        },
        unlimited: {
          type: 'boolean'
        },
        availableCount: {
          type: 'number'
        },
        categories: {
          type: 'array',
          items: {
            type: 'string'
          }
        },
        guildCode: {
          type: 'string'
        },
        allowUserInvoice: {
          type: 'boolean'
        },
        allowUserPrice: {
          type: 'boolean'
        },
        attTemplateCode: {
          type: 'string'
        },
        attributes: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              attCode: {
                type: 'string'
              },
              attValue: {
                type: 'string'
              },
              attGroup: {
                type: 'boolean'
              }
            },
            required: ['attCode', 'attValue', 'attGroup'],
            additionalProperties: false
          }
        },
        groupId: {
          type: 'integer'
        },
        price: {
          type: 'number'
        },
        discount: {
          type: 'number'
        },
        changePreview: {
          type: 'boolean'
        },
        lat: {
          type: 'number'
        },
        lng: {
          type: 'number'
        },
        tags: {
          oneOf: [
            {
              type: 'array',
              items: {
                type: 'string'
              }
            },
            {
              type: 'string'
            }
          ]
        },
        content: {
          type: 'string'
        },
        previewImage: {
          type: 'string'
        },
        tagTrees: {
          oneOf: [
            {
              type: 'array',
              items: {
                type: 'string'
              }
            },
            {
              type: 'string'
            }
          ]
        },
        tagTreeCategoryName: {
          type: 'string'
        },
        preferredTaxRate: {
          type: 'number',
          minimum: 0,
          exclusiveMaximum: 1
        },
        quantityPrecision: {
          type: 'number'
        }
      },
      oneOf: [
        { required: ['token', 'tokenIssuer', 'name', 'description', 'canComment', 'canLike', 'enable', 'entityId', 'price', 'discount', 'changePreview', 'availableCount'] },
        { required: ['token', 'tokenIssuer', 'name', 'description', 'canComment', 'canLike', 'enable', 'entityId', 'price', 'discount', 'changePreview', 'unlimited'] }
      ],
      additionalProperties: false
    }
  },

  // #4
  updateProducts: {
    body: {
      type: 'object',
      properties: {
        token: {
          type: 'string'
        },
        tokenIssuer: {
          type: 'integer'
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        data: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              name: {
                notEmpty: []
              },
              description: {
                type: 'string'
              },
              version: {
                type: 'integer'
              },
              canComment: {
                type: 'boolean'
              },
              canLike: {
                type: 'boolean'
              },
              enable: {
                type: 'boolean'
              },
              metadata: {
                type: 'object'
              },
              entityId: {
                type: 'integer'
              },
              unlimited: {
                type: 'boolean'
              },
              availableCount: {
                type: 'number'
              },
              categories: {
                type: 'array',
                items: {
                  type: 'string'
                }
              },
              guildCode: {
                type: 'string'
              },
              allowUserInvoice: {
                type: 'boolean'
              },
              allowUserPrice: {
                type: 'boolean'
              },
              attTemplateCode: {
                type: 'string'
              },
              attributes: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    attCode: {
                      type: 'string'
                    },
                    attValue: {
                      type: 'string'
                    },
                    attGroup: {
                      type: 'boolean'
                    }
                  },
                  required: ['attCode', 'attValue', 'attGroup'],
                  additionalProperties: false
                }
              },
              groupId: {
                type: 'integer'
              },
              price: {
                type: 'number'
              },
              discount: {
                type: 'number'
              },
              changePreview: {
                type: 'boolean'
              },
              lat: {
                type: 'number'
              },
              lng: {
                type: 'number'
              },
              tags: {
                oneOf: [
                  {
                    type: 'array',
                    items: {
                      type: 'string'
                    }
                  },
                  {
                    type: 'string'
                  }
                ]
              },
              content: {
                type: 'string'
              },
              previewImage: {
                type: 'string'
              },
              tagTrees: {
                oneOf: [
                  {
                    type: 'array',
                    items: {
                      type: 'string'
                    }
                  },
                  {
                    type: 'string'
                  }
                ]
              },
              tagTreeCategoryName: {
                type: 'string'
              },
              preferredTaxRate: {
                type: 'number',
                minimum: 0,
                exclusiveMaximum: 1
              },
              quantityPrecision: {
                type: 'number'
              }
            },
            oneOf: [
              { required: ['name', 'description', 'canComment', 'canLike', 'enable', 'entityId', 'price', 'discount', 'changePreview', 'availableCount'] },
              { required: ['name', 'description', 'canComment', 'canLike', 'enable', 'entityId', 'price', 'discount', 'changePreview', 'unlimited'] }
            ],
            additionalProperties: false
          }
        }
      },
      required: ['token', 'tokenIssuer', 'data'],
      additionalProperties: false
    }
  },

  // #5
  productList: {
    body: {
      type: 'object',
      properties: {
        token: {
          type: 'string'
        },
        tokenIssuer: {
          type: 'integer'
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        businessId: {
          type: 'integer'
        },
        id: {
          type: 'array',
          items: {
            type: 'integer'
          }
        },
        uniqueId: {
          type: 'array',
          items: {
            type: 'string'
          }
        },
        categoryCode: {
          type: 'array',
          items: {
            type: 'string'
          }
        },
        guildCode: {
          type: 'array',
          items: {
            type: 'string'
          }
        },
        currencyCode: {
          type: 'string'
        },
        firstId: {
          type: 'integer'
        },
        lastId: {
          type: 'integer'
        },
        offset: {
          type: 'integer'
        },
        size: {
          type: 'integer'
        },
        attributeTemplateCode: {
          type: 'string'
        },
        attributes: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              attributeCode: {
                type: 'string'
              },
              attributeValue: {
                type: 'string'
              }
            },
            required: ['attributeCode', 'attributeValue'],
            additionalProperties: false
          }
        },
        orderByLike: {
          type: 'string',
          enum: ['asc', 'desc']
        },
        orderBySale: {
          type: 'string',
          enum: ['asc', 'desc']
        },
        orderByPrice: {
          type: 'string',
          enum: ['asc', 'desc']
        },
        tags: {
          type: 'array',
          items: {
            type: 'string'
          }
        },
        tagTrees: {
          type: 'array',
          items: {
            type: 'string'
          }
        }
      },
      oneOf: [
        { required: ['token', 'tokenIssuer', 'offset'] },
        { required: ['token', 'tokenIssuer', 'id'] },
        { required: ['token', 'tokenIssuer', 'firstId'] },
        { required: ['token', 'tokenIssuer', 'lastId'] }
      ],
      additionalProperties: false
    }
  },

  // #6
  businessProductList: {
    body: {
      type: 'object',
      properties: {
        token: {
          type: 'string'
        },
        tokenIssuer: {
          type: 'integer'
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        businessId: {
          type: 'integer'
        },
        id: {
          type: 'array',
          items: {
            type: 'integer'
          }
        },
        uniqueId: {
          type: 'array',
          items: {
            type: 'integer'
          }
        },
        categoryCode: {
          type: 'array',
          items: {
            type: 'string'
          }
        },
        guildCode: {
          type: 'array',
          items: {
            type: 'string'
          }
        },
        currencyCode: {
          type: 'string'
        },
        firstId: {
          type: 'integer'
        },
        lastId: {
          type: 'integer'
        },
        offset: {
          type: 'integer'
        },
        size: {
          type: 'integer'
        },
        attributeTemplateCode: {
          type: 'string'
        },
        attributes: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              attributeCode: {
                type: 'string'
              },
              attributeValue: {
                type: 'string'
              }
            },
            required: ['attributeCode', 'attributeValue'],
            additionalProperties: false
          }
        },
        orderByLike: {
          type: 'string',
          enum: ['asc', 'desc']
        },
        orderByPrice: {
          type: 'string',
          enum: ['asc', 'desc']
        },
        orderBySale: {
          type: 'string',
          enum: ['asc', 'desc']
        },
        tags: {
          type: 'array',
          items: {
            type: 'string'
          }
        },
        tagTrees: {
          type: 'array',
          items: {
            type: 'string'
          }
        },
        scope: {
          type: 'string',
          enum: ['PARENT_PRODUCT', 'BUSINESS_PRODUCT', 'DEALER_PRODUCT_PERMISSION']
        },
        attributeSearchQuery: {
          type: 'object'
        }
        /* scVoucherHash: {
          type: 'array',
          items: {
            type: 'string'
          }
        },
        scApiKey: {
          type: 'string'
        } */
      },
      oneOf: [
        { required: ['token', 'tokenIssuer', 'offset'] },
        { required: ['token', 'tokenIssuer', 'id'] },
        { required: ['token', 'tokenIssuer', 'firstId'] },
        { required: ['token', 'tokenIssuer', 'lastId'] }
      ],
      additionalProperties: false
    }
  },

  // #7
  attributeTemplateList: {
    body: {
      type: 'object',
      properties: {
        token: {
          type: 'string'
        },
        tokenIssuer: {
          type: 'integer'
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        guildCode: {
          type: 'array',
          items: {
            type: 'string'
          }
        },
        firstId: {
          type: 'integer'
        },
        lastId: {
          type: 'integer'
        },
        offset: {
          type: 'integer',
          minimum: 0
        },
        size: {
          type: 'integer',
          minimum: 0
        }
      },
      oneOf: [
        { required: ['token', 'tokenIssuer', 'offset'] },
        { required: ['token', 'tokenIssuer', 'id'] },
        { required: ['token', 'tokenIssuer', 'firstId'] },
        { required: ['token', 'tokenIssuer', 'lastId'] }
      ],
      additionalProperties: false
    }
  },

  // #8
  searchProduct: {
    body: {
      type: 'object',
      properties: {
        token: {
          type: 'string'
        },
        tokenIssuer: {
          type: 'integer'
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        query: {
          type: 'string'
        },
        id: {
          type: 'array',
          items: {
            type: 'integer'
          }
        },
        uniqueId: {
          type: 'array',
          items: {
            type: 'integer'
          }
        },
        businessId: {
          type: 'integer'
        },
        categoryCodes: {
          type: 'array',
          items: {
            type: 'string'
          }
        },
        guildCode: {
          type: 'array',
          items: {
            type: 'string'
          }
        },
        currencyCode: {
          type: 'string'
        },
        firstId: {
          type: 'integer'
        },
        lastId: {
          type: 'integer'
        },
        offset: {
          type: 'integer',
          minimum: 0
        },
        size: {
          type: 'integer',
          minimum: 1
        },
        attributeTemplateCode: {
          type: 'string'
        },
        attributes: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              attributeCode: {
                type: 'string'
              },
              attributeValue: {
                type: 'string'
              }
            },
            required: ['attributeCode', 'attributeValue'],
            additionalProperties: false
          }
        },
        orderByLike: {
          type: 'string',
          enum: ['asc', 'desc']
        },
        orderBySale: {
          type: 'string',
          enum: ['asc', 'desc']
        },
        orderByPrice: {
          type: 'string',
          enum: ['asc', 'desc']
        },
        tags: {
          type: 'array',
          items: {
            type: 'string'
          }
        },
        tagTrees: {
          type: 'array',
          items: {
            type: 'string'
          }
        }
      },
      oneOf: [
        { required: ['token', 'tokenIssuer', 'offset'] },
        { required: ['token', 'tokenIssuer', 'id'] },
        { required: ['token', 'tokenIssuer', 'firstId'] },
        { required: ['token', 'tokenIssuer', 'lastId'] }
      ],
      additionalProperties: false
    }
  },

  // #9
  addSubProduct: {
    body: {
      type: 'object',
      properties: {
        token: {
          type: 'string'
        },
        tokenIssuer: {
          type: 'integer'
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        parentProductId: {
          type: 'integer'
        },
        name: {
          type: 'string',
          minLength: 1
        },
        description: {
          type: 'string'
        },
        uniqueId: {
          type: 'string'
        },
        metadata: {
          type: 'object'
        },
        businessId: {
          type: 'integer'
        },
        unlimited: {
          type: 'boolean'
        },
        availableCount: {
          type: 'number'
        },
        price: {
          type: 'number'
        },
        discount: {
          type: 'number'
        },
        guildCode: {
          type: 'string'
        },
        allowUserInvoice: {
          type: 'boolean'
        },
        allowUserPrice: {
          type: 'boolean'
        },
        currencyCode: {
          type: 'string'
        },
        attTemplateCode: {
          type: 'string'
        },
        attributes: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              attCode: {
                type: 'string'
              },
              attValue: {
                type: 'string'
              },
              attGroup: {
                type: 'boolean'
              }
            }
          }
        },
        groupId: {
          type: 'integer'
        },
        lat: {
          type: 'number'
        },
        lng: {
          type: 'number'
        },
        tags: {
          oneOf: [
            {
              type: 'array',
              items: {
                type: 'string'
              }
            },
            {
              type: 'string'
            }
          ]
        },
        content: {
          type: 'string'
        },
        previewImage: {
          type: 'string'
        },
        tagTrees: {
          oneOf: [
            {
              type: 'array',
              items: {
                type: 'string'
              }
            },
            {
              type: 'string'
            }
          ]
        },
        tagTreeCategoryName: {
          type: 'string'
        },
        preferredTaxRate: {
          type: 'number',
          minimum: 0,
          exclusiveMaximum: 1
        },
        quantityPrecision: {
          type: 'number'
        }
      },
      oneOf: [
        { required: ['token', 'tokenIssuer', 'name', 'groupId', 'availableCount', 'price', 'discount'] },
        { required: ['token', 'tokenIssuer', 'name', 'groupId', 'unlimited', 'price', 'discount'] }
      ],
      additionalProperties: false
    }
  },

  // #10
  searchSubProduct: {
    body: {
      type: 'object',
      properties: {
        token: {
          type: 'string'
        },
        tokenIssuer: {
          type: 'integer'
        },
        scVoucherHash: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'array',
              items: {
                type: 'string'
              }
            }
          ]
        },
        scApiKey: {
          notEmpty: []
        },
        query: {
          type: 'string'
        },
        productGroupId: {
          type: 'array',
          items: {
            type: 'integer'
          }
        },
        offset: {
          type: 'integer',
          minimum: 0
        },
        size: {
          type: 'integer',
          minimum: 1
        },
        attributes: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              attributeCode: {
                type: 'string'
              },
              attributeValue: {
                type: 'string'
              }
            },
            required: ['attributeCode', 'attributeValue'],
            additionalProperties: false
          }
        },
        orderByLike: {
          type: 'string',
          enum: ['asc', 'desc']
        },
        orderByAttributeCode: {
          type: 'string'
        },
        orderByDirection: {
          type: 'string',
          enum: ['asc', 'desc']
        },
        tags: {
          type: 'array',
          items: {
            type: 'string'
          }
        },
        tagTrees: {
          type: 'array',
          items: {
            type: 'string'
          }
        }
      },
      required: ['productGroupId'],
      additionalProperties: false
    }
  }
};
