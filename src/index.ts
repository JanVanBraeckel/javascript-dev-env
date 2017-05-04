import * as numeral from 'numeral';
import './index.scss';

const value = numeral(1000).format('0,0.00');
// tslint:disable-next-line:no-console
console.log(`test ${value}`);
