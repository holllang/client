import React from 'react';

interface Top20ListProps {
  ranking: number;
  title: string;
  count: number;
}

export default function Top20List({ ranking, title, count }: Top20ListProps) {
  return (
    <div className="flex h-[4.375rem] w-full items-center justify-between rounded-[1.875rem] bg-sub-1 px-10 text-[1rem] font-normal text-gray-8">
      <span className="text-[1.25rem] font-normal text-main-4">
        {ranking}위
      </span>
      <span>{title}</span>
      <span>{count}명</span>
    </div>
  );
}
