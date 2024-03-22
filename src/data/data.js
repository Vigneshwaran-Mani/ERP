import { MdOutlineSupervisorAccount } from 'react-icons/md';
import { BsBoxSeam } from 'react-icons/bs';
import { FiBarChart, FiShoppingCart, FiStar } from 'react-icons/fi';
import { HiOutlineRefresh } from 'react-icons/hi';
import { BsChatLeft } from 'react-icons/bs';


const stackedChartData = [
    [
      { x: 'Jan', y: 111.1 },
      { x: 'Feb', y: 127.3 },
      { x: 'Mar', y: 143.4 },
      { x: 'Apr', y: 159.9 },
      { x: 'May', y: 159.9 },
      { x: 'Jun', y: 159.9 },
      { x: 'July', y: 159.9 },
    ],
    [
      { x: 'Jan', y: 111.1 },
      { x: 'Feb', y: 127.3 },
      { x: 'Mar', y: 143.4 },
      { x: 'Apr', y: 159.9 },
      { x: 'May', y: 159.9 },
      { x: 'Jun', y: 159.9 },
      { x: 'July', y: 159.9 },
    ],
  ];

export const stackedCustomSeries = [

    { dataSource: stackedChartData[0],
      xName: 'x',
      yName: 'y',
      name: 'Budget',
      type: 'StackingColumn',
      background: 'blue',
  
    },
  
    { dataSource: stackedChartData[1],
      xName: 'x',
      yName: 'y',
      name: 'Expense',
      type: 'StackingColumn',
      background: 'red',
  
    },
  
  ];
  
export const stackedPrimaryXAxis = {
    majorGridLines: { width: 0 },
    minorGridLines: { width: 0 },
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 },
    interval: 1,
    lineStyle: { width: 0 },
    labelIntersectAction: 'Rotate45',
    valueType: 'Category',
  };
  
export const stackedPrimaryYAxis = {
    lineStyle: { width: 0 },
    minimum: 100,
    maximum: 400,
    interval: 100,
    majorTickLines: { width: 0 },
    majorGridLines: { width: 1 },
    minorGridLines: { width: 1 },
    minorTickLines: { width: 0 },
    labelFormat: '{value}',
  };

const lineChartData = [
    [
      { x: new Date(2005, 0, 1), y: 21 },
      { x: new Date(2006, 0, 1), y: 24 },
      { x: new Date(2007, 0, 1), y: 36 },
      { x: new Date(2008, 0, 1), y: 38 },
      { x: new Date(2009, 0, 1), y: 54 },
      { x: new Date(2010, 0, 1), y: 57 },
      { x: new Date(2011, 0, 1), y: 70 },
    ],
    [
      { x: new Date(2005, 0, 1), y: 28 },
      { x: new Date(2006, 0, 1), y: 44 },
      { x: new Date(2007, 0, 1), y: 48 },
      { x: new Date(2008, 0, 1), y: 50 },
      { x: new Date(2009, 0, 1), y: 66 },
      { x: new Date(2010, 0, 1), y: 78 },
      { x: new Date(2011, 0, 1), y: 84 },
    ],
  
    [
      { x: new Date(2005, 0, 1), y: 10 },
      { x: new Date(2006, 0, 1), y: 20 },
      { x: new Date(2007, 0, 1), y: 30 },
      { x: new Date(2008, 0, 1), y: 39 },
      { x: new Date(2009, 0, 1), y: 50 },
      { x: new Date(2010, 0, 1), y: 70 },
      { x: new Date(2011, 0, 1), y: 100 },
    ],
  ];

export const lineCustomSeries = [
    { dataSource: lineChartData[0],
      xName: 'x',
      yName: 'y',
      name: 'Germany',
      width: '2',
      marker: { visible: true, width: 10, height: 10 },
      type: 'Line' },
  
    { dataSource: lineChartData[1],
      xName: 'x',
      yName: 'y',
      name: 'England',
      width: '2',
      marker: { visible: true, width: 10, height: 10 },
      type: 'Line' },
  
    { dataSource: lineChartData[2],
      xName: 'x',
      yName: 'y',
      name: 'India',
      width: '2',
      marker: { visible: true, width: 10, height: 10 },
      type: 'Line' },
  
  ];
  
