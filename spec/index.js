import { expect } from 'chai';

import supertestPrefix from '../src';

describe('supertest-prefix', () => {
  const proxy = supertestPrefix('/api');

  const test = (before, after) =>
    () => {
      const { url } = proxy({ url: before });
      expect(url).to.be.eql(after);
    };

  const shouldAddPrefix = (before, after) =>
    it(`should add prefix to '${before}'`, test(before, after));

  shouldAddPrefix('/car', '/api/car');
  shouldAddPrefix('/car/1', '/api/car/1');
  shouldAddPrefix('http://localhost:8600/car', 'http://localhost:8600/api/car');
  shouldAddPrefix('http://localhost:8600/car/1', 'http://localhost:8600/api/car/1');
  shouldAddPrefix('http://www.google.com/car', 'http://www.google.com/api/car');
});
