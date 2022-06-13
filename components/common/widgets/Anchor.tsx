import { GestureResponderEvent, Text, TextProps } from "react-native";
import { openURL } from "expo-linking";
import { openBrowserAsync, WebBrowserOpenOptions } from "expo-web-browser";

interface AnchorProps extends TextProps {
  href: string;
  openInModal?: boolean;
  browserParams?: WebBrowserOpenOptions;
}

function Anchor({ openInModal = true, browserParams, ...props }: AnchorProps) {
  function handlePress(event: GestureResponderEvent) {
    openInModal
      ? openBrowserAsync(props.href, browserParams)
      : openURL(props.href);
    props.onPress?.(event);
  }

  return (
    <Text {...props} onPress={handlePress}>
      {props.children}
    </Text>
  );
}

export default Anchor;
