import { Text as BaseText, TextProps } from "@rneui/themed";

export { TextProps };

function Text({ style, ...props }: TextProps) {
  return (
    <BaseText
      style={[{ fontFamily: "GT America Regular" }, style]}
      {...props}
    />
  );
}

export default Text;
