import { Button, Text, useTheme } from "@rneui/themed";
import { StyleProp, View, ViewStyle } from "react-native";
import ShareIcon from "../common/icons/ShareIcon";
import LikeIcon from "../common/icons/LikeIcon";
import RetweetIcon from "../common/icons/RetweetIcon";
import CommentIcon from "../common/icons/CommentIcon";
import { Tweet } from "../../types";

interface InteractionButtonsProps {
  tweet: Tweet;
  style: StyleProp<ViewStyle>;
}

function InteractionButtons({ tweet, style }: InteractionButtonsProps) {
  const { theme } = useTheme();

  return (
    <View
      style={[
        {
          flexDirection: "row",
          justifyContent: "space-between"
        },
        style
      ]}
    >
      <Button
        title="Likes"
        type="clear"
        containerStyle={{
          justifyContent: "flex-end",
          marginHorizontal: -10,
          marginBottom: -8
        }}
      >
        <CommentIcon color={theme.colors.grey2} width={18} height={18} />
        <Text
          style={{
            fontSize: 12,
            marginTop: -4,
            marginLeft: 7,
            color: theme.colors.grey2
          }}
        >
          {tweet.comments}
        </Text>
      </Button>
      <Button
        title="Likes"
        type="clear"
        containerStyle={{
          justifyContent: "flex-end",
          marginHorizontal: -10,
          marginBottom: -8
        }}
      >
        <RetweetIcon color={theme.colors.grey2} width={18} height={18} />
        <Text
          style={{
            fontSize: 12,
            marginTop: -4,
            marginLeft: 7,
            color: theme.colors.grey2
          }}
        >
          {tweet.retweets}
        </Text>
      </Button>
      <Button
        title="Likes"
        type="clear"
        containerStyle={{
          justifyContent: "flex-end",
          marginHorizontal: -10,
          marginBottom: -8
        }}
      >
        <LikeIcon color={theme.colors.grey2} width={18} height={18} />
        <Text
          style={{
            fontSize: 12,
            marginTop: -4,
            marginLeft: 7,
            color: theme.colors.grey2
          }}
        >
          {tweet.likes}
        </Text>
      </Button>
      <Button
        title="Likes"
        type="clear"
        containerStyle={{
          justifyContent: "flex-end",
          marginHorizontal: -10,
          marginBottom: -8
        }}
      >
        <ShareIcon color={theme.colors.grey2} width={18} height={18} />
      </Button>
    </View>
  );
}

export default InteractionButtons;