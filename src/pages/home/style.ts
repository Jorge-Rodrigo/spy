import styled from "styled-components";
import Bg from "../../assets/start/bg1.png";

export const MainStyle = styled.div`
  background-color: #161531;
  height: 100vh;
  .start {
    background-color: #161531;
    width: 100%;
    height: 98vh;
    background-image: url(${Bg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    position: relative;
    padding-top: 270px;
    max-width: 600px;
    margin: 0 auto;

    .lineProgress {
      position: absolute;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      justify-content: start;
      height: 12px;
      background-color: #24214a;
      width: 85%;
      margin: 0 auto;

      border-radius: 28px;

      div {
        width: 45%;
        height: 100%;
        background-color: #00d8cd;
        /* border-radius: 28px; */
        border-bottom-left-radius: 28px;
        border-top-left-radius: 28px;
      }
    }

    .allInfos {
      background-color: #f1f5f8;
      border-top-right-radius: 59px;
      border-top-left-radius: 59px;
      /* height: 80vh; */
      width: 100%;
      position: relative;
      padding-top: 100px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      /* padding-bottom: 12px; */

      .mainImg {
        position: absolute;
        top: -45px;
        left: 50%;
        transform: translateX(-50%);
        width: 130px;
        height: 130px;
        border: 20px solid #5164f4;
        border-radius: 50%;
        z-index: 1;

        img {
          width: 100%;
          height: 100%;
          z-index: 2;
          border: none;
        }
        &::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          box-shadow: 0 8px 12px rgba(0, 0, 0, 0.4);
          z-index: 1;
        }
      }
      .desc {
        margin: 0 auto;
        text-align: center;
        font-size: 22px;
        margin-bottom: 25px;
        width: 90%;
        color: #536377;
        line-height: 35px;

        span {
          color: #7480fe;
        }
      }

      .input {
        width: 90%;
        height: 50px;
        margin: 0 auto;
        position: relative;
        margin-bottom: 25px;
        border-radius: 18px;

        input {
          width: 100%;
          height: 100%;
          padding: 15px 0;
          padding-left: 22px;
          border-radius: 18px;
          border: none;
          outline: 0;
          background-color: white;
          color: #536377;
          font-size: 17px;
        }
        input::placeholder {
          font-size: 17px;
        }
        button {
          position: absolute;
          top: 5px;
          right: 5px;
          background-color: #5367ff;
          border: none;
          border-radius: 12px;
          width: 45px;
          height: 40px;
          cursor: pointer;

          &:hover {
            background-color: #7e8cf5;
          }

          svg {
            width: 20px;
            height: 20px;
            fill: white;
          }
        }
      }

      .pop {
        width: 90%;
        height: 80px;
        margin: 0 auto;
        margin-bottom: 30px;
      }
      .feedbacks {
        width: 88%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        color: #536377;

        .title {
          color: #7480fe;
          font-size: 18px;
          font-weight: 600;
          margin: 20px 0;
        }

        .infos {
          text-align: center;
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 12px;
        }

        ul {
          list-style: none;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 25px;

          li {
            background-color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px 12px;
            gap: 15px;
            border-radius: 18px;

            img {
              width: 50px;
              height: 50px;
            }

            h2 {
              font-size: 20px;
              margin-bottom: 5px;
            }
            p {
              font-size: 14px;
              line-height: 18px;
            }
          }

          li:last-child {
            margin-bottom: 100px;
          }
        }
      }
    }
  }
  .loading {
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 35px;

    .loader {
      width: 150px;
      aspect-ratio: 1;
      border: 15px solid #ddd;
      border-radius: 50%;
      position: relative;
      transform: rotate(45deg);
      display: flex;

      align-items: center;

      .userProfile {
        background-color: #a5b0fe;
        margin: 0 auto;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 10px solid #161531;
        transform: rotate(315deg);

        img {
          filter: brightness(0) invert(1);
        }
      }
      .timer {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        left: 73px;
        bottom: -3px;
        background-color: white;
        padding: 10px;
        width: 60px;
        font-size: 18px;
        font-weight: 600;
        color: #5367ff;
        border-radius: 8px;
        transform: rotate(315deg);
      }
    }
    .loader::before {
      content: "";
      position: absolute;
      inset: -15px;
      border-radius: 50%;
      border: 15px solid #514b82;
      animation: l18 70s infinite linear;
    }

    @keyframes l18 {
      0% {
        clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
      }
      25% {
        clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
      }
      50% {
        clip-path: polygon(
          50% 50%,
          0 0,
          100% 0,
          100% 100%,
          100% 100%,
          100% 100%
        );
      }
      75% {
        clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
      }
      100% {
        clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
      }
    }

    h2 {
      color: #f1f5f8;
      font-size: 25px;
      margin-top: 65px;
      margin-bottom: 15px;
    }

    .info {
      color: #f1f5f8;
      font-size: 18px;
      width: 80%;
      text-align: center;
    }
  }

  .confirmation {
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 60px;
    padding-bottom: 90px;

    .userPhoto {
      width: 70%;
      height: 300px;
      border: 6px solid white;
      border-radius: 50%;
    }

    .nick {
      color: #55a172;
      font-weight: 600;
      background-color: #dafce7;
      padding: 6px 25px;
      border-radius: 12px;
      margin-top: 12px;
    }

    .name {
      color: #f1f5f8;
      font-size: 25px;
      font-weight: 600;
      margin-top: 25px;
    }

    .question {
      color: #f1f5f8;
      margin-top: 20px;
      font-size: 18px;
    }

    .btn1 {
      background-color: #4b5cfe;
      border: none;
      color: #f1f5f8;
      border-radius: 12px;
      padding: 15px 35px;
      margin-top: 25px;
      font-weight: 600;
      font-size: 18px;
      cursor: pointer;
      &:hover {
        background-color: #7e8cf5;
      }
    }

    .btn2 {
      background-color: transparent;
      font-weight: 600;
      font-size: 18px;
      margin-top: 20px;
      border: none;
      color: #f1f5f8;
      &:hover {
        text-decoration: underline;
      }
    }
  }

  .loading2 {
    max-width: 600px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 90px;
    .logo {
      width: 150px;
      height: 150px;
      background-color: #a5b0fe;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        width: 70%;
        height: 70%;
      }
    }

    .list {
      background-color: #262140;
      width: 90%;
      border-radius: 18px;
      margin-top: 25px;
      ul {
        list-style: none;
        width: 100%;
        padding: 15px 22px;

        .title {
          display: flex;
          gap: 15px;
          justify-content: center;
          align-items: center;
          margin-bottom: 30px;
          .loader {
            margin: auto;
            border: 6px solid #eaf0f6;
            border-radius: 50%;
            border-top: 6px solid #2abbbc;
            width: 50px;
            height: 50px;
            animation: spinner 2s linear infinite;
          }

          @keyframes spinner {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
          .letters {
            color: #4b5cfe;
            font-size: 22px;
            width: 70%;
          }
        }

        .item {
          display: flex;
          margin-bottom: 10px;
          gap: 20px;

          .icons {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 5px;
            .bar {
              width: 2px;
              height: 30px;
              background-color: #536377;
            }
            .green {
              fill: #2abbbc;
            }

            .white {
              fill: white;
            }
          }
          .info {
            color: #f1f5f8;
            display: flex;
            flex-direction: column;
            gap: 16px;
            h2 {
              font-size: 19px;
            }
            p {
              font-size: 16px;
            }
          }
        }
      }
    }
  }

  .finalHopper {
    width: 100%;
    background-color: #161531;
    /* height: 98vh; */
    position: relative;
    padding-top: 40px;
    max-width: 450px;
    margin: 0 auto;
    padding-bottom: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .lineProgress {
      position: absolute;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      justify-content: start;
      height: 10px;
      background-color: #24214a;
      width: 85%;
      margin: 0 auto;

      border-radius: 28px;

      div {
        width: 85%;
        height: 100%;
        background-color: #00d8cd;
        /* border-radius: 28px; */
        border-bottom-left-radius: 28px;
        border-top-left-radius: 28px;
      }
    }

    .title {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 33px;
      font-weight: 600;
      gap: 12px;
      color: white;
      margin-top: 22px;

      span {
        color: #4b5cfe;
      }
    }

    .disclaimer {
      background-color: #24214a;
      width: 45%;
      margin: 20px auto;
      font-size: 18px;
      color: white;
      font-weight: 600;
      padding: 20px;
      border-radius: 12px;

      span {
        color: #c72c72;
      }
    }

    .firstList {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 6px;
      font-size: 20px;
      font-weight: 600;
      color: white;
      margin-top: 60px;

      span {
        color: #4b5cfe;
      }
    }

    .listSug {
      width: 90%;
      margin: 22px auto;
      overflow-x: auto;
      display: flex;
      gap: 50px;
      list-style: none;
      cursor: grab;
      scroll-behavior: smooth;
      padding-right: 50px;

      li {
        flex-shrink: 0;
        margin: 0 auto;
        width: 180px !important;
        height: 260px;
        background-color: white;
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;

        img {
          width: 100%;
          height: 175px;
          object-fit: cover;
          border-top-right-radius: 12px;
          border-top-left-radius: 12px;
        }
        .name {
          font-size: 20px;
          color: #536377;
          font-weight: 600;
          margin-top: 10px;
        }
        .nick {
          font-size: 16px;
          color: #536377;
          font-weight: 500;
          margin-top: 15px;
        }
      }
    }
    .listSug::-webkit-scrollbar {
      display: none;
    }

    .normal {
      width: 90%;
      margin: 0 auto;
      text-align: center;
      font-size: 21px;
      font-weight: 500;
      gap: 12px;
      color: white;
      margin-top: 60px;
      margin-bottom: 15px;
      span {
        color: #4b5cfe;
        font-weight: 600;
      }
    }
    .text {
      color: #536377;
      text-align: center;
      margin: 0 auto;
      margin-top: 40px;
      font-size: 18px;
      margin-bottom: 50px;
      width: 80%;
    }
    .text2 {
      color: #536377;
      text-align: center;
      margin: 0 auto;
      margin-top: 10px;
      font-size: 16px;
      margin-bottom: 50px;
      width: 80%;
    }

    .imgExample {
      width: 90%;
      height: 380px;
      margin-top: 10px;
      margin-bottom: 40px;
      border-radius: 18px;
    }

    .change {
      width: 90%;
      position: relative;

      .name2 {
        position: absolute;
        top: 339px;
        background-color: #242225;
        left: 15%;
        color: white;
        font-size: 12px;
        padding: 3px 2px;
      }
      .base {
        position: absolute;
        background-color: black;
        height: 14px;
        width: 60%;
        /* left: 38%; */
        top: 86px;
      }
      .nick {
        position: absolute;
        color: #414041;
        top: 83px;
        font-size: 11px;
        font-weight: 700;
        left: 39%;
        font-family: "Montserrat", serif;
        user-select: none;
        pointer-events: none;
      }
      .censo {
        position: absolute;
        width: 37%;
        height: 178px;
        top: 116px;
        left: 20%;
        z-index: 5;
      }
      .color {
        position: absolute;
        width: 39%;
        height: 204px;
        background-color: rgba(0, 0, 0, 0.5);
        top: 110px;
        left: 19%;
        border-radius: 16px;
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
      }

      .imgExample {
        width: 100%;
        height: 380px;
        margin-top: 10px;
        margin-bottom: 40px;
        border-radius: 18px;
      }
    }
    .change2 {
      width: 90%;
      position: relative;

      .chat {
        position: absolute;
        width: 54%;
        height: 38px;
        background-color: #365ce6;
        top: 127px;
        right: 14%;
        border-bottom-right-radius: 18px;
        border-bottom-left-radius: 18px;
        border-top-left-radius: 18px;
      }

      .msg {
        user-select: none;
        pointer-events: none;
        position: absolute;
        right: 15%;
        top: 137px;
        color: white;
        font-size: 11px;
        width: 50%;
        z-index: 6;
        @media (min-width: 400px) {
          font-size: 12px;
          right: 14%;
          top: 137px;
        }
      }
      .pfp {
        border-radius: 50%;
        position: absolute;
        width: 9%;
        top: 126px;
        right: 3%;
      }
      .imgExample2 {
        width: 100%;
        height: 180px;
        margin-top: 10px;
        margin-bottom: 40px;
        border-radius: 18px;
      }
    }
    .imgExample2 {
      width: 90%;
      height: 180px;
      margin-top: 10px;
      margin-bottom: 40px;
      border-radius: 18px;
    }
    .close {
      width: 95%;
      display: flex;
      gap: 10px;
      position: relative;

      .pfp {
        width: 7%;
        height: 26px;
        border-radius: 50%;
        position: absolute;
        top: 13px;
        left: 3%;
      }
      .pfp2 {
        width: 7%;
        height: 26px;
        border-radius: 50%;
        position: absolute;
        top: 14px;
        left: 54%;
      }

      .nn {
        color: white;
        position: absolute;
        background-color: transparent;
        left: 12%;
        top: 18px;
        font-size: 11px;
      }
      .nn2 {
        color: white;
        position: absolute;
        background-color: transparent;
        left: 64%;
        top: 18px;
        font-size: 11px;
      }
      img {
        width: 48%;
        height: 300px;
        border-radius: 18px;
      }
    }

    .btnBuy {
      width: 90%;
      height: 60px;
      font-size: 20px;
      border: none;
      border-radius: 12px;
      background-color: #5164f4;
      color: white;
      font-weight: 500;
      cursor: pointer;
      margin-bottom: 40px;
    }
  }
  footer {
    max-width: 600px;
    margin: 0 auto;
    left: 50%;
    transform: translateX(-50%);
    position: fixed;
    bottom: 0;
    background-color: #f1f5f8;
    width: 100%;
    z-index: 12;
    ul {
      display: flex;
      list-style: none;
      justify-content: space-between;
      padding: 10px 35px;
      padding-bottom: 15px;

      li {
        cursor: pointer;
        p {
          text-align: center;
          font-weight: 600;
          font-size: 14px;
          color: #536377;
        }
        .spyp {
          color: #7480fe;
        }
        .spy {
          width: 90px;
          height: 30px;
        }
        img {
          width: 70px;
          height: 30px;
        }
      }
    }
  }
`;
