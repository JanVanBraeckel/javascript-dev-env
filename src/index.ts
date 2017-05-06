import * as numeral from 'numeral';
import './index.scss';

const value = numeral(1000).format('0,0.00');
console.log(`test ${value}`);
