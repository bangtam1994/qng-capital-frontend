import { useState } from "react";
import theme from "../theme/theme";
import { Box, Typography } from "@mui/material";

export const LogoSvg = (props: React.SVGProps<SVGSVGElement>) => {
  const [isHovered, setIsHovered] = useState("white");

  return (
    <Box
      sx={{
        display: { xs: "none", md: "flex" },
        alignItems: "center",
        mr: 1,
        cursor: "pointer",
      }}
      onMouseEnter={() => setIsHovered(theme.palette.secondary.main)}
      onMouseLeave={() => setIsHovered("white")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.0"
        width="50"
        height="50"
        viewBox="0 0 640 640"
        preserveAspectRatio="xMidYMid meet"
        fill="currentColor"
        {...props}
        style={{
          transition: "fill 0.3s ease",
          fill: isHovered,
        }}
      >
        <metadata>
          Created by potrace 1.16, written by Peter Selinger 2001-2019
        </metadata>
        <g
          transform="translate(0.000000,640.000000) scale(0.100000,-0.100000)"
          // fill="#ffffff"
          stroke="none"
        >
          <path
            d="M2320 4152 l0 -829 58 -55 c51 -49 229 -165 238 -155 2 2 0 365 -4
       808 -4 442 -9 748 -12 679 l-5 -125 -7 155 c-4 85 -10 163 -13 173 -4 10 -2
       17 5 17 6 0 9 -4 6 -8 -3 -5 1 -9 9 -9 8 0 12 4 10 8 -4 5 -179 110 -277 166
       -5 2 -8 -369 -8 -825z"
          />
          <path
            d="M2720 3826 l0 -776 140 -70 c77 -38 145 -70 151 -70 13 0 3 1173 -11
       1235 -5 22 -11 87 -15 145 -3 63 -11 112 -19 125 -12 18 -12 22 -1 22 8 0 11
       -5 8 -10 -4 -6 -1 -7 7 -2 7 4 16 2 21 -6 5 -8 9 -9 9 -3 0 17 -48 46 -62 38
       -7 -5 -8 -3 -3 6 6 10 4 12 -9 7 -9 -4 -15 -3 -12 2 5 7 -155 112 -196 129 -4
       2 -8 -345 -8 -772z"
          />
          <path
            d="M3110 4361 c0 -8 124 -84 325 -198 39 -22 111 -52 160 -68 175 -53
       278 -116 420 -259 55 -54 103 -99 106 -98 3 0 6 -4 6 -11 0 -7 23 -50 52 -97
       90 -149 135 -321 134 -520 -1 -101 -6 -144 -27 -225 -76 -292 -271 -532 -541
       -666 l-83 -41 -12 -60 c-7 -33 -28 -92 -47 -131 -18 -38 -32 -71 -30 -73 9
       -10 182 51 272 95 360 175 613 519 681 923 21 125 14 320 -15 454 -24 110 -83
       270 -98 267 -6 -1 -9 5 -7 15 6 23 -94 185 -108 176 -7 -4 -8 -2 -4 4 7 12
       -72 122 -88 122 -4 0 -3 -6 3 -14 8 -10 9 -16 1 -21 -6 -4 -10 -3 -9 2 1 4 0
       11 -1 16 -1 4 -3 13 -4 20 -1 6 -9 11 -19 11 -14 -2 -15 1 -6 13 10 12 8 13
       -14 9 -26 -5 -43 5 -30 18 3 3 12 1 20 -5 8 -7 13 -8 13 -1 0 28 -260 210
       -281 196 -7 -4 -9 -3 -6 3 8 12 -119 72 -217 102 -39 12 -111 28 -160 36 -99
       16 -386 21 -386 6z"
          />
          <path
            d="M3120 3543 l0 -699 103 -64 c56 -34 121 -78 144 -96 23 -19 44 -34
       47 -34 3 0 4 78 2 173 -2 94 -5 395 -7 667 -1 272 -6 459 -9 415 l-6 -80 -4
       78 c-4 104 -4 101 -15 109 -6 5 -5 8 3 8 9 0 7 8 -5 27 -10 15 -13 24 -6 20 6
       -4 14 -4 17 1 2 4 -46 39 -107 77 -62 38 -122 75 -134 83 l-23 14 0 -699z"
          />
          <path
            d="M2205 3468 c-83 -95 -115 -182 -95 -260 13 -50 57 -121 69 -113 5 2
       14 -2 21 -10 7 -8 9 -15 4 -15 -4 0 10 -18 31 -40 22 -22 44 -38 51 -36 6 2
       17 0 25 -6 11 -7 9 -8 -6 -3 -25 8 -15 -2 44 -44 46 -32 67 -40 55 -18 -4 7
       -3 9 2 4 5 -5 9 -14 9 -20 0 -7 8 -11 18 -11 9 1 15 -1 12 -5 -6 -11 54 -43
       67 -35 7 4 8 3 4 -4 -8 -13 49 -46 64 -37 5 3 12 0 16 -6 4 -8 3 -9 -4 -5 -7
       4 -12 5 -12 2 0 -11 61 -37 72 -30 7 4 8 3 4 -4 -4 -7 14 -22 46 -38 168 -85
       376 -226 478 -325 36 -35 70 -62 75 -60 6 1 7 -1 3 -4 -10 -10 11 -47 21 -40
       5 2 8 -3 7 -13 0 -9 4 -16 9 -15 6 1 11 -6 12 -15 1 -9 11 -44 23 -77 41 -111
       17 -260 -61 -388 -16 -26 -27 -52 -24 -58 4 -5 2 -8 -2 -7 -5 2 -33 -26 -62
       -62 -29 -36 -69 -80 -90 -99 -72 -67 -4 -15 104 79 124 109 230 224 220 240
       -4 6 -1 9 6 8 19 -4 97 129 121 205 29 95 22 200 -17 280 -31 63 -92 140 -105
       132 -4 -2 -16 5 -26 18 l-19 22 23 -19 c12 -11 22 -14 22 -9 0 13 -72 69 -83
       65 -5 -1 -6 1 -3 6 3 5 -14 23 -38 41 -46 33 -62 39 -50 19 4 -7 3 -8 -5 -4
       -6 4 -9 11 -6 16 10 16 -307 196 -326 184 -8 -5 -9 -3 -4 6 6 10 4 12 -9 7 -9
       -4 -15 -3 -12 1 7 12 -103 64 -116 56 -6 -4 -9 -3 -5 2 7 12 -151 96 -165 88
       -6 -4 -8 -3 -5 3 4 6 -17 23 -46 38 -65 36 -197 127 -221 154 -10 11 -22 18
       -26 16 -8 -5 -29 15 -27 25 0 3 -12 31 -27 63 -24 49 -28 66 -23 109 4 28 13
       61 22 74 25 39 10 28 -40 -28z"
          />
          <path
            d="M2062 3132 c-17 -78 -14 -129 12 -204 22 -62 90 -167 109 -168 5 0 5
       6 1 13 -4 7 -3 9 2 4 5 -5 9 -14 9 -20 1 -7 7 -10 15 -9 8 2 12 0 7 -4 -4 -4
       0 -16 10 -26 18 -20 38 -25 27 -6 -4 7 -3 8 5 4 6 -4 9 -11 6 -16 -3 -5 19
       -27 49 -49 56 -42 73 -50 60 -29 -4 7 -3 8 5 4 6 -4 8 -12 5 -18 -5 -7 -1 -9
       9 -5 10 4 16 2 14 -6 -1 -7 6 -12 15 -12 10 0 23 -7 30 -16 15 -18 37 -32 133
       -84 39 -21 110 -62 159 -92 92 -55 101 -59 91 -44 -3 5 -1 12 4 16 6 3 8 -3 6
       -15 -2 -13 4 -24 18 -32 12 -6 42 -26 66 -44 24 -19 48 -31 54 -27 6 3 7 1 3
       -5 -6 -11 49 -59 64 -55 4 1 16 -8 26 -20 19 -22 19 -22 -1 -7 -14 10 -13 8 3
       -7 13 -13 20 -23 16 -23 -3 0 -1 -7 6 -15 7 -8 16 -13 19 -10 4 2 8 -1 8 -8 0
       -7 12 -31 26 -53 36 -53 67 -143 68 -196 l1 -43 23 70 c44 132 42 258 -7 345
       -10 19 -17 27 -14 17 4 -11 2 -16 -5 -12 -6 4 -8 14 -5 22 3 8 1 24 -5 35 -20
       37 -81 98 -92 91 -5 -3 -7 -2 -4 4 8 13 -58 77 -71 69 -6 -3 -14 -1 -18 5 -5
       8 -3 9 6 4 9 -5 11 -4 6 3 -13 21 -96 73 -106 67 -6 -4 -9 -1 -8 7 2 7 -5 12
       -14 12 -10 -1 -16 2 -13 6 4 7 -129 87 -232 139 -47 23 -57 26 -48 11 3 -6 -1
       -7 -10 -3 -13 4 -14 8 -4 13 8 5 -7 18 -42 35 -30 16 -96 54 -147 86 -51 32
       -98 58 -104 56 -7 -1 -12 4 -13 11 0 16 -26 33 -39 25 -5 -3 -6 -1 -2 5 3 6
       -8 20 -25 32 -17 12 -49 45 -71 74 -23 28 -45 50 -50 48 -5 -1 -7 2 -3 8 4 6
       2 16 -3 23 -5 7 -14 26 -19 42 -10 30 -10 30 -21 -23z"
          />
          <path
            d="M2349 2241 l-29 -29 0 -135 c0 -131 1 -136 26 -166 l26 -31 360 0
       359 0 -6 23 c-15 48 -50 108 -92 156 l-44 51 -195 2 -196 3 -3 50 c-2 41 -9
       54 -34 77 -26 24 -40 28 -87 28 -48 0 -59 -4 -85 -29z"
          />
        </g>
      </svg>
      <Typography
        variant="h6"
        noWrap
        component="a"
        href="#app-bar-with-responsive-menu"
        sx={{
          mr: 2,
          display: { xs: "none", md: "flex" },
          fontWeight: 700,
          letterSpacing: ".3rem",
          textDecoration: "none",
          transition: "font-size 0.3s ease, color 0.3s ease",
          color: isHovered,
        }}
      >
        QNG CAPITAL
      </Typography>
    </Box>
  );
};
