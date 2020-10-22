import Button, { VARIANT } from 'components/atoms/Button';
import ListMolecule from 'components/molecules/ListMolecule';
import useToDo from 'hooks/useToDo';
import React from 'react';

interface Props {
  initialItems: string[];
}

export default function ToDoList({ initialItems }: Props) {
  const { items, action } = useToDo(initialItems);

  return (
    <div className="max-w-6xl mx-auto">
      <ListMolecule title="What to do" items={items} />
      <div className="flex mt-3">
        <Button variant={VARIANT.SECONDARY}>Add item</Button>
      </div>
    </div>
  );
}
