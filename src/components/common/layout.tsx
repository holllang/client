import React from 'react';

interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-screen w-screen justify-center bg-main-4 ">
      <div className="relative h-full w-full max-w-[450px] overflow-y-scroll bg-gray-0 px-[20px] ">
        {children}
      </div>
    </div>
  );
}
