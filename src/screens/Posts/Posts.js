import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import Post from "../Posts/Post/Post";

const data = [
  {
    date: "2020-07-25T01:02:19.479Z",
    _id: "5f1b84f3bcd690379f9f1d30",
    cat: "electronics",
    title: "Iphone XR 256gb",
    price: "700",
    currency: "usd",
    region: "Gyumri, Shirak",
    imgUrl:
      "https://res.cloudinary.com/dgzlcuh8j/image/upload/v1595530496/post-iphoneXR_xtcyje.png",
    state: "used",
    desc:
      "iPhone XR, (ոճավորված է որպես Xr, «X» արտասանվում է որպես «թեն», «տաս»), Apple կորպորացիայի սմարթֆոն, որն օգտագործում է Apple A12 Bionic պրոցեսորը և iOS 12 օպերացիոն համակարգը, որոնք ներկայացվել են 2018 թվականի սեպտեմբերի 12–ին ավելի թանկարժեք iPhone XS–ի հետ միասին։",
    userId: {
      date: "2020-07-23T18:41:31.447Z",
      _id: "5f19daab1461a4d8372e4cf3",
      firstname: "Rafo",
      lastname: "Harutyunyan",
      email: "rafo@gmail.com",
      contact: "+37494286307",
    },
    __v: 0,
  },
  {
    date: "2020-07-25T01:02:19.479Z",
    _id: "5f1b8581bcd690379f9f1d31",
    cat: "electronics",
    title: "Mac pro 2020",
    price: "5999",
    currency: "usd",
    region: "Yerevan, Kentron",
    imgUrl:
      "https://res.cloudinary.com/dgzlcuh8j/image/upload/v1595533470/post-macpro_il7hxu.png",
    state: "new",
    desc:
      "The Mac Pro is a series of workstations and servers for professionals designed, manufactured and sold by Apple Inc. since 2006. The Mac Pro, in most configurations and in terms of speed and performance, is the most powerful computer that Apple offers. It is one of four desktop computers in the current Macintosh lineup, sitting above the consumer range Mac Mini and iMac, and alongside the all-in-one iMac Pro.",
    userId: {
      date: "2020-07-23T18:41:31.447Z",
      _id: "5f19da271461a4d8372e4cf2",
      firstname: "Vardan",
      lastname: "Khachatryan",
      email: "vardan@gmail.com",
      contact: "+37494460625",
    },
    __v: 0,
  },
  {
    date: "2020-07-25T01:02:19.479Z",
    _id: "5f1b859fbcd690379f9f1d32",
    cat: "electronics",
    title: "Macbook Pro 13inch 2018 ",
    price: "590000",
    currency: "amd",
    region: "Gyumri, Shirak",
    imgUrl:
      "https://res.cloudinary.com/dgzlcuh8j/image/upload/v1595534142/post-macbookpro_mx0f0e.jpg",
    state: "new",
    desc:
      "The MacBook Pro is a line of Macintosh portable computers introduced in January 2006, by Apple Inc. It is the higher-end model of the MacBook family, sitting above the consumer-focused MacBook Air, and is sold with 13- and 16-inch screens. A 17-inch version was sold from April 2006 to June 2012.The first-generation MacBook Pro used the design of the PowerBook G4, but replaced the PowerPC G4 chips with Intel Core processors, added a webcam, and introduced the MagSafe power connector. The 15-inch model was introduced in January 2006; the 17-inch model in April. Later revisions added Core 2 Duo processors and LED-backlit displays.",
    userId: {
      date: "2020-07-23T18:41:31.447Z",
      _id: "5f19da271461a4d8372e4cf2",
      firstname: "Vardan",
      lastname: "Khachatryan",
      email: "vardan@gmail.com",
      contact: "+37494460625",
    },
    __v: 0,
  },
  {
    date: "2020-07-23T20:06:20.313Z",
    _id: "5f1b85e2bcd690379f9f1d34",
    cat: "vehicles",
    title: "Mercedes-Benz S550 2016 SE",
    price: "79000",
    currency: "usd",
    region: "Gyumri, Shirak",
    imgUrl:
      "https://res.cloudinary.com/dgzlcuh8j/image/upload/v1595533487/post-mbsclass_i5w2z7.jpg",
    imgUrl2:
      "https://res.cloudinary.com/dgzlcuh8j/image/upload/v1595535113/post-bmsclass3_psiciz.jpg",
    imgUrl3:
      "https://res.cloudinary.com/dgzlcuh8j/image/upload/v1595535113/post-mbsclass4_rmqymk.jpg",
    imgUrl4:
      "https://res.cloudinary.com/dgzlcuh8j/image/upload/v1595535113/post-mbsclass2_t3yoxb.jpg",
    imgUrl5:
      "https://res.cloudinary.com/dgzlcuh8j/image/upload/v1595535113/post-mbsclass5_htwodi.jpg",
    state: "used",
    country: "Usa",
    desc:
      "Մերսեդես-Բենզ W222- ը Մերսեդես-Բենզի S-Դասի տարբերակներից է, որը արտադրվել է 2013 թվականից, և հանդիսանում է Մերսեդես-Բենզ W221- ի իրավահաջորդը: W222- ը նախագծվել է 2009 թվականի ընթացքում: Մեքենայի բնօրինակ նախագծային տարբերակը ստեղծվել է Կորեացի դիզայներ Իլ-հուն Յունի կողմից, որը ներշնչված է Մերսեդես-Բենզ F700 հայեցակարգային մեքենայից:[1] Արտաքին դիզայնը մշակվել է դիզայներների թիմի կողմից ՝ Ռոբերտ Լենիկի ղեկավարությամբ:[2] W222- ն ունի դիզայնի նախատիպ թեմա CLA- դասի և E- դասի մեքենաները (W213):",
    userId: {
      date: "2020-07-23T18:38:37.215Z",
      _id: "5f19d9b0f84853d741c9b5d9",
      firstname: "Karlen",
      lastname: "Suqiasyan",
      email: "karlen@gmail.com",
      contact: "+37498785792",
    },
    __v: 0,
  },
  {
    date: "2020-07-23T20:37:42.638Z",
    _id: "5f1b8639bcd690379f9f1d36",
    cat: "real-estate",
    title: "Norakaruyc bnakaran, 2024",
    price: "160000",
    currency: "usd",
    region: "Yerevan, Arabkir",
    imgUrl:
      "https://res.cloudinary.com/dgzlcuh8j/image/upload/v1595535626/post-apartment3_zbljz8.jpg",
    imgUrl2:
      "https://res.cloudinary.com/dgzlcuh8j/image/upload/v1595535626/post-apartment_bo9rna.jpg",
    imgUrl3:
      "https://res.cloudinary.com/dgzlcuh8j/image/upload/v1595535627/post-apartment2_byjysr.jpg",
    state: "to be built (2024)",
    desc:
      "Corporate housing is a term in the relocation industry that implies renting a furnished apartment, condo, or home on a temporary basis to individuals, military personnel, intern groups, or corporations as an alternative to a traditional hotel or an extended hotel stay. According to Corporate Housing Providers Association (CHPA), the industry's trade organization, corporate housing revenue was $10 billion in 2019[1] and $2.47 in 2010. The corporate housing industry has been a significant growth segment of the lodging industry for the past 20 years. As of 2015, the revenue generated by the industry reached $2.93 billion in the US, after a 7% increase over 2014, with an average stay of 84 nights.[2]",
    userId: {
      date: "2020-07-23T20:25:29.475Z",
      _id: "5f19f34c6883dbf210e9db90",
      firstname: "RealEstate",
      email: "real@gmail.com",
      contact: "+374101010",
      avatar:
        "https://res.cloudinary.com/dgzlcuh8j/image/upload/v1595536058/user-realestate_wpxty2.jpg",
      info: "Real Estate company, Address: Yerevan, Baghramyan 20",
    },
    __v: 0,
  },
  {
    date: "2020-07-28T21:19:15.499Z",
    _id: "5f21f10d01097f7eed81f98c",
    cat: "vehicles",
    region: "Գյումրի,Շիրակ",
    type: "exchange",
    state: "used",
    price: "42000",
    currency: "usd",
    title: "Mercedes Benz G-class 2009",
    desc:
      "Mercedes Benz G-class 2009Mercedes Benz G-class 2009Mercedes Benz G-class 2009Mercedes Benz G-class 2009Mercedes Benz G-class 2009Mercedes Benz G-class 2009Mercedes Benz G-class 2009Mercedes Benz G-class 2009Mercedes Benz G-class 2009Mercedes Benz G-class 2009Mercedes Benz G-class 2009Mercedes Benz G-class 2009Mercedes Benz G-class 2009Mercedes Benz G-class 2009Mercedes Benz G-class 2009Mercedes Benz G-class 2009Mercedes Benz G-class 2009Mercedes Benz G-class 2009Mercedes Benz G-class 2009Mercedes Benz G-class 2009Mercedes Benz G-class 2009Mercedes Benz G-class 2009Mercedes Benz G-class 2009Mercedes Benz G-class 2009Mercedes Benz G-class 2009Mercedes Benz G-class 2009Mercedes Benz G-class 2009Mercedes Benz G-class 2009",
    imgUrl:
      "https://i.pinimg.com/474x/e1/18/11/e11811d7c7942fe86afa760f6204f6de.jpg",
    imgUrl2: "",
    imgUrl3: "",
    imgUrl4: "",
    imgUrl5: "",
    role: "owner",
    contact: "+37477464241",
    userId: {
      date: "2020-07-23T18:41:31.447Z",
      _id: "5f19daab1461a4d8372e4cf3",
      firstname: "Rafo",
      lastname: "Harutyunyan",
      email: "rafo@gmail.com",
      contact: "+37494286307",
    },
    __v: 0,
  },
  {
    date: "2020-07-30T18:05:34.479Z",
    _id: "5f230f9495c7511a99882904",
    cat: "vehicles",
    region: "Գյումրի,Շիրակ",
    type: "exchange",
    state: "used",
    price: "30000",
    currency: "usd",
    title: "Mercedes-Benz E-class 2015 SE",
    desc:
      "The Mercedes-Benz E-Class is a range of executive cars manufactured by German automaker Mercedes-Benz in various engine and body configurations. Produced since 1953, the E-Class falls midrange in the Mercedes line-up, and has been marketed worldwide across five generations. Before 1993, the E in Mercedes-Benz nomenclature was a suffix following a vehicle's model number which stood for Einspritzmotor (German for fuel injection engine). It began to appear in the early 1960s, when that feature began to be utilized broadly in the maker's product line, and not just in its upper tier luxury and sporting models. By the launch of the facelifted W124 in 1993 fuel-injection was ubiquitous in Mercedes engines, and the E was adopted as a prefix (i.e., E 220) and the model line referred to officially as the E-Class (or E-Klasse). All generations of the E-Class have offered either rear-wheel drive or Mercedes' 4Matic four-wheel drive system. Historically, the E-Class is Mercedes-Benz' best-selling model, with more than 13 million sold by 2015.[1] The first E-Class series was originally available as four-door sedan, five-door station wagon, 2 door coupe and 2 door convertible. From 1997 to 2009, the equivalent coupe and convertible were sold under the Mercedes-Benz CLK-Class nameplate; which was actually based on the mechanical underpinnings of the smaller C-Class while borrowing the styling and some powertrains from the E-Class, a trend continued with the C207 E-Class coupe/convertible which was sold parallel to the W212 E-Class sedan/wagon. With the latest incarnation of the E-Class released for the 2017 model year, all body styles share the same W213 platform.",
    imgUrl:
      "https://i.pinimg.com/originals/bb/88/14/bb88146d6f258e2d6c1f980cb50261c8.jpg",
    imgUrl2:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQgdSFdhS_H4RS5_GFcuc6Y6j4xsLKXz2BD0Q&usqp=CAU",
    imgUrl3:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTlif_tO5Un62qKK_Gf8fyO6965PrddUvwTzQ&usqp=CAU",
    imgUrl4:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR8VfeBv0Hwtav4-IKXKriw2br3fk-w-jnolg&usqp=CAU",
    imgUrl5:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQuJKMa0lDnHHsj3i7ZfyIxSn1ZFGXrxSF8zQ&usqp=CAU",
    role: "owner",
    contact: "+37477464241",
    userId: {
      date: "2020-07-23T18:41:31.447Z",
      _id: "5f19daab1461a4d8372e4cf3",
      firstname: "Rafo",
      lastname: "Harutyunyan",
      email: "rafo@gmail.com",
      contact: "+37494286307",
    },
    __v: 0,
  },
  {
    date: "2020-07-30T18:25:24.252Z",
    _id: "5f232347553e973660c0cd43",
    cat: "culture-and-hobby",
    region: "Հայաստանից դուրս",
    type: "offer",
    state: "new",
    price: "1000000",
    currency: "usd",
    title: "Smallest Handmade Chess (Guinness World Record)",
    desc:
      "Artist Ara Ghazaryan has an exceptional eye for detail, particularly with his latest work, the world’s Smallest handmade chess set.  Made on an incredibly minute scale, the entire board with accompanied pieces measures a total of 15.3 x 15.3 mm (0.6 in x 0.6 in), a size that amounts to be smaller than a US quarter coin.",
    imgUrl:
      "https://www.guinnessworldrecords.com/Images/chess3_tcm25-486535.png",
    imgUrl2:
      "https://www.guinnessworldrecords.com/Images/chess_tcm25-486533.png",
    imgUrl3:
      "https://www.guinnessworldrecords.com/Images/chess_tcm25-486533.png",
    imgUrl4:
      "https://www.guinnessworldrecords.com/Images/chess_tcm25-486533.png",
    imgUrl5:
      "https://www.guinnessworldrecords.com/Images/chess_tcm25-486533.png",
    role: "owner",
    contact: "+37477464241",
    userId: {
      date: "2020-07-25T01:57:35.996Z",
      _id: "5f1b932199ea5c4cb2c73e54",
      firstname: "Narek",
      email: "narek@gmail.com",
    },
    __v: 0,
  },
  {
    date: "2020-08-01T08:46:10.163Z",
    _id: "5f252d0380d7e326edcaa799",
    cat: "other",
    region: "Երևան,Ավան",
    type: "exchange",
    state: "new",
    price: "100000",
    currency: "usd",
    title: "Matem_I_2013",
    desc: "deeeeeeeeeeeeeeeeeeeeee",
    imgUrl:
      "https://images-na.ssl-images-amazon.com/images/I/41X4gC7DRNL._SX333_BO1,204,203,200_.jpg",
    imgUrl2: "",
    imgUrl3: "",
    imgUrl4: "",
    imgUrl5: "",
    role: "owner",
    contact: "+37477464241",
    userId: {
      date: "2020-07-23T18:38:37.215Z",
      _id: "5f19d9b0f84853d741c9b5d9",
      firstname: "Karlen",
      lastname: "Suqiasyan",
      email: "karlen@gmail.com",
      contact: "+37498785792",
    },
    __v: 0,
  },
  {
    date: "2020-08-05T09:19:41.937Z",
    _id: "5f2a9798b67d80144ef2dd6a",
    cat: "vehicles",
    region: "Աշտարակ,Արագածոտն",
    type: "offer",
    state: "used",
    price: "30000000",
    currency: "amd",
    title: "VW Touareg 2013",
    desc:
      "The Volkswagen Touareg (German pronunciation: [ˈtuːaʁɛk]) is a mid-size luxury sport-utility vehicle (SUV) produced by German automaker Volkswagen since 2002 at the Volkswagen Bratislava Plant. The vehicle was named after the nomadic Tuareg people, inhabitants of the Saharan interior in North Africa.[1] As of its first generation, the Touareg was developed together with the Porsche Cayenne and the Audi Q7, sharing platforms and much technology. The vehicles were developed from the start as modern unibody SUVs, with all around independent suspension, and with the ambition of excellent performance both on and off the road. The Touareg's third generation is in production since 2018. The initial generation (2002–2010) offered an exceptional choice of engine blocks, including five-, six-, eight-, ten- and twelve-cylinder engine choices.",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/2018_Volkswagen_Touareg_V6_R-Line_TDi_Automatic_3.0_Front.jpg/280px-2018_Volkswagen_Touareg_V6_R-Line_TDi_Automatic_3.0_Front.jpg",
    imgUrl2: "",
    imgUrl3: "",
    imgUrl4: "",
    imgUrl5: "",
    role: "organization",
    contact: "+37477131313",
    userId: {
      date: "2020-08-05T09:19:41.981Z",
      _id: "5f2a96d7b67d80144ef2dd69",
      firstname: "poghos",
      lastname: "poghosyan",
      email: "poghos@gmail.com",
    },
    __v: 0,
  },
  {
    date: "2020-08-07T14:16:05.254Z",
    _id: "5f2d983e63bafc2d36f69023",
    cat: "real-estate",
    region: "Երևան,Կենտրոն",
    type: "offer",
    state: "used",
    price: "450000",
    currency: "amd",
    title: "For Rent, Presidential Residence, 26 Baghramyan",
    desc:
      "The Residence of the President of Armenia (Armenian: Հայաստանի Հանրապետության նախագահի նստավայր; Hayastani Hanrapetut'yun Nakhagahi Nstavayr) is located at 26 Baghramyan Avenue in Yerevan. Some documents cite the building address as 26/1 Baghramyan Ave. The building was designed by Mark Grigorian as the premises for the Council of Ministers of the Armenian Soviet Socialist Republic and completed in 1951.[2] It served as the residence of the president of Armenia from 11 November 1991 until 9 April 2018, when Armenia was officially turned into parliamentary republic, and the building became the official residence of the prime minister.[3] The President's Residence was moved to Mashtots Avenue.[4] On 8 November 2018, the Armenian government approved an initiative to relocate the Prime Minister's Residence to Government House 1 and reallocate the building on Baghramyan Avenue 26 again as President's Residence.",
    imgUrl:
      "https://factor.am/wp-content/uploads/2018/04/1515564243-0259-1.jpeg",
    imgUrl2:
      "https://panorama.am/news_images/702/2103650_3/f5cbb247bc9eeb_5cbb247bc9f2a.thumb.jpg",
    imgUrl3: "",
    imgUrl4: "",
    imgUrl5: "",
    role: "organization",
    contact: "+37410101010",
    userId: {
      date: "2020-07-23T20:25:29.475Z",
      _id: "5f19f34c6883dbf210e9db90",
      firstname: "RealEstate",
      email: "real@gmail.com",
      contact: "+374101010",
      avatar:
        "https://res.cloudinary.com/dgzlcuh8j/image/upload/v1595536058/user-realestate_wpxty2.jpg",
      info: "Real Estate company, Address: Yerevan, Baghramyan 20",
    },
    __v: 0,
  },
  {
    date: "2020-08-07T14:16:05.254Z",
    _id: "5f2d9a7663bafc2d36f69024",
    cat: "electronics",
    region: "Երևան,Կենտրոն",
    type: "offer",
    state: "new",
    price: "1100",
    currency: "usd",
    title: "Sony PS5, 64gb Ram, 2020, New",
    desc:
      "The PlayStation 5 (officially abbreviated as PS5) is an upcoming home video game console developed by Sony Interactive Entertainment. Announced in 2019 as the successor to the PlayStation 4, it is scheduled to launch in late 2020. The platform is anticipated to launch in two varieties, as a base PlayStation 5 system incorporating an Ultra HD Blu-ray compatible optical disc drive for retail game support alongside digital distribution via the PlayStation Store, and a lower-cost Digital variant lacking the disc drive while retaining digital download support. The PlayStation 5 features a customized solid state drive designed for high-speed data streaming to enable significant improvements in graphical performance. The hardware also features a custom AMD GPU capable of ray tracing, support for 4K resolution displays and high framerates, new audio hardware for real-time 3D audio effects, and backward compatibility with most PlayStation 4 and PlayStation VR games.",
    imgUrl:
      "https://www.gizchina.com/wp-content/uploads/images/2020/05/sVfA5TCDJhxCeGqvuMkuiB.png",
    imgUrl2:
      "https://cdn.vox-cdn.com/thumbor/Cawl1O0NmDk4Pus22CDrZwZlAMQ=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/20030860/horizontal.jpg",
    imgUrl3: "",
    imgUrl4: "",
    imgUrl5: "",
    role: "owner",
    contact: "+37494460625",
    userId: {
      date: "2020-07-23T18:41:31.447Z",
      _id: "5f19da271461a4d8372e4cf2",
      firstname: "Vardan",
      lastname: "Khachatryan",
      email: "vardan@gmail.com",
      contact: "+37494460625",
    },
    __v: 0,
  },
  {
    date: "2020-08-16T13:06:47.099Z",
    _id: "5f39429b8891147050e38eb6",
    cat: "electronics",
    region: "Գյումրի,Շիրակ",
    type: "offer",
    state: "new",
    price: "2499",
    currency: "usd",
    title: "RTX 2080 Ti 11G Dual-Fan OC Edition",
    desc:
      "Brand ASUS Graphics Coprocessor NVIDIA GeForce RTX 2080 Ti Video Output Interface DisplayPort, HDMI Chipset Brand Nvidia Memory Speed 1635 MHz //DetailedDescription// Powered by NVIDIA Turing with 1650 MHz Boost Clock (OC Mode), 4352 CUDA cores and overclocked 11GB GDDR6 memory Supports up-to 4 monitors with DisplayPort 1. 4, HDMI 2. 0 and a VR headset via USB Type C ports Wing-Blade Fans boasts IP5X dust-resistance and operates at 0 dB levels when temperatures hit below 55C. Gpu Tweak II makes monitoring performance and streaming in real time easier than ever, and includes additional software like Game Booster, X Split Game caster, WT Fast and Quantum Cloud Protective back plate features a durable aluminum construction to prevent PCB flex and trace damage. Resolution - Digital Max Resolution - 7680x4320",
    imgUrl:
      "https://images-na.ssl-images-amazon.com/images/I/91bG2qFc7TL._AC_SX679_.jpg",
    imgUrl2: "",
    imgUrl3: "",
    imgUrl4: "",
    imgUrl5: "",
    role: "owner",
    contact: "+37443434360",
    userId: {
      date: "2020-07-23T18:41:31.447Z",
      _id: "5f19da271461a4d8372e4cf2",
      firstname: "Vardan",
      lastname: "Khachatryan",
      email: "vardan@gmail.com",
      contact: "+37494460625",
    },
    __v: 0,
  },
  {
    date: "2020-08-16T22:04:19.660Z",
    _id: "5f39c3fa8994770017088a40",
    cat: "electronics",
    region: "Երևան,Կենտրոն",
    type: "offer",
    state: "new",
    price: "900",
    currency: "usd",
    title: "Iphone XR test",
    desc: "iphone desc",
    imgUrl:
      "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-xr-red-select-201809?wid=441&hei=529&fmt=jpeg&qlt=95&op_usm=0.5,0.5&.v=1551226038669",
    imgUrl2: "",
    imgUrl3: "",
    imgUrl4: "",
    imgUrl5: "",
    role: "owner",
    contact: "+37477464241",
    userId: {
      date: "2020-07-23T18:41:31.447Z",
      _id: "5f19daab1461a4d8372e4cf3",
      firstname: "Rafo",
      lastname: "Harutyunyan",
      email: "rafo@gmail.com",
      contact: "+37494286307",
    },
    __v: 0,
  },
  {
    date: "2020-08-18T15:31:04.390Z",
    _id: "5f3bf89639fcb00017bd24a8",
    cat: "appliances",
    region: "Գյումրի,Շիրակ",
    type: "exchange",
    state: "new",
    price: "45000",
    currency: "usd",
    title: "Fizika_I_2014",
    desc: "",
    imgUrl: "",
    imgUrl2: "",
    imgUrl3: "",
    imgUrl4: "",
    imgUrl5: "",
    role: "owner",
    contact: "+37477464210",
    userId: {
      date: "2020-07-23T18:41:31.447Z",
      _id: "5f19daab1461a4d8372e4cf3",
      firstname: "Rafo",
      lastname: "Harutyunyan",
      email: "rafo@gmail.com",
      contact: "+37494286307",
    },
    __v: 0,
  },
];

const Posts = () => {
  const posts = data.map((prod) => {
    return (
      <Post
        // line below is 'opt' (avoids)
        key={prod._id}
        id={prod._id}
        imgUrl={prod.imgUrl}
        price={prod.price}
        title={prod.title}
        currency={prod.currency}
      ></Post>
    );
  });

  return (
    <ScrollView>
      <View style={[styles.posts, styles.centerFlex]}>{posts}</View>
    </ScrollView>
  );
};

export default Posts;

// PROVIDE HIGH CODE ACCURANCY (css)
const styles = StyleSheet.create({
  centerFlex: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  posts: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: 'baseline',
  },
});
