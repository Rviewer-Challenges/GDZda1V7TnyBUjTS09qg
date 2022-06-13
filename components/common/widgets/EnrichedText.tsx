import { Text, useTheme } from "@rneui/themed";
import Linkify from "linkify-react";
import "linkify-plugin-mention";
import "linkify-plugin-hashtag";
import Anchor from "./Anchor";

const externalLinkTypes = ["url", "email"];

const linkTextTagName = (_operator: string, type: string) =>
  externalLinkTypes.includes(type) ? Anchor : Text;

interface EnrichedTextProps {
  children: string;
  options?: any;
}

function EnrichedText({ children, options }: EnrichedTextProps) {
  const { theme } = useTheme();

  return (
    <Linkify
      tagName={Text}
      options={{
        ...options,
        tagName: linkTextTagName,
        attributes: { style: { color: theme.colors.primary } }
      }}
    >
      {children}
    </Linkify>
  );
}

export default EnrichedText;
