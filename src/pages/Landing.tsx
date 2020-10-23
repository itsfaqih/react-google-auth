import LandingLayout from 'components/templates/LandingLayout';
import React from 'react';

export default function Landing() {
  return (
    <LandingLayout
      data={{
        hero: {
          text: (
            <>
              Manage <span className="text-indigo-600">ToDo</span> list easier
            </>
          ),
          desc: 'Just your typical to do application',
        },
      }}
    />
  );
}
