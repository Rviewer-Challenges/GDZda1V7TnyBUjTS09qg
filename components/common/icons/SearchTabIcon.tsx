import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const SearchTabIcon = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <Path
      d="m21.53 20.47-3.66-3.66A8.98 8.98 0 0 0 20 11a9 9 0 1 0-9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66a.746.746 0 0 0 1.06 0 .747.747 0 0 0 .002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
      fill={props.color}
    />
  </Svg>
);

export default SearchTabIcon;
