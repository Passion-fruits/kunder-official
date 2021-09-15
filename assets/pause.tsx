export default function PauseIcon({size,callback,color="white"}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 19.96 24.95"
      onClick={callback}
      width={size}
      height={(size * 9) / 7}
    >
      <g
        id="Icon_ionic-ios-pause"
        data-name="Icon ionic-ios-pause"
        transform="translate(-9 -6.75)"
      >
        <path
          id="패스_31"
          data-name="패스 31"
          d="M14.606,31.7H9.632A.627.627,0,0,1,9,31.076V7.374a.627.627,0,0,1,.632-.624h4.974a.627.627,0,0,1,.632.624v23.7A.627.627,0,0,1,14.606,31.7Z"
          transform="translate(0)"
          fill={color}
        />
        <path
          id="패스_32"
          data-name="패스 32"
          d="M26.981,31.7H22.007a.627.627,0,0,1-.632-.624V7.374a.627.627,0,0,1,.632-.624h4.974a.627.627,0,0,1,.632.624v23.7A.627.627,0,0,1,26.981,31.7Z"
          transform="translate(1.347)"
          fill={color}
        />
      </g>
    </svg>
  );
}
