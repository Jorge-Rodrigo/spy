import { createContext, useEffect, useState } from "react";
import { iAppContext, iAppContextProps } from "./type";
import { createApi, createApiImage } from "../../services/api";
import axios from "axios";
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

  const [userIp, setUserIp] = useState("");

  useEffect(() => {
    const fetchIp = async () => {
      try {
        const response = await axios.get("https://api.ipify.org?format=json");
        setUserIp(response.data.ip);
        console.log(response.data.ip);
      } catch (error) {
        console.error("Erro ao obter o IP:", error);
      }
    };

    fetchIp();
  }, []);

  useEffect(() => {
    if (loading2) {
      setTimeout(() => {
        setLoading2(false);
        setFinalPage(true);
      }, 8000);
    }
  }, [loading2]);

  const getUser = async (name: any) => {
    try {
      if (!userIp) {
        console.error("IP do usuário não disponível.");
        return;
      }

      const verifyResponse = await axios.get(
        `https://primary-production-aac6.up.railway.app/webhook/verify-ip?ip=${userIp}`
      );
      console.log(verifyResponse.data.message);

      if (verifyResponse.data.message === "true") {
        window.location.href = "https://www.google.com";
        return;
      }

      await axios.post(
        "https://primary-production-aac6.up.railway.app/webhook/a407facb-7716-4ca4-a320-76e91db0ed1e",
        { ip: userIp }
      );

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
    } catch (error) {
      console.error("Erro durante a verificação ou cadastro do IP:", error);
    }
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
