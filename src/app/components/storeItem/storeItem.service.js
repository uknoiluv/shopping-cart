export class StoreItemService {
  constructor () {
    'ngInject';

    this.data = {
  "display": "Intuit QuickBooks",
  "attributes": {
    "titleColor": "#000000",
    "productColor": "#a6a6a6"
  },
  "items": [
    {
      "pid": "voucher-checks",
      "quantity": 1,
      "price": "$66.99",
      "priceValue": 66.99,
      "quantityEditable": true,
      "image": "https://intuitmarket.intuit.com/ui/images/CC_Image_page_vouchercheck.jpg",
      "display": "Voucher Checks",
      "description": {
        "summary": "These QuickBooks-compatible checks are ideal for payroll and accounts payable.",
        "full": "These QuickBooks-compatible checks are ideal for payroll and accounts payable. Print easily via inkjet or laser.",
        "action": "Buy and download now"
      },
      "attributes": {
        "titleColor": "#000000",
        "productColor": "#ffcc80"
      }
    },
    {
      "pid": "standard-checks",
      "quantity": 1,
      "price": "$56.99",
      "priceValue": 56.99,
      "quantityEditable": true,
      "image": "https://intuitmarket.intuit.com/ui/images/CC_Image_page_standardcheck.jpg",
      "display": "Standard Checks",
      "description": {
        "summary": "Save time by printing three personalized checks per page.",
        "full": "Save time by printing three personalized checks per page. Buy a form leader to help align the check with your printer when you've used a check or two.",
        "action": "Buy and download now"
      },
      "attributes": {
        "titleColor": "#000000",
        "productColor": "#ffcc80"
      }
    },
    {
      "pid": "customer-trust-secure-plus",
      "quantity": 1,
      "price": "$66.99",
      "priceValue": 66.99,
      "quantityEditable": true,
      "image": "https://intuitmarket.intuit.com/ui/images/CC_Image_page_vouchercheck2.jpg",
      "display": "Customer trust Secure Plus",
      "description": {
        "summary": "5% of revenue is lost to fraud each year with a median loss of $140,000.",
        "full": "5% of revenue is lost to fraud each year with a median loss of $140,000. Secure Plus Voucher Checks can reduce your risk of check fraud.",
        "action": "Buy and download now"
      },
      "attributes": {
        "titleColor": "#000000",
        "productColor": "#ffcc80"
      }
    },
    {
      "pid": "wallet-checks",
      "quantity": 1,
      "price": "$43.99",
      "priceValue": 43.99,
      "quantityEditable": true,
      "image": "https://intuitmarket.intuit.com/ui/images/C_Image_page_walletcheck.jpg",
      "display": "Wallet Checks",
      "description": {
        "summary": "These smaller printer checks also have check stubs for your record-keeping convenience.",
        "full": "These smaller printer checks also have check stubs for your record-keeping convenience.",
        "action": "Buy and download now"
      },
      "attributes": {
        "titleColor": "#000000",
        "productColor": "#ffcc80"
      }
    },    
    {
      "pid": "manual-checks",
      "quantity": 1,
      "price": "$58.99",
      "priceValue": 58.99,
      "quantityEditable": true,
      "image": "https://intuitmarket.intuit.com/ui/images/CC_Image_page_manualcheck.png",
      "display": "Manual Checks",
      "description": {
        "summary": "These 3-to-a-page manual checks have detachable check stubs which make it easy to record transaction details in QuickBooks.",
        "full": "These 3-to-a-page manual checks have detachable check stubs which make it easy to record transaction details in QuickBooks.",
        "action": "Buy and download now"
      },
      "attributes": {
        "titleColor": "#000000",
        "productColor": "#ffcc80"
      }
    },
    {
      "pid": "office-and-away-checks",
      "quantity": 1,
      "price": "$90.99",
      "priceValue": 90.99,
      "quantityEditable": true,
      "image": "https://intuitmarket.intuit.com/ui/images/CC_Image_page_officecheck.png",
      "display": "Office and Away Checks",
      "description": {
        "summary": "Versatile checks that you can print in your office directly from QuickBooks or hand-write when you're away.",
        "full": "Versatile checks that you can print in your office directly from QuickBooks or hand-write when you're away.",
        "action": "Buy and download now"
      },
      "attributes": {
        "titleColor": "#000000",
        "productColor": "#ffcc80"
      }
    },
    {
      "pid": "secure-plus-personal-checks",
      "quantity": 1,
      "price": "$39.99",
      "priceValue": 39.99,
      "quantityEditable": true,
      "image": "https://intuitmarket.intuit.com/ui/images/CC_Image_page_officecheck.png",
      "display": "Secure Plus Personal Checks",
      "description": {
        "summary": "Checkout these personal checks that protect! Chemically reactive paper helps prevent check alterations. Printed at a U.S. Treasury-approved facility.",
        "full": "Checkout these personal checks that protect! Chemically reactive paper helps prevent check alterations. Printed at a U.S. Treasury-approved facility.",
        "action": "Buy and download now"
      },
      "attributes": {
        "titleColor": "#000000",
        "productColor": "#ffcc80"
      }
    }
  ]
};

    this.indexObj = this.createIndexObj();
  }

  createIndexObj() {
    let obj = {};
    this.data.items.forEach( (element, i) => {
      obj[element.pid] = i; 
    });
    return obj;
  }

  getItems() {
    return this.data;
  }

  getItem(name) {
    let index = this.indexObj[name]
    return this.data.items[index];
  }
}
