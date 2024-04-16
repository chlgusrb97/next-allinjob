import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  socialName: "카카오" | "구글";
  imageSrc: string;
};

export default function SocialLoginButton(props: Props) {
  const [popup, setPopup] = useState<Window | null>();

  const googleLoginHandler = () => {
    const googleOptions =
      "toolbar=no,scrollbars=no,resizable=no,status=no,menubar=no,width=500,height=600,top=50,left=50";
    const popup = window.open(
      `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_CALLBACK_URL}&response_type=token&scope=email`,
      "_blank",
      googleOptions,
    );
    setPopup(popup);
  };

  const kakaoLoginHandler = () => {
    const popup = window.open(
      `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_CALLBACK_URL}&response_type=code`,
      "_blank",
      "width=500,height=600,top=50,left=50",
    );
    setPopup(popup);
  };

  useEffect(() => {
    const hash = window.location.hash;
    const parsedHash = new URLSearchParams(hash.substring(1));
    const accessToken = parsedHash.get("access_token");

    if (accessToken) {
      window.opener.postMessage({ accessToken }, window.location.origin);
    }

    const kakaoHref = window.location.href;
    const code = new URL(kakaoHref).searchParams.get("code");

    if (code) {
      window.opener.postMessage({ code }, window.location.origin);
    }
  }, []);

  useEffect(() => {
    if (!popup) return;

    const getGoogleOAuthAccessToken = (e: MessageEvent) => {
      if (e.origin !== window.location.origin) return;
      const { accessToken } = e.data;
      if (accessToken) {
        popup.close();
        setPopup(null);
      }
    };

    const getKakaoOAuthAccessToken = (e: MessageEvent) => {
      if (e.origin !== window.location.origin) return;
      const { code } = e.data;
      if (code) {
        popup.close();
        setPopup(null);
      }
    };

    window.addEventListener("message", getKakaoOAuthAccessToken, false);

    return () => {
      window.removeEventListener("message", () => {
        if (props.socialName === "구글") getGoogleOAuthAccessToken;
        if (props.socialName === "카카오") getKakaoOAuthAccessToken;
      });
      popup?.close();
      setPopup(null);
    };
  }, [popup]);

  return (
    <button onClick={kakaoLoginHandler}>
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
