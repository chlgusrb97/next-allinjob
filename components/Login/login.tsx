import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <div className="login-wrapper">
      <div className="flex w-[588px] flex-col items-center justify-center rounded-3xl bg-white p-[30px]">
        <Link className="mb-16" href="/">
          <Image src="/logo.svg" alt="logo" width={292} height={247} />
          <h1 className="text-center text-[39px] text-orange-500">
            ALL IN JOB
          </h1>
        </Link>

        <div className="flex w-full items-center justify-center gap-[60px] border-t border-line-normal pt-8">
          <button>
            <Image
              className="mb-3"
              src="/kakaotalk.svg"
              alt="카카오 로그인"
              width={80}
              height={80}
            />
            <p>카카오 로그인</p>
          </button>
          <button>
            <Image
              className="mb-3"
              src="/google.svg"
              alt="구글 로그인"
              width={80}
              height={80}
            />
            <p>구글 로그인</p>
          </button>
        </div>
      </div>
    </div>
  );
}
