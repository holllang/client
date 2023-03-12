import Button from '@components/common/Button';
import Input from '@components/common/Input';
import Modal from '@components/common/Modal';
import TopBar from '@components/common/TopBar';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const reg = /^[가-힣]{1,3}$/;

export default function Begin() {
  const router = useRouter();
  const [nickname, setNickname] = useState<string>('');
  const [modal, setModal] = useState<boolean>(false);
  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!reg.test(nickname)) return;
    if (nickname === '') {
      setModal(true);
    }
    localStorage.setItem('nickname', nickname);
    router.push('/question');
  };

  return (
    <div className="relative h-full">
      <TopBar />
      {modal && (
        <Modal
          message="닉네임을 입력해주세요"
          onCloseModal={() => {
            setModal(false);
          }}
        />
      )}
      <div className="mt-28">
        <p className="text-3xl font-bold">홀랑에 빠질 준비 되셨나요?</p>
        <p className="mt-3 text-lg text-gray-8">
          인공지능이 홀랑 빠질 취미로 안내할거에요
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mt-64 mb-[11.875rem]">
          <Input
            nickname={nickname}
            placeholder="닉네임을 세글자 이내로 입력해주세요"
            setNickname={setNickname}
          />

          <span
            className={`mt-2 ml-5 block text-[1rem] text-warning ${
              (reg.test(nickname) || nickname.length === 0) && 'text-white'
            }`}
          >
            한글로 세글자 이내까지 입력가능해요
          </span>
        </div>
        <div className="w-[full] ">
          <Button type="submit">홀랑 테스트 하러 가기</Button>
        </div>
      </form>
    </div>
  );
}
