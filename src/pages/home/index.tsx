import { MainStyle } from "./style";
import Goal from "../../assets/start/001-goal.png";
import { FaSearch } from "react-icons/fa";
import PopUp from "../../assets/start/PUP (1).svg";
import Person1 from "../../assets/start/sara.png";
import Person2 from "../../assets/start/gui.png";
import Person3 from "../../assets/start/mire.png";
import Locked from "../../assets/start/profile.svg";
import Spy from "../../assets/start/spy.svg";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/appContext";
import { IoIosUnlock } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Print1 from "../../assets/final/print.png";
import Print2 from "../../assets/final/vc.png";
import Print3 from "../../assets/final/map.png";
import Print4 from "../../assets/final/print3.png";
import Close1 from "../../assets/final/close1.png";
import Close2 from "../../assets/final/close2.png";
import axios from "axios";
import Censored from "../../assets/ces-removebg-preview.png";
import { createApiImage } from "../../services/api";

export const HomePage = () => {
  const {
    loading,
    getUser,
    confirm,
    user,
    userImg,
    setConfirm,
    setLoading2,
    loading2,
    finalPage,
    setPàywall,
    nick,
  } = useContext(AppContext);
  const [inputValue, setInputValue] = useState("") as any;
  const [percentage, setPercentage] = useState(0) as any;
  const [currentStep, setCurrentStep] = useState(0) as any;
  const [location, setLocation] = useState(null) as any;
  const [error, setError] = useState(null) as any;
  const [sex, setSex] = useState(null) as any;
  sex;
  const handleSearch = () => {
    if (inputValue.trim()) {
      getUser(inputValue);
    } else {
      console.log("Por favor, insira um nome válido.");
    }
  };

  useEffect(() => {
    if (loading) {
      let interval: any = setInterval(() => {
        setPercentage((prev: any) => {
          if (prev < 100) {
            return prev + 1;
          } else {
            clearInterval(interval);
            return 100;
          }
        });
      }, 600);
      return () => clearInterval(interval);
    } else {
      setPercentage(0);
    }
  }, [loading]);

  useEffect(() => {
    if (loading2) {
      let step = 0;
      const interval = setInterval(() => {
        step += 1;
        setCurrentStep(step);
        if (step >= 4) {
          clearInterval(interval);
        }
      }, 1500);
      return () => clearInterval(interval);
    } else {
      setCurrentStep(0);
    }
  }, [loading2]);

  const formatName = (name: any) => {
    if (typeof name !== "string") return "";

    const cleanedName = name
      .normalize("NFKD")
      .replace(/[\p{P}\p{S}]/gu, "")
      .trim();

    if (cleanedName.length <= 4) return cleanedName;

    const visible = cleanedName.slice(0, 3);
    const censored = "****";
    return `${visible}${censored}`;
  };

  useEffect(() => {
    const fetchLocationByIP = async () => {
      try {
        const response = await axios.get(
          "https://ipinfo.io?token=b3572b6234ad0a"
        );
        const { city } = response.data;

        setLocation(city);
      } catch (err) {
        setError("Não foi possível obter a localização.");
      }
    };

    fetchLocationByIP();
  }, []);

  useEffect(() => {
    const fetchLocationByIP = async () => {
      try {
        const response = await axios.get(
          `https://primary-production-aac6.up.railway.app/webhook/a0d72025-293f-402a-b5c2-cbc05df94302?name=${user.name}`
        );

        setSex(response.data.output.gender);
      } catch (err) {
        setError("Não foi possível obter a localização.");
      }
    };

    if (user) {
      fetchLocationByIP();
    }
  }, [user]);

  return (
    <MainStyle>
      {!loading && !confirm && !loading2 && !finalPage && (
        <div className="start">
          <div className="lineProgress">
            <div></div>
          </div>
          <div className="allInfos">
            <div className="mainImg">
              <img src={Goal} alt="" />
            </div>
            <p className="desc">
              Coloque o <span>@</span> da pessoa que você quer espionar.
            </p>
            <div className="input">
              <input
                type="text"
                placeholder="Ex.: neymarjr"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button onClick={handleSearch}>
                <FaSearch />
              </button>
            </div>
            <img src={PopUp} alt="" className="pop" />
            <div className="feedbacks">
              <p className="title">Feedbacks</p>
              <p className="infos">
                {error
                  ? error
                  : `Pessoas de ${location} estão utilizando nossa ferramenta.`}
              </p>
              <ul>
                <li>
                  <img src={Person1} alt="" />
                  <div>
                    <h2>Sarah Costa</h2>
                    <p>
                      A plataforma me surpreendeu, nunca achei que conseguiria
                      tudo isso em apenas um lugar!
                    </p>
                  </div>
                </li>
                <li>
                  <img src={Person2} alt="" />
                  <div>
                    <h2>Guilherme</h2>
                    <p>
                      Do caralho esse sistema, descobri uma traição da minha
                      ficante kkkkk
                    </p>
                  </div>
                </li>
                <li>
                  <img src={Person3} alt="" />
                  <div>
                    <h2>Mirela Ferreira</h2>
                    <p>
                      Quem diria que eu iria ver tanta coisa por aqui MEUDEUS, o
                      rodrigo me paga
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {loading && (
        <div className="loading">
          <div className="loader">
            <div className="userProfile">
              <img src={Spy} alt="" />
            </div>
            <p className="timer">{percentage}%</p>
          </div>

          <h2>Analisando...</h2>
          <p className="info">
            Nosso sistema esta procurando falhas segurança nessa conta para
            achar uma brecha
          </p>
        </div>
      )}
      {confirm && user && !loading2 && !finalPage && (
        <div className="confirmation">
          <img src={userImg} alt="" className="userPhoto" />
          <p className="nick">@{nick}</p>
          <h2 className="name">{user.name}</h2>
          <p className="question">podemos prosseguir?</p>
          <button className="btn1" onClick={() => setLoading2(true)}>
            Continuar, o Perfil esta correto!
          </button>
          <button className="btn2" onClick={() => setConfirm(false)}>
            Não, quero corrigir
          </button>
        </div>
      )}
      {loading2 && (
        <div className="loading2">
          <div className="logo">
            <IoIosUnlock />
          </div>
          <div className="list">
            <ul>
              <li className="title">
                <div className="loader"></div>
                <h2 className="letters">Descriptografando informações...</h2>
              </li>
              {[
                { step: 1, text: "Carregando últimos logins..." },
                { step: 2, text: "Carregando directs..." },
                { step: 3, text: "Carregando últimas interações..." },
                { step: 4, text: "Carregando stories ocultos..." },
              ].map((item, index) => (
                <li className="item" key={index}>
                  <div className="icons">
                    <div className="bar"></div>
                    {currentStep >= item.step ? (
                      <FaCheck className="green" />
                    ) : (
                      <GoDotFill className="white" />
                    )}
                  </div>
                  <div className="info">
                    <h2>Passo {item.step}</h2>
                    <p>{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      {finalPage && (
        <div className="finalHopper">
          <div className="lineProgress">
            <div></div>
          </div>

          <h2 className="title">
            <span>Prévia</span> do seu @
          </h2>

          <p className="disclaimer">
            prévia disponivel por <span>apenas 24h</span>
          </p>

          <p className="firstList">
            Pessoa que ela mais <span>interage</span>
          </p>

          <Swiper
            spaceBetween={100}
            slidesPerView={2}
            grabCursor
            className="listSug"
            slidesOffsetAfter={35}
          >
            {user &&
              user.visitors.map((item: any, index: any) => {
                const encodeUrl = encodeURIComponent(
                  item.profilePicUrl ?? item.profile_pic_url
                );
                const imageUrl = createApiImage(encodeUrl).defaults.baseURL;

                return (
                  <SwiperSlide key={index}>
                    <li className="item">
                      <img
                        src={imageUrl}
                        alt={item.fullName ?? item.full_name}
                      />
                      <p className="name">
                        {formatName(item.fullName ?? item.full_name)}
                      </p>
                      <p className="nick">@{formatName(item.username)}</p>
                    </li>
                  </SwiperSlide>
                );
              })}
          </Swiper>

          <h3 className="normal">
            Detectamos <span>conversas pessoais</span> dessa pessoa
          </h3>

          <p className="text">
            Nossa inteligencia artificial indentificou algumas conversas mais
            pessoais
          </p>

          <div className="change">
            <div className="base"></div>
            <p className="nick"></p>
            <img src={Censored} alt="" className="censo" />
            <div className="color"></div>
            <div className="name2">
              {user.name.split(" ")[0]} foi aquele dia?
            </div>
            <img src={Print1} alt="" className="imgExample" />
          </div>

          <h3 className="normal">
            Detectamos <span>áudios em algumas conversas...</span>
          </h3>

          <p className="text">
            para desbloquear esses e outros áudios e conversas adquira nossa
            ferramenta
          </p>

          <div className="change2">
            <img src={userImg} alt="" className="pfp" />
            <p className="msg">Foi em {location} viu kkkk</p>
            <div className="chat"></div>
            <img src={Print2} alt="" className="imgExample2" />
          </div>

          <h3 className="normal">
            Por dentro do <span>Close Friends</span>
          </h3>

          <p className="text2">
            para desbloquear acesso total ao CF da pessoa espionada adquiri
            nosso sistema
          </p>

          <div className="close">
            <img src={userImg} alt="" className="pfp" />
            <img src={userImg} alt="" className="pfp2" />
            <p className="nn">{nick}</p>
            <p className="nn2">{nick}</p>
            <img src={Close1} alt="" />
            <img src={Close2} alt="" />
          </div>

          <h3 className="normal">
            Tenha acesso em <span>TEMPO REAL</span> a localização do dispositivo
            da pessoa
          </h3>
          <img src={Print3} alt="" className="imgExample2" />

          <h3 className="normal">
            Alguns arquivos de mídia como <span>fotos e videos </span> foram
            encontrados em algumas conversas.
          </h3>
          <img src={Print4} alt="" className="imgExample" />

          <button className="btnBuy" onClick={() => setPàywall(true)}>
            Ver relatorio completo
          </button>
        </div>
      )}
      <footer>
        <ul>
          <li>
            <img src={Locked} alt="" />
            <p>Painel</p>
          </li>
          <li>
            <img src={Spy} alt="" className="spy" />
            <p className="spyp">Espionar</p>
          </li>
          <li>
            <img src={Locked} alt="" />
            <p>Localização</p>
          </li>
        </ul>
      </footer>
    </MainStyle>
  );
};
