import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <div className="absolute inset-0 flex justify-center items-center bg-orange-400">
      <div className="flex flex-col justify-center items-center w-[588px] p-[30px] rounded-3xl bg-white">
        <Link className="mb-16" href="/">
          <Image src="/logo.svg" alt="logo" width={292} height={247} />
          <h1 className="text-center text-[39px] text-orange-500">
            ALL IN JOB
          </h1>
        </Link>

        <div className="flex justify-center items-center w-full border-t border-line-normal pt-8 gap-[60px]">
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
