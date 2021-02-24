import superPhonePurification from '../app';

test.each([
  ['8 (927) 000-00-00', '+79270000000'],
  ['+7 960 000 00 00', '+79600000000'],
  ['+86 000 000 0000', '+860000000000'],
  ['8 915 33333-33', '+79153333333'],
])(
  ('test superPhonePurification'),
  (phone, result) => {
    expect(superPhonePurification(phone)).toBe(result);
  },
);
