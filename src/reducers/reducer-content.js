const state = ['Human', 'Elf', 'Halfling'];

export default function(state = { name: 'Noname' }, action) {
  switch (action.type) {
    case 'IMPORT_CONTENT':
      return action.payload;

    default:
      return state;
  }
}
