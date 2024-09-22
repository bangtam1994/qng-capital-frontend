import React from "react";
import { Box } from "@mui/material";
import { keyframes, styled } from "@mui/material/styles";
import telegramImage from "../../assets/tele.png";
import youtubeImage from "../../assets/youtube.png";
import tradingViewImage from "../../assets/tradingview.svg";
import ftmoImage from "../../assets/ftmo.webp";
import alphacapital from "../../assets/alphacapital.png";
import vantageImage from "../../assets/vantage.png";
import metatrader from "../../assets/metatrader4.png";

import theme from "../../theme/theme";

const bannerItems = [
  {
    text: "Telegram",
    image: telegramImage,
    link: "https://telegram.me/yourchannel",
  },
  {
    text: "YouTube",
    image: youtubeImage,
    link: "https://www.youtube.com/@QngCapital",
  },
  {
    text: "TradingView",
    image: tradingViewImage,
    link: "https://tradingview.com",
  },
  {
    text: "FTMO",
    image: ftmoImage,
    link: "https://ftmo.com/fr/",
  },
  {
    text: "alpha",
    image: alphacapital,
    link: "https://app.alphacapitalgroup.uk/",
  },
  {
    text: "vantage",
    image: vantageImage,
    link: "https://www.vantagemarkets.com/fr/",
  },
  {
    text: "metatrader",
    image: metatrader,
    link: "https://www.metatrader4.com/fr",
  },
];

const scrolling = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;

const BannerContainer = styled(Box)({
  display: "flex",
  overflow: "hidden",
  whiteSpace: "nowrap",
  width: "100%",
  backgroundColor: theme.palette.background.paper,
  position: "relative",
});

// Styled content area that scrolls
const BannerContent = styled(Box)({
  display: "flex",
  whiteSpace: "nowrap",
  animation: `${scrolling} 50s linear infinite`,
  transform:
    "translate3d(-12.134%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
});

// Styled individual item
const BannerItem = styled(Box)(({ theme }) => ({
  display: "inline-flex",
  alignItems: "center",
  marginRight: theme.spacing(4),
  whiteSpace: "nowrap",
}));

// Define the ScrollingBanner component
const ScrollingBanner: React.FC = () => {
  const extendedItems = [...bannerItems];

  return (
    <BannerContainer>
      <BannerContent>
        {extendedItems.map((item, index) => (
          <BannerItem key={index}>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <img
                src={item.image}
                alt={item.text}
                width={137}
                height={"auto"}
                style={{ marginRight: "60px" }}
              />
            </a>
          </BannerItem>
        ))}
      </BannerContent>
      <BannerContent>
        {extendedItems.map((item, index) => (
          <BannerItem key={index}>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <img
                src={item.image}
                alt={item.text}
                width={137}
                height={"auto"}
                style={{ marginRight: "60px" }}
              />
            </a>
          </BannerItem>
        ))}
      </BannerContent>
      <BannerContent>
        {extendedItems.map((item, index) => (
          <BannerItem key={index}>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <img
                src={item.image}
                alt={item.text}
                width={137}
                height={"auto"}
                style={{ marginRight: "60px" }}
              />
            </a>
          </BannerItem>
        ))}
      </BannerContent>
      <BannerContent>
        {extendedItems.map((item, index) => (
          <BannerItem key={index}>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <img
                src={item.image}
                alt={item.text}
                width={137}
                height={"auto"}
                style={{ marginRight: "60px" }}
              />
            </a>
          </BannerItem>
        ))}
      </BannerContent>
    </BannerContainer>
  );
};

export default ScrollingBanner;
