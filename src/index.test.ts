import { expect } from 'chai';
import * as jsdom from 'jsdom';
import * as fs from 'fs';
const { JSDOM } = jsdom;

describe('index.html', () => {
  it('should say hello', (done) => {
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    const dom = new JSDOM(index);
    const h1 = dom.window.document.querySelector('h1');
    expect(h1.innerHTML).to.equal('Hello world');
    done();
  });
});
