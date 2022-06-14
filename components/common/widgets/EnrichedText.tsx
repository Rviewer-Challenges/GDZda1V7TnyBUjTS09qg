import { Text, TextProps, useTheme } from "@rneui/themed";
import Linkify from "linkify-react";
import "linkify-plugin-mention";
import "linkify-plugin-hashtag";
import Anchor from "./Anchor";

const externalLinkTypes = ["url", "email"];

const linkTextTagName = (_operator: string, type: string) =>
  externalLinkTypes.includes(type) ? Anchor : Text;

interface EnrichedTextProps extends TextProps {
  children: string;
  options?: any;
}

function EnrichedText({ children, options, ...textProps }: EnrichedTextProps) {
  const { theme } = useTheme();

  return (
    <Linkify
      {...textProps}
      tagName={Text}
      options={{
        ...options,
        tagName: linkTextTagName,
        attributes: {
          style: { color: theme.colors.primary, ...options?.style }
        }
      }}
    >
      {children}
    </Linkify>
  );
}

export default EnrichedText;
