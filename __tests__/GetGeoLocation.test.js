import React from 'react';
import GetGeoLocation from '../src/components/GetGeoLocation';

describe('GetGeoLocation', () => {
  it('Gets a latitude and logitude coordinate', done => {
    let getGeoLocation = new GetGeoLocation();
    // expect.assertions(1);
    return expect(getGeoLocation.returnLocation()).resolves.toContain("latitude");
    done();

  })
})
// it('Gets a latitude and logitude coordinate', done => {
//   let getGeoLocation = new GetGeoLocation();
//   // expect.assertions(1);
//   return expect(getGeoLocation.returnLocation()).resolves.toContain("latitude");
//   done();
//
// })
