module.exports = {
  
  purge: ['./src/*/.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'display': ['Boutros'],
        'body': ['Boutros'],
      },
      colors:{
        'silver-tree': {
          DEFAULT: '#77BFA3',
          '50':  '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#DFF0E9',
          '300': '#BCE0D2',
          '400': '#9ACFBA',
          '500': '#77BFA3',
          '600': '#54AF8C',
          '700': '#438D70',
          '800': '#326B55',
          '900': '#224839'
        },
        'beryl-green': {
          DEFAULT: '#DDE7C7',
          '50':  '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#FFFFFF',
          '300': '#FFFFFF',
          '400': '#F3F6EB',
          '500': '#DDE7C7',
          '600': '#C7D8A3',
          '700': '#B2C880',
          '800': '#9CB95C',
          '900': '#829E44'
        },
        'tahuna-sands': {
          DEFAULT: '#EDEEC9',
          '50':  '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#FFFFFF',
          '300': '#FFFFFF',
          '400': '#FAFAF0',
          '500': '#EDEEC9',
          '600': '#E0E2A2',
          '700': '#D3D67B',
          '800': '#C6C955',
          '900': '#AFB338'
        },
        'pale-leaf': {
          DEFAULT: '#BFD8BD',
          '50':  '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#FFFFFF',
          '300': '#FDFEFD',
          '400': '#DEEBDD',
          '500': '#BFD8BD',
          '600': '#A0C59D',
          '700': '#81B27D',
          '800': '#629E5E',
          '900': '#4E7E4B'
        },
        'spring-rain': {
          DEFAULT: '#98C9A3',
          '50':  '#FFFFFF',
          '100': '#FFFFFF',
          '200': '#FCFEFD',
          '300': '#DBECDF',
          '400': '#B9DBC1',
          '500': '#98C9A3',
          '600': '#77B785',
          '700': '#56A568',
          '800': '#458353',
          '900': '#33623E'
        },
        'red': {
          DEFAULT: '#FF0000',
          '50':  '#FFE5E5',
          '100': '#FFCCCC',
          '200': '#FF9999',
          '300': '#FF6666',
          '400': '#FF3333',
          '500': '#FF0000',
          '600': '#CC0000',
          '700': '#990000',
          '800': '#660000',
          '900': '#330000'
        },
        'forest-green': {
          '50': '#f2faf3', 
          '100': '#e6f5e7', 
          '200': '#bfe6c3', 
          '300': '#99d69f', 
          '400': '#4db857', 
          '500': '#00990F', 
          '600': '#008a0e', 
          '700': '#00730b', 
          '800': '#005c09', 
          '900': '#004b07'
      },
      'amber': {
        '50': '#fffcf3', 
        '100': '#fff9e6', 
        '200': '#fff0c1', 
        '300': '#ffe69c', 
        '400': '#ffd451', 
        '500': '#ffc107', 
        '600': '#e6ae06', 
        '700': '#bf9105', 
        '800': '#997404', 
        '900': '#7d5f03'
    },zanah: {
      '50': '#fdfefd', 
      '100': '#fbfdfb', 
      '200': '#f5faf4', 
      '300': '#eff7ee', 
      '400': '#e2f0e1', 
      '500': '#d6ead4', 
      '600': '#c1d3bf', 
      '700': '#a1b09f', 
      '800': '#808c7f', 
      '900': '#697368'
  },
      'frostee': {
        '50': '#fefefe', 
        '100': '#fcfefc', 
        '200': '#f8fcf8', 
        '300': '#f4f9f3', 
        '400': '#ebf5eb', 
        '500': '#E3F1E2', 
        '600': '#ccd9cb', 
        '700': '#aab5aa', 
        '800': '#889188', 
        '900': '#6f766f'
    },
    'alabaster': {
      50: '#ffffff',
      100: '#fefefe',
      200: '#fefefe',
      300: '#fdfdfd',
      400: '#fbfbfb',
      500: '#F9F9F9',
      600: '#e0e0e0',
      700: '#bbbbbb',
      800: '#959595',
      900: '#7a7a7a',
    }, 'my-sin': {
      '50': '#fffbf4', 
      '100': '#fff8e9', 
      '200': '#ffedc8', 
      '300': '#ffe2a7', 
      '400': '#ffcc66', 
      '500': '#FFB624', 
      '600': '#e6a420', 
      '700': '#bf891b', 
      '800': '#996d16', 
      '900': '#7d5912'
  },
  'gunsmoke': {
    '50': '#f9f9f9', 
    '100': '#f3f3f3', 
    '200': '#e1e1e1', 
    '300': '#cecece', 
    '400': '#aaaaaa', 
    '500': '#858585', 
    '600': '#787878', 
    '700': '#646464', 
    '800': '#505050', 
    '900': '#414141'
},
'sazerac': {
  '50': '#fffefe', 
  '100': '#fffefc', 
  '200': '#fffcf8', 
  '300': '#fffaf3', 
  '400': '#fff7ea', 
  '500': '#FFF3E1', 
  '600': '#e6dbcb', 
  '700': '#bfb6a9', 
  '800': '#999287', 
  '900': '#7d776e'
},
'cape-cod': {
  '50': '#f6f6f6', 
  '100': '#ededed', 
  '200': '#d1d1d1', 
  '300': '#b5b5b5', 
  '400': '#7e7e7e', 
  '500': '#464646', 
  '600': '#3f3f3f', 
  '700': '#353535', 
  '800': '#2a2a2a', 
  '900': '#222222'
}
      }

    },
  },
  
 
 
  variants: {
    extend: {},
  },
  plugins: [],
}
