import { useState } from 'react';

export default function useToDo(initialItems: string[] = []) {
  const [items, setItems] = useState<string[]>(initialItems);

  const addItem = (text: string) => setItems(items => [...items, text]);

  const removeItem = (index: number) =>
    setItems(items => [...items.filter((item, i) => i !== index)]);

  return {
    items,
    action: {
      add: addItem,
      remove: removeItem,
    },
  };
}
