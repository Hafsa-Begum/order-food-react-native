import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SVGComponent = (props) => (
    <Svg
        width={36}
        height={40}
        viewBox="0 0 36 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M21.22 20.3154L19.4275 21.3527V40L35.5685 30.6805V12.0332L21.22 20.3154Z"
            fill="#2D0C57"
        />
        <Path
            d="M24.1412 3.59336L17.9337 0L1.3445 9.57676L7.56027 13.1701L24.1412 3.59336Z"
            fill="#2D0C57"
        />
        <Path
            d="M34.5146 9.57676L27.3611 5.50208L10.7802 15.0788L11.7262 15.5685L17.9337 19.1535L24.108 15.5934L34.5146 9.57676Z"
            fill="#2D0C57"
        />
        <Path
            d="M9.52707 21.9336L6.55612 20.4066V15.6597L0.431641 12.1328V30.6473L16.4565 39.9004V21.3859L9.52707 17.3942V21.9336Z"
            fill="#2D0C57"
        />
    </Svg>
);

export default SVGComponent;