export const LinePrimaryXAxis = {
    valueType: 'DateTime',
    labelFormat: 'y',
    intervalType: 'Years',
    edgeLabelPlacement: 'Shift',
    majorGridLines: { width: 0 },
    background: 'white',
  };
  
export const LinePrimaryYAxis = {
    labelFormat: '{value}%',
    rangePadding: 'None',
    minimum: 0,
    maximum: 100,
    interval: 20,
    lineStyle: { width: 0 },
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 },
  };

export const earningData = [
    {
        icon: <MdOutlineSupervisorAccount />,
        amount: '39,354',
        percentage: '-4%',
        title: 'Customers',
        iconColor: '#03C9D7',
        iconBg: '#E5FAFB',
        pcColor: 'red-600',
    },
    {
        icon: <BsBoxSeam />,
        amount: '4,396',
        percentage: '+23%',
        title: 'Products',
        iconColor: 'rgb(255, 244, 229)',
        iconBg: 'rgb(254, 201, 15)',
        pcColor: 'green-600',
    },
    {
        icon: <FiBarChart />,
        amount: '423,39',
        percentage: '+38%',
        title: 'Sales',
        iconColor: 'rgb(228, 106, 118)',
        iconBg: 'rgb(255, 244, 229)',

        pcColor: 'green-600',
    },
    {
        icon: <HiOutlineRefresh />,
        amount: '39,354',
        percentage: '-12%',
        title: 'Visitors',
        iconColor: 'rgb(0, 194, 146)',
        iconBg: 'rgb(235, 250, 242)',
        pcColor: 'red-600',
    },
];

export const weeklyStats = [
    {
        icon: <FiShoppingCart />,
        amount: '-$560',
        title: 'Top Sales',
        desc: 'Johnathan Doe',
        iconBg: '#FB9678',
        pcColor: 'red-600',
    },
    {
        icon: <FiStar />,
        amount: '-$560',
        title: 'Best Seller',
        desc: 'MaterialPro Admin',
        iconBg: 'rgb(254, 201, 15)',
        pcColor: 'red-600',
    },
    {
        icon: <BsChatLeft />,
        amount: '+$560',
        title: 'Most Commented',
        desc: 'Ample Admin',
        iconBg: '#00C292',
        pcColor: 'green-600',
    },
];

export const SparklineAreaData = [
    { x: 1, yval: 2 },
    { x: 2, yval: 6 },
    { x: 3, yval: 8 },
    { x: 4, yval: 5 },
    { x: 5, yval: 10 },

];

export const ecomPieChartData = [
    { x: '2018', y: 18, text: '35%' },
    { x: '2019', y: 18, text: '15%' },
    { x: '2020', y: 18, text: '25%' },
    { x: '2021', y: 18, text: '25%' },
];

export const dropdownData = [
    {
        Id: '1',
        Time: 'March 2021',
    },
    {
        Id: '2',
        Time: 'April 2021',
    }, {
        Id: '3',
        Time: 'May 2021',
    },
];

export const scheduleData = [
  {
    Id: 7,
    Subject: 'Order-007',
    Description: 'Order id: 007, Product id: 108, Customer Name: Rachel, Total: $1320, Status: Pending',
    StartTime: '2024-03-20T04:00:00.000Z',
    EndTime: '2024-03-20T05:30:00.000Z',
    CategoryColor: '#1aaa55',
  },
  {
    Id: 2,
    Subject: 'Order-002',
    Description: 'Order id: 002, Product id: 104, Customer Name: Chris, Total: $150, Status: Cancelled',
    StartTime: '2024-03-18T06:30:00.000Z',
    EndTime: '2024-03-18T08:30:00.000Z',
    CategoryColor: '#357cd2',
  },
  {
    Id: 3,
    Subject: 'Order-003',
    Description: 'Order id: 003, Product id: 110, Customer Name: Steve, Total: $1760, Status: Confirmed',
    StartTime: '2024-04-02T04:00:00.000Z',
    EndTime: '2024-04-02T05:30:00.000Z',
    CategoryColor: '#7fa900',
  },
  {
    Id: 4,
    Subject: 'Order-004',
    Description: 'Order id: 004, Product id: 103, Customer Name: Phoebe, Total: $550, Status: Deliverd',
    StartTime: '2024-03-15T07:30:00.000Z',
    EndTime: '2024-03-15T09:00:00.000Z',
    CategoryColor: '#ea7a57',
  },
  {
    Id: 5,
    Subject: 'Order-005',
    Description: 'Order id: 005, Product id: 109, Customer Name: Chandler, Total: $2550, Status: Confirmed',
    StartTime: '2024-03-28T06:30:00.000Z',
    EndTime: '2024-03-28T08:30:00.000Z',
    CategoryColor: '#00bdae',
  },
  {
    Id: 6,
    Subject: 'Order-006',
    Description: 'Order id: 006, Product id: 106, Customer Name: Joey, Total: $1250, Status: Deliverd',
    StartTime: '2024-03-25T04:00:00.000Z',
    EndTime: '2024-03-25T05:30:00.000Z',
    CategoryColor: '#f57f17',
  },  
  {
    Id: 1,
    Subject: "Order-001",
    Description: "Order id: 001, Product id: 105, Customer Name: Georgina, Total: $2200, Status: Delivered",
    StartTime: '2024-03-21T09:00:00.000Z',
    EndTime: '2024-03-21T10:30:00.000Z',
  },
];

