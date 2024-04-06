import Image from "next/image";

type Props = {
  socialName: "카카오" | "구글";
  imageSrc: string;
};

export default function SocialLoginButton(props: Props) {
  return (
    <button>
      <Image
        className="mb-3"
        src={props.imageSrc}
        alt={`${props.socialName} 로그인`}
        width={80}
        height={80}
      />
      <p>{props.socialName} 로그인</p>
    </button>
  );
}
