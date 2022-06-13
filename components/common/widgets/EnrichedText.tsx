import { Text, useTheme } from "@rneui/themed";
import Linkify from "linkify-react";
import "linkify-plugin-mention";
import "linkify-plugin-hashtag";
import { ReactNode } from "react";

interface LinkTextProp {
  href: string;
  children: ReactNode;
}

const LinkText = (props: LinkTextProp) => {
  const { theme } = useTheme();
  return <Text style={{ color: theme.colors.primary }} {...props} />;
};

const linkTextTagName = () => LinkText;

interface EnrichedTextProps {
  children: string;
  options?: any;
}

function EnrichedText({ children, options }: EnrichedTextProps) {
  return (
    <Linkify tagName={Text} options={{ ...options, tagName: linkTextTagName }}>
      {children}
    </Linkify>
  );
}

export default EnrichedText;