export const orderData = [
  {
    oid: "001",
    pid: 105,
    name: "Georgina",
    details: "Mobile",
    total: "$2200",
    date: "21-03-2024",
    status: "delivered",
  },
  {
    oid: "002",
    pid: 104,
    name: "Chris",
    details: "Baby Dress",
    total: "$150",
    date: "18-03-2024",
    status: "cancelled",
  },
  {
    oid: "003",
    pid: 110,
    name: "Steve",
    details: "Fridge",
    total: "$1760",
    date: "02-04-2024",
    status: "confirmed",
  },
  {
    oid: "004",
    pid: 103,
    name: "Phoebe",
    details: "Sofa",
    total: "$550",
    date: "15-03-2024",
    status: "delivered",
  },
  {
    oid: "005",
    pid: 109,
    name: "Chandler",
    details: "All in One PC",
    total: "$2550",
    date: "28-03-2024",
    status: "confirmed",
  },
  {
    oid: "006",
    pid: 106,
    name: "Joey",
    details: "Tablet",
    total: "$1250",
    date: "25-03-2024",
    status: "delivered",
  },
  {
    oid: "007",
    pid: 108,
    name: "Rachel",
    details: "Shoe",
    total: "$1320",
    date: "20-03-2024",
    status: "pending",
  },
];

export const productData = [
  {
    pid: 101,
    name: "Laptop",
    description: "Laptop along with wireless mouse and wireless keyboard",
    category: "Electronics",
    price: "$2200",
    quantity: 20,
  },
  {
      pid: 102,
      name: "Study Table",
      description: "Study table along with bottle holder and mobile stand",
      category: "Furniture",
      price: "$700",
      quantity:15,
    },
    {
      pid: 103,
      name: "Sofa",
      description: "Sofa with cotton cusions and pillows",
      category: "Furniture",
      price: "$550",
      quantity: 40,
    },
    {
      pid: 104,
      name: "Baby dress",
      description: "Soft and smooth baby dress",
      category: "Clothing",
      price: "$50",
      quantity: 135,
    },
    {
      pid: 105,
      name: "Mobile",
      description: "Android 14 mobile with Type-C adapter",
      category: "Electronics",
      price: "$1150",
      quantity: 21,
    },
    {
      pid: 106,
      name: "Tablet",
      description: "Samsung tablet with Snapdragon 8 Gen2 Processor",
      category: "Electronics",
      price: "$1250",
      quantity: 65,
    },
    {
      pid: 107,
      name: "Battery",
      description: "Compatible battery for HP laptop",
      category: "Electronics",
      price: "$130",
      quantity: 22,
    },
    {
      pid: 108,
      name: "Shoe",
      description: "Comfortable Leather Shoe",
      category: "Accessories",
      price: "$660",
      quantity: 5,
    },
    {
      pid: 109,
      name: "All in One PC",
      description: "A fully integrated monitor and cpu",
      category: "Electronics",
      price: "$2550",
      quantity: 140,
    },
    {
      pid: 110,
      name: "Fridge",
      description: "LG fridge with dual door",
      category: "Electronics",
      price: "$1760",
      quantity: 90,
    },
];
