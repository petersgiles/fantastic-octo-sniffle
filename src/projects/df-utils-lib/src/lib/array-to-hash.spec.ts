import { TestBed, async } from '@angular/core/testing';
import { arrayToHash } from './array-to-hash';

describe('AppComponent', () => {
    
  
    it('should create the app', () => {
        var arr = [
            {array: [{key: 'foo', val: 'bar'}], id: 1 },
            {array: [{key: 'hello', val: 'world' }], id: 2}
        ];
        const hash = arrayToHash(arr);
      //  expect(hash[0].key === 'foo');
        
      });
  });
  