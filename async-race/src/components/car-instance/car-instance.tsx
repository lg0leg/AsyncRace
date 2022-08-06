import React, { RefObject, useEffect } from 'react';
import './car-instance.scss';

export default function CarInstance(props: { color: string }) {
  const carRef: RefObject<SVGPathElement> = React.createRef();

  const setColor = (color: string) => {
    carRef.current!.style.fill = color;
  };

  useEffect(() => {
    setColor(props.color);
  });

  return (
    <svg className="car-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 491.731 132.334">
      <path
        ref={carRef}
        className="car-body"
        // fill={randomColor}
        d="M.607 58.179C.9 49.677 8.505 37.711 11.002 34.014c-1.747-2.747-2.56-4.837-1.679-6.508.945-1.775 3.122-1.775 3.835-1.775 1.311 0 2.981.238 4.921.511 4.484.644 11.108 1.311 16.522.307 11.101-2.04 26.301-3.212 41.71-3.212 3.98 0 7.722.088 11.064.236 12.58.525 35.133-5.526 64.106-13.369l10.856-2.929c14.42-3.875 25.543-5.839 33.057-5.839 3.972 0 6.2.557 7.435 1.146a8.51 8.51 0 0 1 2.424-.378c4.08 0 5.947 3.392 6.652 6.313 2.172-.158 3.651 1.08 4.572 2.268 3.463-.244 4.998 2.048 5.134 2.3l.27.457v19.791c7.017 1.748 44.818 3.985 73.51 5.32a10.52 10.52 0 0 1-2.07-2.779c-1.642-3.169-1.265-6.458-.756-8.459l-31.643-13.908-.23-.946c-.046-.207-1.162-5.033 1.743-8.716C264.445 1.297 267.75 0 272.257 0c1.294 0 2.741.106 4.366.345 16.336 2.404 81.908 32.959 88.01 35.814 77.555 3.061 125.922 43.217 126.41 43.622l.688.593v22.185l-.41.521c-9.49 12.351-45.105 17.816-77.938 19.091.517-.677 1.05-1.334 1.531-2.048.441-.645.816-1.326 1.218-1.991 4.04-6.696 6.412-14.491 6.412-22.862 0-24.481-19.917-44.4-44.402-44.4-24.483 0-44.4 19.919-44.4 44.4 0 6.645 1.507 12.916 4.128 18.582.314.674.63 1.358.974 2.008.361.689.764 1.351 1.162 2.016-33.552-1.578-99.989-1.839-160.359-2.067-21.696-.093-42.899-.169-62.087-.309.345-.634.625-1.303.942-1.952.312-.652.656-1.29.941-1.955a46.867 46.867 0 0 0 3.811-18.522c0-25.974-21.135-47.107-47.104-47.107-25.972 0-47.103 21.133-47.103 47.107 0 5.021.806 9.858 2.272 14.395.26.813.572 1.611.881 2.408.297.766.598 1.535.926 2.284-10.086-2.376-18-6.684-23.52-12.991-11.16-12.76-9.834-29.95-9.2-38.228.101-1.073.17-2.025.201-2.76z"
      />
      <path
        className="car-wheels"
        d="M378.161 131.846c-11.33 0-21.324-5.258-28.028-13.35-.579-.697-1.2-1.354-1.726-2.092-.47-.657-.874-1.351-1.294-2.039-3.425-5.566-5.506-12.066-5.506-19.072 0-20.193 16.368-36.551 36.554-36.551 20.19 0 36.55 16.371 36.55 36.551 0 8.861-3.28 16.872-8.524 23.195-.54.661-1.036 1.367-1.627 1.972-.68.714-1.437 1.358-2.172 2.016-6.464 5.759-14.892 9.37-24.227 9.37zm-268.616-18.347c-.396.653-.75 1.327-1.179 1.956-7.085 10.179-18.843 16.879-32.199 16.879-14.058 0-26.289-7.441-33.218-18.542-.437-.697-.789-1.451-1.174-2.181-.405-.733-.842-1.431-1.194-2.199-2.3-4.981-3.667-10.488-3.667-16.327 0-21.68 17.59-39.256 39.253-39.256 21.681 0 39.253 17.577 39.253 39.256 0 6.709-1.84 12.933-4.809 18.459-.36.661-.68 1.326-1.066 1.955z"
      />
    </svg>
  );
}
