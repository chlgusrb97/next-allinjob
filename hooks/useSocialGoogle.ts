import { Dispatch, SetStateAction } from "react";

export const useSocialGoogle = (
  popup: Window | null | undefined,
  setPopup: Dispatch<SetStateAction<Window | null | undefined>>,
  setSocialAccessToken: Dispatch<SetStateAction<string>>,
) => {
  const googleLoginPopup = () => {
    const googleOptions =
      "toolbar=no,scrollbars=no,resizable=no,status=no,menubar=no,width=500,height=600,top=50,left=50";
    const googlePopup = window.open(
      `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}&redirect_uri=${process.env.NEXT_PUBLIC_CALLBACK_URL}&response_type=token&scope=email`,
      "_blank",
      googleOptions,
    );
    setPopup(googlePopup);
  };

  const getGoogleOAuthAccessToken = (e: MessageEvent) => {
    if (!popup) return;
    const { accessToken } = e.data;
    if (accessToken) {
      setSocialAccessToken(accessToken);
      popup.close();
      setPopup(null);
    }
  };

  return { googleLoginPopup, getGoogleOAuthAccessToken };
};
