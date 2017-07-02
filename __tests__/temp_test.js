function callback(data) {
  data = new GetGeoLocation();
  return expect(data.returnLocation).resolves.toHaveProperty("latitude");
  done();

  fetchData(callback);
}
<GetGeoLocation />
