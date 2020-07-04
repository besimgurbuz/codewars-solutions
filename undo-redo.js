function undoRedo(object) {
  let actions = [];
  const setCallback = (k, v) => object[k] = v;
  const deleteCallback = (k, v = 0) => delete object[k];
  let cursor = -1;

  // add the initial properties to actions, so code now will be able to undo properly
  for (const [key, value] of Object.entries(object)) {
    actions.push({
      type: 'set',
      callback: setCallback,
      key,
      value,
      initial: true
    });
    ++cursor;
  }

  return {
    set: function (key, value) {
      this.modifyObject({ callback: setCallback, key, value });

      // clear previous actions if cursor behind from the top of the stack.
      if (cursor < (actions.length - 1)) {
        actions = actions.slice(0, cursor + 1);
      }

      actions.push({
        type: 'set',
        callback: setCallback,
        key,
        value
      });
      ++cursor;
      console.log('SET CALLED');
      console.log(cursor);
      console.log(actions);
    },
    get: function (key) {
      return object[key];
    },
    del: function (key) {
      const value = object[key];
      this.modifyObject({ callback: deleteCallback, key });

      // clear previous actions if cursor behind from the top of the stack.
      if (cursor < (actions.length - 1)) {
        actions = actions.slice(0, cursor + 1);
      }

      actions.push({
        type: 'del',
        callback: deleteCallback,
        key,
        value
      });
      ++cursor;
      console.log('DEL CALLED');
      console.log(cursor);
      console.log(actions);
    },
    undo: function () {
      const notInitActions = actions.slice(0, cursor + 1).find(action => !action.initial);

      if ((cursor - 1) < 0 || !notInitActions) {
        throw 'There is no operation to undo';
      }

      const lastAction = actions[cursor];
      const lastState = actions.slice(0, cursor).reverse().find(action => action.key === lastAction.key);
      if (lastState && lastState.type !== 'del') {
        this.modifyObject({ callback: lastState.callback, key: lastState.key, value: lastState.value });
      } else {
        const action = lastAction.type === 'set' ? deleteCallback : setCallback;
        this.modifyObject({ callback: action, key: lastAction.key, value: lastAction.value });
      }
      console.log('UNDO CALLED');
      console.log(cursor);
      console.log(actions);
      --cursor;
    },
    redo: function () {
      if (cursor >= (actions.length - 1)) {
        throw 'There is no committed undo operation to redo'
      }
      ++cursor;
      const nextAction = actions[cursor];
      // const action = nextAction.type === 'set' ? deleteCallback : setCallback;
      this.modifyObject({ callback: nextAction.callback, key: nextAction.key, value: nextAction.value });
      console.log('REDO CALLED');
      console.log(cursor);
      console.log(actions);
    },
    modifyObject: ({ callback, key, value = 0 }) => {
      callback(key, value);
    }
  };
}

const obj = {};

const undoR = undoRedo(obj);

undoR.set('x', 5);
undoR.set('y', 10);
undoR.set('y', 8);
undoR.del('y');
undoR.undo();
undoR.undo();
undoR.undo();
undoR.undo();

console.log(obj);

