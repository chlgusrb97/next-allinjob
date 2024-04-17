import { Dispatch, SetStateAction, useEffect, useState } from "react";

export const useSocialKakao = (
  // popup: Window | null | undefined,
  setPopup: Dispatch<SetStateAction<Window | null | undefined>>,
  setSocialAccessToken: Dispatch<SetStateAction<string>>,
) => {
  const [kakaoToken, setKakaoToken] = useState();

  const kakaoLoginPopup = () => {
    const popup = window.open(
      `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_KAKAO_CLIENT_ID}&redirect_uri=http://${location.host}/&scope=account_email`,
      "_blank",
      "width=500,height=600,top=50,left=50",
    );
    // setPopup(popup);

    const getKakaoOAuthAccessToken = async (e: MessageEvent) => {
      console.log("getKakao");
      const { kakaoToken } = e.data;
      // console.log(e.data);
      if (!kakaoToken) return;

      console.log(e);
      console.log(kakaoToken);
      setKakaoToken(kakaoToken);
    };

    if (popup) {
      console.log(popup);
      window.removeEventListener("message", getKakaoOAuthAccessToken);
      window.addEventListener("message", getKakaoOAuthAccessToken);
    }
  };

  // const getKakaoOAuthAccessToken = async (e: MessageEvent) => {
  //   // if (!popup) return;

  //   const { kakaoToken } = e.data;

  //   console.log(e);
  //   setKakaoToken(kakaoToken);

  //   if (kakaoToken) {
  //     // const res = await fetch(
  //     //   `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_CALLBACK_URL}&code=${kakaoToken}`,
  //     //   {
  //     //     method: "POST",
  //     //     headers: {
  //     //       "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
  //     //     },
  //     //   },
  //     // );
  //     if (!kakaoToken) return;

  //     // const { access_token } = await res.json();

  //     // if (access_token) {
  //     //   console.log("access_token", access_token);
  //     //   setSocialAccessToken(access_token);
  //     //   popup.close();
  //     //   setPopup(null);
  //     // }
  //   }
  // };

  useEffect(() => {
    if (kakaoToken) {
      (async () => {
        const res = await fetch(
          `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_KEY}&redirect_uri=${process.env.NEXT_PUBLIC_CALLBACK_URL}&code=${kakaoToken}`,
          {
            method: "POST",
            headers: {
              "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
            },
          },
        );
        const data = await res.json();
        console.log(data);
      })();
    }
  }, [kakaoToken]);

  return { kakaoLoginPopup };
};
