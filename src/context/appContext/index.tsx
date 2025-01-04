import { createContext, useEffect, useState } from "react";
import { iAppContext, iAppContextProps } from "./type";
import { createApi, createApiImage } from "../../services/api";
// import { api } from "../../services/api";
// import { useNavigate } from "react-router-dom";

export const AppContext = createContext({} as iAppContext);

export const AppProviders = ({ children }: iAppContextProps) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false) as any;
  const [confirm, setConfirm] = useState(false) as any;
  const [userImg, setUserImg] = useState(null) as any;
  const [loading2, setLoading2] = useState(false) as any;
  const [finalPage, setFinalPage] = useState(false) as any;
  const [paywall, setPàywall] = useState(false) as any;
  const [nick, setNick] = useState("") as any;

  useEffect(() => {
    if (loading2) {
      setTimeout(() => {
        setLoading2(false);
        setFinalPage(true);
      }, 8000);
    }
  }, [loading2]);

  const getUser = (name: any) => {
    setNick(name);
    setLoading(true);
    const api = createApi(name);

    api
      .get("")
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
        const encodeUrl = encodeURIComponent(response.data.photo);
        getImage(encodeUrl);
        setLoading(false);
        setConfirm(true);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  };

  const getImage = (image: any) => {
    const api = createApiImage(image);

    api
      .get("/", { responseType: "blob" })
      .then((response) => {
        const imageUrl = URL.createObjectURL(response.data);
        setUserImg(imageUrl);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getImage2 = async (image: any) => {
    try {
      const api = createApiImage(image);
      const response = await api.get("/", { responseType: "blob" });
      return URL.createObjectURL(response.data);
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  return (
    <AppContext.Provider
      value={{
        user,
        loading,
        getUser,
        confirm,
        userImg,
        setConfirm,
        setLoading2,
        loading2,
        finalPage,
        setPàywall,
        paywall,
        getImage2,
        nick,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
