import { types } from 'mobx-state-tree';

export default types
  .model('ToggleArray', {
    items: types.optional(types.array(types.string), [])
  })
  .actions(self => ({
    toggle: id => {
      if (self.items.includes(id)) {
        self.remove(id);
      } else {
        self.add(id);
      }
    },
    remove: id => {
      self.items = self.items.filter(i => i !== id);
    },
    add: id => {
      self.items.push(id);
    },
    reset: () => {
      self.items = [];
    }
  }));
