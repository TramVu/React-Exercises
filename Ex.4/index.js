const express = require("express");
const app = express();
const port = 3000;
const { v4: uuid4 } = require("uuid");

app.use(express.json());

//------PRODUCTS----------PRODUCTS--------------PRODUCTS--------------

app.get("/products", (req, res) => {
  res.json(productData);
});

app.get("/products/:id", (req, res) => {
  const result = productData.find((id) => id.id == req.params.id);
  res.send(result);
});

const productData = [
  {
    id: uuid4(),
    name: "Logitech H390 Wired Headset, Stereo Headphones with Noise-Cancelling Microphone, USB, In-Line Controls, PC/Mac/Laptop - Black",
    brand: "by Logitech",
    type: "Computers, Tablets and IT Accessories",
    price: "$24.95",
    detail: [
      "Padded headband and ear pads. Frequency response (Microphone): 100 hertz - 10 kilohertz",
      "Rotating, noise canceling microphone. Sensitivity (headphone) 94 dBV/Pa +/ 3 dB. Sensitivity (microphone) 17 dBV/Pa +/ 4 dB",
      "Compatible with Windows Vista, Windows 7, Windows 8, Windows 10 or later and Mac OS X(10.2.8 or later)",
    ],
  },
];

app.post("/products", (req, res) => {
  productData.push({
    id: uuid4(),
    name: req.body.name,
    brand: req.body.brand,
    type: req.body.type,
    price: req.body.price,
    detail: req.body.detail,
  });

  res.send("Added new product!");
});

app.delete("/products/:id", (req, res) => {
  const result = productData.findIndex((p) => p.id === req.params.id);
  if (result !== -1) {
    productData.splice(result, 1);
    res.send("Deleted succeeded !");
  } else {
    res.send("Not found");
  }
});

// --------USERS------------USERS--------------USERS
app.get("/users", (req, res) => {
  res.json(userData);
});

const userData = [
  {
    id: uuid4(),
    name: "Leona Lewis",
    address: "343 Los Angeles Street, Los Angeles",
    postalCode: "101010",
    country: "United States",
    phoneNumber: "0516789489",
    email: "lewis.leona@gmail.com",
  },
];

app.post("/users", (req, res) => {
  userData.push({
    id: uuid4(),
    name: req.body.name,
    address: req.body.address,
    postalCode: req.body.postalCode,
    country: req.body.country,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
  });

  res.send("New user created");
});

//--------INVOICE-----------INVOICE-------------INVOICE--------------------
app.get("/invoices", (req, res) => {
  res.json(invoiceData);
});

const invoiceData = [
  {
    SellerDtls: {
      Company: "Apple",
      Addr: " Cupertino, California",
      Location: "United States"
    },
    BuyerDtls: {
      name: "Leona Lewis",
      address: "343 Los Angeles Street, Los Angeles",
      postalCode: "101010",
      country: "United States",
      phoneNumber: "0516789489",
      email: "lewis.leona@gmail.com"
    },
    ItemList: [
      {
        ItemName: "Apple Pencil (2nd Generation)",
        Qty: 1,
        Unit: "piece",
        UnitPrice: "$134.99",
        TotAmt: "$134.99",
        Discount: 0,
        TaxVal: "$32.3976",
        TotItemVal: "$167.3876"
      }
    ],
    InvoiceDtls: [
      {
        InvNo: uuid4(),
        InvDt: "02/10/2021"
      }
    ]
  }
];

app.post("/invoices", (req, res) => {
    invoiceData.push({
        SellerDtls: {
            Company: req.body.Company,
            Addr: req.body.Addr,
            Location: req.body.Location,
        },
        BuyerDtls: {
            name: req.body.name,
            address: req.body.address,
            postalCode: req.body.postalCode,
            country: req.body.country,
            phoneNumber: req.body.phoneNumber,
            email: req.body.email,
        },
        ItemList: [
            {
                ItemName: req.body.ItemName,
                Qty: req.body.Qty,
                Unit: req.body.Unit,
                UnitPrice: req.body.UnitPrice,
                TotAmt: req.body.TotAmt,
                Discount: req.body.Discount,
                TaxVal: req.body.TaxVal,
                TotItemVal: req.body.TotItemVal,
            }
        ],
        InvoiceDtls: [
            {
                InvNo: uuid4(),
                InvDt: req.body.InvDt,
            }
        ],
    });

    res.send("New invoice created");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
