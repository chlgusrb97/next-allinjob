import Image from "next/image";
import { profileImages } from "./profileImage";

export default function BasicInformation() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-orange-400">
      <form className="flex w-[988px] overflow-hidden rounded-3xl">
        <div className="w-1/2 bg-white p-10">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-[39px] text-orange-500">ALL IN JOB</h1>
            <p>OO 계정을 이용한 회원가입</p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-xl">
                이름
              </label>
              <input
                type="text"
                name="name"
                className="rounded p-3 shadow-inner outline-none"
                placeholder="이름을 입력하세요."
              />
              <p className="h-5 text-sm text-orange-500">
                2자리 이상의 한글만 입력해주세요.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="nickName" className="text-xl">
                닉네임
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  name="nickName"
                  className="flex-grow rounded p-3 shadow-inner outline-none"
                  placeholder="닉네임을 입력하세요."
                />
                <button className="rounded bg-background-primary p-3 text-black-200">
                  중복확인
                </button>
              </div>
              <p className="h-5 text-sm text-orange-500">
                2자리 이상의 영문, 한글, 숫자를 입력해주세요.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phoneNumber" className="text-xl">
                휴대폰 번호
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  name="phoneNumber"
                  className="flex-grow rounded p-3 shadow-inner outline-none"
                  placeholder="휴대폰 11자리를 입력하세요."
                />
                <button className="rounded bg-background-primary p-3 text-black-200">
                  인증요청
                </button>
              </div>
              <div className="mt-3 flex gap-2">
                <input
                  type="text"
                  name="certificationNumber"
                  disabled
                  className="flex-grow rounded bg-background-primary p-3 shadow-inner outline-none"
                />
                <button className="rounded bg-background-primary p-3 text-black-200">
                  인증확인
                </button>
              </div>
              <p className="h-5 text-sm text-orange-500">
                올바른 전화번호를 입력해주세요.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-xl">약관동의</h2>
              <p>필수항목 및 선택항목 약관에 동의해주세요.</p>
              <button className="flex items-center gap-3 rounded border border-black-200 p-3">
                <Image
                  src="/check_circle.svg"
                  alt="선택아이콘"
                  width={20}
                  height={20}
                />
                <h3 className="text-xl">전체동의</h3>
              </button>
              <ul className="flex flex-col gap-4 p-3">
                <li>
                  <label className="flex cursor-pointer items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Image
                        src="/check_circle.svg"
                        alt="선택아이콘"
                        width={20}
                        height={20}
                      />
                      <span className="bg-background-primary px-[3px] text-black-300">
                        필수
                      </span>
                      개인정보 수집 및 이용동의
                    </div>
                    <Image
                      src="/arrow_forward.svg"
                      alt="화살표아이콘"
                      width={24}
                      height={24}
                    />
                  </label>
                </li>
                <li>
                  <label className="flex cursor-pointer items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Image
                        src="/check_circle.svg"
                        alt="선택아이콘"
                        width={20}
                        height={20}
                      />
                      <span className="bg-background-primary px-[3px] text-black-300">
                        필수
                      </span>
                      정보보유기간
                    </div>
                    <Image
                      src="/arrow_forward.svg"
                      alt="화살표아이콘"
                      width={24}
                      height={24}
                    />
                  </label>
                </li>
              </ul>
            </div>
          </div>
          <button
            disabled
            className="mt-4 w-full rounded-full bg-background-primary py-3 text-black-200"
          >
            확인
          </button>
        </div>

        <div className="flex w-1/2 flex-col items-center bg-orange-100 p-10">
          <div className="flex flex-col items-center gap-3">
            <div className="flex h-[142px] w-[142px] items-center justify-center rounded-full bg-orange-500 p-2">
              <div className="over-hidden relative h-full w-full rounded-full bg-black-100">
                <Image
                  src="/profile/picked_user_profile_01.svg"
                  alt="프로필 이미지"
                  fill
                  className="rounded-full"
                />
              </div>
            </div>
            <p className="text-xl text-orange-500">
              프로필 사진을 선택해주세요!
            </p>
          </div>
          <ul className="mt-[30px] flex flex-wrap gap-4">
            {profileImages.map((profile) => (
              <li className="relative h-[129px] w-[127px] cursor-pointer">
                <Image src={profile.image} alt="프로필 이미지" fill />
                <Image
                  src="/profile_check_circle.svg"
                  alt="프로필 선택아이콘"
                  width={20}
                  height={20}
                  className="absolute right-[5px] top-[5px]"
                />
              </li>
            ))}
          </ul>
        </div>
      </form>
    </div>
  );
}
