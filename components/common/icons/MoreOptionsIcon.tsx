import Svg, { SvgProps, Path } from "react-native-svg";

const MoreOptionsIcon = (props: SvgProps) => (
  <Svg width={14} height={4} fill="none" {...props}>
    <Path
      d="M1.75 3.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM7 3.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM12.25 3.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      fill={props.color}
    />
  </Svg>
);

export default MoreOptionsIcon;
