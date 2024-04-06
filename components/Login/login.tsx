import Image from "next/image";
import Link from "next/link";
import SocialLoginButton from "./Button/SocialLoginBtn";

export default function Login() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-orange-400">
      <div className="flex w-[588px] flex-col items-center justify-center rounded-3xl bg-white p-[30px]">
        <Link className="mb-16" href="/">
          <Image src="/logo.svg" alt="logo" width={292} height={247} />
          <h1 className="text-center text-[39px] text-orange-500">
            ALL IN JOB
          </h1>
        </Link>

        <div className="flex w-full items-center justify-center gap-[60px] border-t border-line-normal pt-8">
          <SocialLoginButton imageSrc="/kakaotalk.svg" socialName="카카오" />
          <SocialLoginButton imageSrc="/google.svg" socialName="구글" />
        </div>
      </div>
    </div>
  );
}
