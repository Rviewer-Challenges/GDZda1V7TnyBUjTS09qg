import Svg, { SvgProps, Path } from "react-native-svg";

const ShareIcon = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <Path
      d="M12.148 4.603 8.398.853a.562.562 0 0 0-.795 0l-3.75 3.75a.562.562 0 1 0 .795.795l2.79-2.79v7.642a.563.563 0 0 0 1.125 0V2.608l2.79 2.79a.558.558 0 0 0 .795 0 .562.562 0 0 0 0-.795Z"
      fill={props.color}
    />
    <Path
      d="M13.781 15.458H2.219A1.72 1.72 0 0 1 .5 13.739V9.5a.563.563 0 0 1 1.125 0v4.239c0 .328.266.594.594.594h11.562a.594.594 0 0 0 .594-.594V9.5a.563.563 0 0 1 1.125 0v4.239a1.72 1.72 0 0 1-1.719 1.719Z"
      fill={props.color}
    />
  </Svg>
);

export default ShareIcon;
