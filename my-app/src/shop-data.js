const SHOP_DATA = [
  {
    title: 'BEDROOM',
    items: [
      {
        "id": 1,
        "name": "Clear Glass Jewelry Box",
        "imageUrl": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fbc%2Ff6%2Fbcf6b13acec55da050488b0e063e8104dfce50fa.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bhome_storage_bagsstorage%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
        "price": 19.99
      },
      {
        "id": 2,
        "name": "Twin Duvet Cover",
        "imageUrl": "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F23%2F06%2F2306c59b0f841479456381e996ed35649936c2cc.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bhome_bedlinen_duvetscoversets_single%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
        "price": 29.99
      },
      {
        "id": 3,
        "name": "Stoneware Vase",
        "imageUrl": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F8a%2F54%2F8a54d49a0d9c741dcca017dcd9012482bbd8ffb2.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bhome_pots_vases%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
        "price": 29.99
      },
      {
        "id": 4,
        "name": "Linen King/Queen Duvet Cover Set",
        "imageUrl": "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F3a%2Fcd%2F3acda5cbd07c813741aebc1d5cf56d86d972057e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D",
        "price": 129.00
      },
      {
        "id": 5,
        "name": "Small Plant Pot with Bubbles",
        "imageUrl": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fb7%2F9b%2Fb79b488e1c1dee0a4bdee13e748d013a49559bce.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bhome_bedroom_decorations_pots%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
        "price": 14.99
      },
      {
        "id": 6,
        "name": "Rattan Hanging Basket",
        "imageUrl": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fae%2F33%2Fae33e0bd5de5e72a6a18f48953708bfc16fd4356.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bhome_decorations_pots%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
        "price": 17.99
      },
      {
        "id": 7,
        "name": "Round Jute Floor Mat",
        "imageUrl": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F51%2Fb0%2F51b0ee1860ec988b322ce1aa9e46965819599713.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bhome_carpets%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
        "price": 59.99
      },
      {
        "id": 8,
        "name": "Large Plant Pot on Pedestal",
        "imageUrl": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fbe%2Fbb%2Fbebbb29c66a5e8f8311ad24a23a300b48179ff10.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bhome_decorations_pots%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]",
        "price": 34.99
      },
      {
        "id": 9,
        "name": "Terry Bathrobe",
        "imageUrl": "https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F06%2Fdb%2F06dbceaf4817510217675b2465f8f1ab9ac53542.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]",
        "price": 49.99
      },
    ],
  },
  {
    title: 'LIVINGROOM',
    items: [
      {
        id: 10,
        name: 'Stoneware Vase',
        imageUrl: 'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fc3%2F0a%2Fc30ac4f98110afdc4f1c2d24e5556dfd9836b924.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
        price: 12.99,
      },
      {
        id: 11,
        name: 'Crinkled Linen-blend Cushion Cover',
        imageUrl: 'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fb5%2F3a%2Fb53a41eb530831f59b7dcbd4dcfc6b94a49cf486.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
        price: 29.99,
      },
      {
        id: 12,
        name: 'Large Cotton Rug',
        imageUrl: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F30%2Ffc%2F30fc5efe46492affe0abc31b11c70242d404b02a.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]',
        price: 79.99,
      },
      {
        id: 13,
        name: 'Large Seagrass Candle Lantern',
        imageUrl: 'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F40%2F58%2F40581910ac607c94b3cf7e1c66e6335596d428af.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bhome_candlescandleholders%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
        price: 29.99,
      },
      {
        id: 14,
        name: '2-pack Linen-blend Curtains',
        imageUrl: 'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F3a%2F7f%2F3a7f58a0e82895c05bf7291b4927b92d1e5a8177.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
        price: 69.99,
      },
      {
        id: 15,
        name: 'Large Wooden Plant Pot',
        imageUrl: 'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F2e%2F8c%2F2e8c47937c4f9abb991dfc7ff01672d4c5e63b9d.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
        price: 39.99,
      },
      {
        id: 16,
        name: '2-pack Patterned Cushion Covers',
        imageUrl: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fa8%2Fa7%2Fa8a7608c791306f85dd6616983fe916279d0023f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]',
        price: 9.99,
      },
      {
        id: 17,
        name: 'Cotton Twill Storage Basket',
        imageUrl: 'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Ffb%2F61%2Ffb61f76b96490491697beb568c0006f332cd4832.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
        price: 14.99,
      },
    ],
  },
  {
    title: 'BATHROOM',
    items: [
      {
        id: 18,
        name: 'Cotton Twill Laundry Bag',
        imageUrl: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F14%2Ff4%2F14f4ff9ee5ccd8962ab75fa8db5b5a06b7d36ea0.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bhome_storage_all%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]',
        price: 24.99,
      },
      {
        id: 19,
        name: 'Satin Bathrobe',
        imageUrl: 'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fcd%2F51%2Fcd510074ec6789144d653e3348d3d2f6dba4798f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
        price: 39.99,
      },
      {
        id: 20,
        name: 'Two-compartment Laundry Bag',
        imageUrl: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F5c%2F5a%2F5c5ac1de962b7d0dfc6a64025a250827cbe1e72f.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
        price: 17.99,
      },
      {
        id: 21,
        name: 'Waffled Bath Towel',
        imageUrl: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ff3%2F29%2Ff329dad353339534a1bf816d37a9075cb1169c37.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]',
        price: 17.99,
      },
      {
        id: 22,
        name: 'Waffled Hand Towel',
        imageUrl: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F4a%2F2e%2F4a2e354c92d8769cb04a38070b3ffa3cbb8bc8d5.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bhome_bathshower_accessories_towels_handtowels%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]',
        price: 6.99,
      },
    ],
  },
  {
    title: 'KITCHEN',
    items: [
      {
        id: 23,
        name: '4-pack Coasters',
        imageUrl: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Faf%2F7c%2Faf7c9f6ea8f5871736291b595854cf418cf29625.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bhome_kitchen_ware%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
        price: 9.99,
      },
      {
        id: 24,
        name: 'Serving Bowls and Tray',
        imageUrl: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fb5%2F40%2Fb54055fcea3cee601c0fb2d7ec16af9b6aff9b64.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
        price: 29.99,
      },
      {
        id: 25,
        name: '2-pack Linen Napkins',
        imageUrl: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F98%2Fcb%2F98cbc2bfa6a2530ef59b638b82c3b08555847d9b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bhome_servingwaretableware_napkins%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]',
        price: 12.99,
      },
      {
        id: 26,
        name: '4-pack Teaspoons',
        imageUrl: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ff3%2F86%2Ff386e0a3b7d028a311b843b85c536ee7a9b32d72.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bhome_kitchen_all%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]',
        price: 9.99,
      },
      {
        id: 27,
        name: '2-pack Metal Napkin Rings',
        imageUrl: 'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F27%2F2b%2F272b7973d622ace5880bda0d7bf0f4d1296066d0.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVEDETAIL%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
        price: 9.99,
      },
      {
        id: 28,
        name: 'Patterned Tablecloth',
        imageUrl: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Faf%2Fcb%2Fafcb685999a7e2385601b8a30a7802a9710174a3.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]',
        price: 17.99,
      },
      {
        id: 29,
        name: 'Large Stoneware Serving Dish',
        imageUrl: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Ff7%2Fa3%2Ff7a37376d6e607e90d24c1e5fb771dc587cd99ac.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bhome_kitchen_ware%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
        price: 29.99,
      },
    ],
  },
  {
    title: 'OUTDOOR',
    items: [
      {
        id: 30,
        name: 'Large Metal Candle Lantern',
        imageUrl: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F62%2Feb%2F62eb09896f52e81de7b8990135e0733327a05ce8.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]',
        price: 34.99,
      },
      {
        id: 31,
        name: 'Metal Planter Box',
        imageUrl: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F72%2Fbc%2F72bc5de4f693f1e7fc049952f032953c9eef819b.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
        price: 29.99,
      },
      {
        id: 32,
        name: 'Striped Beach Towel',
        imageUrl: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fe5%2F2a%2Fe52a8d41226b1f5e90df70439df0c2a05ffc279e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]',
        price: 17.99,
      },
      {
        id: 33,
        name: 'Metal Planter Box',
        imageUrl: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fc2%2F42%2Fc242182ca8850b561b3ecef46bfea9e46fd3aceb.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
        price: 69.99,
      },
      {
        id: 34,
        name: 'Small Metal Candle Lantern',
        imageUrl: 'https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2Fae%2F14%2Fae14ec52d0043a4df6530edd2ddfc999a4c59398.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmain%5D',
        price: 9.99,
      },
      {
        id: 35,
        name: 'Metal Candle Lantern',
        imageUrl: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F6f%2F31%2F6f31bc485b1292683adaee285e8e29d278ca41d8.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]',
        price: 24.99,
      },
      {
        id: 36,
        name: 'Plastic Mug with Straw',
        imageUrl: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F6f%2Fff%2F6ffff3a9db3c301561d0dc1e57a4bdf6b33a53e2.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]',
        price: 5.99,
      },
      {
        id: 37,
        name: 'Cotton Terry Bath Sheet',
        imageUrl: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Feb%2F30%2Feb3055a2db5acba886214864d519cc7e6a2fb79e.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bhome_bathshower_accessories_towels_bathtowels%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]',
        price: 17.99,
      },
      {
        id: 38,
        name: 'Plant Pot with Hanger',
        imageUrl: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F75%2Fde%2F75de2eb4a62c48f927b2182f6ca6b8820e361d81.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]',
        price: 17.99,
      },
      {
        id: 39,
        name: 'Large Cotton Beach Towel',
        imageUrl: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F64%2F31%2F64315a486a4189ec346eb6256ea1d1c4460a4e04.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]',
        price: 24.99,
      },
      {
        id: 40,
        name: 'Jute Beach Bag',
        imageUrl: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F0d%2Ff2%2F0df2c43beada034d663447fec3b2c8c9107ea8e0.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url[file:/product/main]',
        price: 19.99,
      },
      {
        id: 41,
        name: 'Rattan Hanging Basket',
        imageUrl: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2Fae%2F33%2Fae33e0bd5de5e72a6a18f48953708bfc16fd4356.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5Bhome_decorations_pots%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
        price: 17.99,
      },
    ],
  },
];



export default SHOP_DATA