/*
  自己修改网站内容看这里。
  你只需要改引号里面的文字，例如 "表演刀"。
  商品图片以后可以放进 assets 文件夹，再把 image 改成 "assets/你的图片名.jpg"。
*/

window.siteContent = {
  shopName: "创武武术器械馆",
  shopNameEn: "CHUANGWU SPORTS SHOP",
  pageTitle: "创武武术器械馆 | Wushu Weapons & Equipment Singapore",
  pageDescription: "创武武术器械馆提供新加坡武术器械、刀剑棍枪、武术服装、训练配件与比赛用品咨询。Chuangwu Sports Shop provides wushu weapons, martial arts equipment, costumes and training accessories in Singapore.",
  footerText: "新加坡武术器械 / 武术服装 / 训练配件 / 服装定制 · Singapore wushu weapons / costumes / accessories / customization",
  companyEmail: "zhouyc1115@gmail.com",

  hero: {
    eyebrow: "WUSHU EQUIPMENT · SINGAPORE",
    titleLine1: "武术器械",
    titleLine2: "一站配齐",
    slogan: "刀 · 剑 · 棍 · 枪 · 服装 · 配件 / Broadswords · Swords · Cudgels · Spears · Costumes · Accessories",
    text: "新加坡武术器械、刀剑棍枪、武术服装与训练配件选购服务。Wushu weapons, martial arts equipment, costumes and accessories in Singapore.",
    proofTitle: "训练 / 表演 / 比赛 · Training / Performance / Competition",
    proofText: "支持儿童、成人与团体采购 · For kids, adults and team orders",
    featuredName: "服装",
    featuredEnglish: "Costume"
  },

  categories: [
    { number: "01", name: "器械道具", english: "WEAPONS", link: "#products" },
    { number: "02", name: "武术服装", english: "COSTUMES", link: "#uniforms" },
    { number: "03", name: "训练配件", english: "ACCESSORIES", link: "#training-accessories" }
  ],

  products: [
    {
      name: "训练刀",
      english: "Performance Broad Sword",
      description: "适合套路练习、演出和比赛展示。<br>Lightweight broad sword for routines, shows and competition display.",
      price: "",
      note: "多尺寸可选 / Sizes available",
      tag: "参考商品 / Reference",
      art: "art-broadsword",
      featured: true,
      image: "assets/xunliandao.jpg",
      sizes: ["56cm", "58cm", "60cm", "62cm", "64cm", "66cm", "68cm", "70cm", "72cm", "74cm", "76cm", "78cm"]
    },
    {
      name: "竞赛刀",
      english: "Competition Broad Sword",
      description: "适合竞赛套路与日常训练，刀身轻巧顺手，方便完成快速动作。<br>For competition routines and daily training, light and easy to control.",
      price: "",
      note: "多尺寸可选 / Sizes available",
      tag: "参考商品 / Reference",
      art: "art-broadsword",
      featured: false,
      image: "assets/jingsaidao-new.jpg",
      sizes: ["男1", "男2", "男3", "男4", "男5", "男6", "男7", "男8", "男9", "女1", "女2", "女3", "女4", "女5", "女6", "女7"]
    },
    {
      name: "竞赛南刀",
      english: "Competition Nan Dao",
      description: "适合南拳南刀项目竞赛套路与专项训练，按规格选择尺寸。<br>For Nan Dao routines and dedicated competition training.",
      price: "",
      note: "尺寸选择 / Size",
      tag: "参考商品 / Reference",
      art: "art-broadsword",
      featured: false,
      image: "assets/jingsai-nandao.jpg",
      sizes: ["1#", "2#", "3#", "4#", "5#", "6#", "7#", "8#"]
    },
    {
      name: "训练剑",
      english: "Training Sword",
      description: "适合初学者与进阶套路训练，握感稳定，便于控制剑花与身法。<br>Stable training straight sword for beginners and routine practice.",
      price: "",
      note: "儿童 / 成人 · Kids / Adults",
      art: "art-straightsword",
      featured: false,
      image: "assets/xublianjian.jpg",
      sizes: ["56cm", "58cm", "60cm", "62cm", "64cm", "66cm", "68cm", "70cm", "72cm", "74cm", "76cm", "78cm"]
    },
    {
      name: "竞赛剑",
      english: "Competition Sword",
      description: "适合竞赛套路与表演训练，剑身轻盈，动作表现更利落。<br>Light competition straight sword for sharp routine performance.",
      price: "",
      note: "多尺寸可选 / Sizes available",
      tag: "参考商品 / Reference",
      art: "art-straightsword",
      featured: false,
      image: "assets/jingsaijian-new.jpg",
      sizes: ["男1", "男2", "男3", "男4", "男5", "男6", "男7", "男8", "男9", "女1", "女2", "女3", "女4", "女5", "女6", "女7"]
    },
    {
      name: "普通训练南棍 / 普通训练棍",
      english: "Nan Gun / Staff",
      description: "适合基本功、套路与团体训练，提供不同长度选择。<br>For basics, routines and group practice with multiple lengths.",
      price: "",
      note: "可按身高配 / Match by height",
      art: "art-staff",
      featured: false,
      image: "assets/xunliangun.jpg",
      sizes: ["125cm", "130cm", "135cm", "140cm", "145cm", "150cm", "155cm", "160cm", "165cm", "170cm", "175cm", "180cm"]
    },
    {
      name: "标准竞赛棍",
      english: "Competition Cudgel",
      description: "适合竞赛套路和高频训练，轻巧顺手，便于发力与控制。<br>Standard staff for competition routines and frequent training.",
      price: "",
      note: "多长度可选 / Lengths available",
      tag: "参考商品 / Reference",
      art: "art-staff",
      featured: false,
      image: "assets/jingsaigun.PNG",
      genders: ["男", "女"],
      sizes: ["150cm", "155cm", "160cm", "165cm", "170cm", "175cm", "180cm"]
    },
    {
      name: "竞赛南棍",
      english: "Competition Nan Gun",
      description: "适合南拳南棍项目训练与比赛，长度选择完整，便于按身高搭配。<br>For Nan Gun training and competition, choose length by height.",
      price: "",
      note: "多长度可选 / Lengths available",
      tag: "参考商品 / Reference",
      art: "art-staff",
      featured: false,
      image: "assets/jingsaigun.PNG",
      genders: ["男", "女"],
      sizes: ["150cm", "155cm", "160cm", "165cm", "170cm", "175cm", "180cm"]
    },
    {
      name: "训练枪",
      english: "Training Spear",
      description: "适合基础枪术训练和套路练习，长度选择完整，可按身高搭配。<br>Training spear for basics and routines, matched by height.",
      price: "",
      note: "可按身高配 / Match by height",
      tag: "参考商品 / Reference",
      art: "art-staff",
      featured: false,
      image: "assets/xunlianqiang-new.jpg",
      sizes: ["170cm", "175cm", "180cm", "185cm", "190cm", "195cm", "200cm", "205cm", "210cm", "215cm", "220cm", "225cm"]
    },
    {
      name: "标准竞赛枪",
      english: "Competition Spear",
      description: "适合竞赛套路与表演训练，轻巧顺手，便于完成枪花与发力动作。<br>Standard spear for competition and performance routines.",
      price: "",
      note: "多长度可选 / Lengths available",
      tag: "参考商品 / Reference",
      art: "art-staff",
      featured: false,
      image: "assets/jingsaiqiang.jpg",
      genders: ["男", "女"],
      sizes: ["170cm", "175cm", "180cm", "185cm", "190cm", "195cm", "200cm", "205cm", "210cm", "215cm", "220cm", "225cm"]
    },
    {
      name: "剑穗",
      english: "Sword Tassel",
      description: "适合搭配训练剑、竞赛剑和表演剑，提升器械完整度与舞台效果。<br>Sword tassels for training, competition and stage presentation.",
      price: "",
      note: "多色可选 / Colors available",
      tag: "配件 / Accessory",
      art: "art-straightsword",
      featured: false,
      image: "assets/jianshui.jpg",
      sizes: ["1#", "2#", "3#", "4#", "5#", "6#", "7#", "8#", "9#", "10#", "11#", "12#", "13#"]
    },
    {
      name: "刀彩",
      english: "Broadsword Tassel",
      description: "适合搭配表演刀、竞赛刀，颜色醒目，适合训练与表演。<br>Broad sword flags for training and performance.",
      price: "",
      note: "多色可选 / Colors available",
      tag: "配件 / Accessory",
      art: "art-broadsword",
      featured: false,
      image: "assets/daocai.jpg",
      sizes: ["A款1#", "A款2#", "A款3#", "A款4#", "A款5#", "A款6#", "A款7#", "A款8#", "A款9#", "A款10#", "B款1#", "B款2#", "B款3#", "B款4#", "B款5#", "B款6#", "B款7#"]
    },
    {
      name: "刀剑袋",
      english: "Weapon Bag",
      description: "适合收纳刀、剑等器械，方便训练携带和日常保护。<br>Weapon bag for carrying and protecting swords and other equipment.",
      price: "",
      note: "咨询现货 / Check stock",
      tag: "配件 / Accessory",
      art: "art-broadsword",
      featured: false,
      image: "assets/daojiandai-new.jpg"
    },
    {
      name: "武术地毯",
      english: "Training Mat",
      description: "适合武术训练、套路练习与表演场地铺设，可按场地需求咨询。<br>Training mat for wushu practice, routines and performance spaces.",
      price: "",
      note: "按场地咨询 / Enquire by space",
      tag: "训练配件 / Training Accessory",
      art: "art-staff",
      featured: false,
      image: "assets/wushu-mat.jpeg"
    }
  ],

  catalogItems: [
    {
      number: "01",
      name: "太极表演服",
      english: "Taiji Costume",
      description: "多色可选，可搭配腰带与队服方案。<br>Multiple colors available, with belt and team uniform options.",
      images: [
        "assets/changquan-taiji-costume-1.jpg",
        "assets/changquan-taiji-costume-2.jpg"
      ]
    },
    {
      number: "02",
      name: "南拳表演服",
      english: "Nanquan Costume",
      description: "适合南拳套路、比赛和舞台表演，可按款式与尺码咨询。<br>For Nanquan routines, competition and stage performance.",
      images: [
        "assets/nanquan-costume-1.jpg",
        "assets/nanquan-costume-2.jpg"
      ]
    },
    {
      number: "03",
      name: "长拳表演服",
      english: "Changquan Costume",
      description: "适合长拳套路、比赛和舞台表演，可按款式与尺码咨询。<br>For Changquan routines, competition and stage performance.",
      images: [
        "assets/changquan-costume-1.jpg",
        "assets/changquan-costume-2.jpg"
      ],
      id: "accessories"
    }
  ],

  servicePoints: ["尺寸建议 / Size advice", "批量报价 / Bulk enquiry", "队服定制 / Team uniforms", "器械搭配 / Equipment matching"],

  orderOptions: [
    "训练刀 Performance Broad Sword",
    "竞赛刀 Competition Broad Sword",
    "竞赛南刀 Competition Nan Dao",
    "训练剑 Training Sword",
    "竞赛剑 Competition Sword",
    "普通训练南棍 / 普通训练棍 Nan Gun / Staff",
    "标准竞赛棍 Competition Cudgel",
    "竞赛南棍 Competition Nan Gun",
    "训练枪 Training Spear",
    "标准竞赛枪 Competition Spear",
    "剑穗 Sword Tassel",
    "刀彩 Broadsword Tassel",
    "刀剑袋 Weapon Bag",
    "武术地毯 Training Mat",
    "太极表演服 Taiji Costume",
    "南拳表演服 Nanquan Costume",
    "长拳表演服 Changquan Costume",
    "团队采购 / 服装定制 Team Order / Costume Customization"
  ]
};
