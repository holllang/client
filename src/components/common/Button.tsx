import React, { useState } from 'react';

interface ButtonPropsType
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  property?: 'primary' | 'secondary' | 'question' | 'small' | 'detail';
  disabled?: boolean;
  loading?: boolean;
  type?: 'button' | 'submit' | 'reset' | undefined;
  children?: React.ReactElement | string;
}

export default function Button({
  property = 'primary',
  disabled = false,
  loading = false,
  type = 'button',
  children,
  ...props
}: ButtonPropsType) {
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const setClassNameByProperty = (property: string) => {
    switch (property) {
      case 'primary':
        return isButtonClicked
          ? 'bg-main-4  text-[2.2rem]'
          : 'bg-main-2 hover:bg-main-4 text-[2.2rem]';
      case 'secondary':
        return isButtonClicked
          ? ' text-[2.2rem] bg-gray-4'
          : ' text-[2.2rem] hover:bg-gray-4 bg-gray-2';
      case 'question':
        return isButtonClicked
          ? 'bg-main-4 border-2 border-main-4 text-[2rem]'
          : 'bg-gray-0 hover:bg-main-4 border-2 border-main-4 text-[2rem]';
      case 'small':
        return isButtonClicked
          ? 'bg-main-4 text-[1.8rem]'
          : 'bg-main-2 hover:bg-main-4 text-[1.8rem]';
      case 'detail':
        return isButtonClicked
          ? 'bg-main-4 text-[1.8rem] rounded-[20px]'
          : 'bg-sub-1 hover:bg-main-4 text-[1.8rem] rounded-[20px]';
      default:
        return '';
    }
  };

  return (
    <button
      onClick={() => setIsButtonClicked(true)}
      type={type}
      disabled={isButtonClicked}
      className={`flex w-full items-center justify-center rounded-[3rem] py-[2rem] font-normal text-gray-8 duration-150 ease-in disabled:cursor-not-allowed
      ${setClassNameByProperty(property)}`}
      {...props}
    >
      {children}
    </button>
  );
}
