const f1 = require('./f1');
const locations = require('../locations.json');
test('F1 test for Budapest 2024-09-02', async () => {
    const r = await f1(locations.Budapest.latitude,locations.Budapest.longitude,"2024-09-02");
    console.log(`budapest: ${locations.Budapest.latitude} ${locations.Budapest.longitude}`)
    expect(r).toEqual(25);
});
test('F1 test for Szeged 2024-01-01', async () => {
    const r = await f1(locations.Szeged.latitude, locations.Szeged.longitude, "2024-01-01");
    expect(r).toEqual(5);
});
test('F1 test for Zamárdi 2024-06-06', async () => {
    const r = await f1(locations.Zamárdi.latitude, locations.Zamárdi.longitude, "2024-06-06");
    expect(r).toEqual(22);
});