import React, { useEffect } from 'react';
import Typed from 'typed.js';

export default function Title({ title }: { title: string }) {
  const el = React.useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [title],
      typeSpeed: 50,
      cursorChar: '_',
      onComplete(self: Typed) {
        // change cursor to .
        self.cursor.innerText = '.';
      },
    });

    return () => {
      typed.destroy();
    };
  });

  return (
    <h1 className='text-left text-5xl font-bold md:text-8xl'>
      <span ref={el}></span>
    </h1>
  );
}
