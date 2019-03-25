import Character from '../src/js/character';

test('test for attak = 20', () => {
  const received = new Character('Мечник', 'Swordsman');
  received.damage(20);
  const expected = {
    attack: 10,
    defence: 40,
    health: 88,
    name: 'Мечник',
    type: 'Swordsman',
  };
  expect(received).toEqual(expected);
});

test('test for attak = 40', () => {
  const received = new Character('Мечник', 'Swordsman');
  received.damage(40);
  const expected = {
    attack: 10,
    defence: 40,
    health: 76,
    name: 'Мечник',
    type: 'Swordsman',
  };
  expect(received).toEqual(expected);
});
