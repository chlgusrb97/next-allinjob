import Image from "next/image";

type Props = {
  socialName: "카카오" | "구글";
  imageSrc: string;
};

export default function SocialLoginButton(props: Props) {
  const googleLoginHandler = () => {
    const googleOptions =
      "toolbar=no,scrollbars=no,resizable=no,status=no,menubar=no,width=500,height=600,top=50,left=50";

    window.open(
      `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_GOOGLE_CALLBACK_URL}&response_type=token&scope=email`,
      "_blank",
      googleOptions,
    );
  };

  return (
    <button onClick={googleLoginHandler}>
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
