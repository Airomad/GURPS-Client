import React from 'react';

export default function GithubIcon({ active }) {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M26.122 7.14748C24.8701 4.94868 23.1719 3.20788 21.0271 1.9247C18.882 0.641459 16.5401 -1.49799e-08 13.9999 -1.49799e-08C11.46 -1.49799e-08 9.11734 0.641655 6.97264 1.9247C4.82763 3.20782 3.12954 4.94868 1.87762 7.14748C0.625896 9.34622 0 11.7473 0 14.3505C0 17.4776 0.890032 20.2896 2.67054 22.7872C4.45086 25.285 6.75077 27.0133 9.57008 27.9725C9.89825 28.0349 10.1412 27.991 10.2992 27.8418C10.4572 27.6925 10.5361 27.5054 10.5361 27.2815C10.5361 27.2441 10.533 26.9079 10.5269 26.2725C10.5206 25.637 10.5177 25.0827 10.5177 24.6097L10.0984 24.684C9.83109 24.7342 9.49385 24.7555 9.08669 24.7495C8.67973 24.7437 8.25725 24.6999 7.81983 24.6186C7.38222 24.5381 6.9752 24.3512 6.59843 24.0585C6.22186 23.7657 5.95453 23.3825 5.79651 22.9095L5.61422 22.4795C5.49272 22.1932 5.30144 21.8752 5.04011 21.5266C4.77878 21.1777 4.51452 20.9412 4.24719 20.8166L4.11956 20.723C4.03451 20.6607 3.9556 20.5857 3.88262 20.4985C3.80971 20.4114 3.75512 20.3243 3.71866 20.2369C3.68214 20.1496 3.7124 20.0779 3.80977 20.0217C3.90714 19.9655 4.0831 19.9382 4.33843 19.9382L4.70287 19.994C4.94593 20.0439 5.24659 20.1931 5.60522 20.4424C5.96366 20.6915 6.25832 21.0153 6.48925 21.4138C6.7689 21.9247 7.10583 22.314 7.50098 22.5818C7.89581 22.8497 8.2939 22.9834 8.69486 22.9834C9.09582 22.9834 9.44213 22.9523 9.73391 22.8903C10.0254 22.828 10.2988 22.7343 10.5542 22.6098C10.6635 21.7749 10.9613 21.1334 11.4473 20.685C10.7546 20.6104 10.1319 20.498 9.57883 20.3486C9.02604 20.199 8.45479 19.9562 7.86548 19.6195C7.27585 19.2833 6.78672 18.8658 6.39795 18.3677C6.00912 17.8694 5.69001 17.2152 5.44107 16.4057C5.192 15.5958 5.06744 14.6616 5.06744 13.6028C5.06744 12.0952 5.54757 10.8123 6.50764 9.7533C6.0579 8.61987 6.10036 7.34926 6.63514 5.9416C6.98758 5.82935 7.51024 5.91358 8.20285 6.19377C8.8956 6.47408 9.4028 6.71421 9.72497 6.91331C10.0471 7.11233 10.3053 7.281 10.4998 7.41778C11.6302 7.09401 12.7967 6.93209 13.9997 6.93209C15.2028 6.93209 16.3696 7.09401 17.5 7.41778L18.1927 6.96953C18.6664 6.67043 19.2258 6.39633 19.8695 6.14717C20.5136 5.89814 21.0061 5.82955 21.3465 5.94179C21.8932 7.34952 21.9419 8.62007 21.492 9.7535C22.452 10.8125 22.9324 12.0957 22.9324 13.603C22.9324 14.6618 22.8074 15.599 22.5587 16.415C22.3097 17.2312 21.9878 17.8848 21.593 18.3771C21.1977 18.8693 20.7054 19.2836 20.1161 19.6197C19.5267 19.9561 18.9553 20.1989 18.4025 20.3485C17.8494 20.4982 17.2267 20.6106 16.5341 20.6853C17.1658 21.2457 17.4817 22.1302 17.4817 23.3385V27.281C17.4817 27.5049 17.5577 27.6919 17.7098 27.8413C17.8617 27.9905 18.1016 28.0344 18.4297 27.9719C21.2494 27.0129 23.5493 25.2845 25.3296 22.7867C27.1096 20.2891 28 17.4771 28 14.35C27.9994 11.7471 27.3731 9.34622 26.122 7.14748Z"
        fill={active ? '#E8960C' : '#D1D1D1'}
      />
    </svg>
  );
}