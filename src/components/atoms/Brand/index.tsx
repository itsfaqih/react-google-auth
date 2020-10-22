import React from 'react';

interface Props {
  href: string;
}

export default function Brand({ href }: Props) {
  return (
    <a href={href} className="text-2xl font-bold text-gray-700">
      ToDo
    </a>
  );
}
