import saleImage from '../assets/img/sale.png';
import assestImage from '../assets/img/assest.png';
import adminImage from '../assets/img/admin.png';
import accountImage from '../assets/img/accounting.png';
import customerImage from '../assets/img/customer.png';
import securityImage from '../assets/img/security.png';

export const OFFICES = [
  {
    name: 'Vietnam Office',
    descriptions: [
      '14F, APtower, Dien Bien Phu street, district 3, Ho Chi Minh city',
      'Business resigtration: 0315421202',
      'Tel: 028-3520-2367',
      'sales@dkinno.com',
      'Copyright 2021 DaouKiwoom Innocation C0., Ltd'
    ]
  },
  {
    name: 'Indonesia Office',
    descriptions: [
      'Menara Mandiri II, Jl. jend. Sudirman No.54-55, South Jakarta, DKI Jakarta 12190, Indonsia',
      'Tel: +62-21-5082-0038'
    ]
  },
  {
    name: 'Korea Office',
    descriptions: [
      '5th Fl, C-dong, PDC, 242, Pangyo-ro, Bundang-gu, Seongnam-si, Gyeonggi-do, Korea',
    ]
  }
]

export const PRICINGS = [
  {
    name: 'Free Test',
    description: 'Organize across all apps by hand',
    price: 0
  },
  {
    name: 'Low Price',
    description: 'Monthly Fixed Amount',
    price: 200000
  },
  {
    name: 'Easy Using Methods',
    description: 'Various Manuals',
    price: 200000
  },
  {
    name: 'Verified IT Service',
    description: 'On sale in 4 countries',
    price: 300000
  }
]

export const SERVICES = [
  {
    name: 'Assets',
    imageUrl: assestImage,
    isAlignLeftImage: true,
    items: [
      {
        name: 'Inventory Management',
        place: 'G-Book'
      }
    ]
  },
  {
    name: 'Accounting',
    imageUrl: accountImage,
    isAlignLeftImage: false,
    items: [
      {
        name: 'Accounting',
        place: 'G-Book'
      }
    ]
  },
  {
    name: 'HR & Admin',
    imageUrl: adminImage,
    isAlignLeftImage: true,
    items: [
      {
        name: 'Webmail',
        place: 'E-office'
      },
      {
        name: 'E- Apporval',
        place: 'E-office'
      },
      {
        name: 'E- Document',
        place: 'E-office'
      },
      {
        name: 'E- Check in.out',
        place: 'E-office'
      },
      {
        name: 'Webmail',
        place: 'E-office'
      },
      {
        name: 'Co-work/Project',
        place: 'E-office'
      }
    ]
  },
  {
    name: 'Sales',
    imageUrl: saleImage,
    isAlignLeftImage: false,
    items: [
      {
        name: 'Create Homepage Youtube & Instagram',
        place: 'Fieldmake'
      }
    ]
  },
  {
    name: 'Customer',
    imageUrl: customerImage,
    isAlignLeftImage: true,
    items: [
      {
        name: 'Customer Request Management',
        place: 'OQUFIE'
      }
    ]
  },
  {
    name: 'Security',
    imageUrl: securityImage,
    isAlignLeftImage: false,
    items: [
      {
        name: 'SSL server',
        place: 'SECTIGO'
      }
    ]
  }
]