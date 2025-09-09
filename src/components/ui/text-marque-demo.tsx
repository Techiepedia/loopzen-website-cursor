import React from 'react';
import TextMarque from '@/components/ui/text-marque';

function TextMarqueDemo() {
  return (
    <>
      <div className='h-[500px] grid place-content-center'>
        <TextMarque
          delay={500}
          baseVelocity={-3}
          clasname='font-bold tracking-[-0.07em] leading-[90%]'
        >
          Star the repo if you like it
        </TextMarque>
        <TextMarque
          delay={500}
          baseVelocity={3}
          clasname='font-bold tracking-[-0.07em] leading-[90%]'
        >
          Share it if you like it
        </TextMarque>
      </div>
    </>
  );
}

export { TextMarqueDemo as DemoOne };
