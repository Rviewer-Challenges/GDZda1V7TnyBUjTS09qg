import { Avatar, Button, Text, useTheme } from "@rneui/themed";
import { StyleProp, View, ViewStyle } from "react-native";
import { Tweet } from "../../types";
import MoreOptionsIcon from "../common/icons/MoreOptionsIcon";
import VerifyIcon from "../common/icons/VerifyIcon";
import { getFormattedDateString } from "../common/widgets/DateFormatter";
import InteractionButtons from "./InteractionButtons";
import TweetCardContent from "./TweetCardContent";

interface TweetCardProps {
  tweet: Tweet;
  style?: StyleProp<ViewStyle>;
}

function TweetCard({ tweet, style }: TweetCardProps) {
  const { theme } = useTheme();
  const { user } = tweet || {};
  const postedAgo = getFormattedDateString(tweet.createdAt);

  return (
    <View
      style={[
        {
          backgroundColor: theme.colors.background,
          width: "100%",
          paddingHorizontal: theme.spacing.xl,
          paddingVertical: theme.spacing.lg,
          flexDirection: "row"
        },
        style
      ]}
    >
      <View>
        <Avatar size="medium" source={{ uri: user.avatarUri }} rounded />
      </View>
      <View
        style={{
          marginLeft: theme.spacing.lg,
          flex: 1
        }}
      >
        <View style={{ flexDirection: "row" }}>
          <Text
            style={{ fontSize: 14, fontWeight: "bold", flexShrink: 1 }}
            numberOfLines={1}
          >
            {user.fullName}
          </Text>
          {user.isVerified ? (
            <VerifyIcon
              width={15.75}
              height={15.75}
              color={theme.colors.black}
              style={{ alignSelf: "center", marginLeft: 6 }}
            />
          ) : null}
          <Text
            style={{
              fontSize: 13,
              color: theme.colors.grey2,
              marginLeft: 4,
              flexShrink: 2
            }}
            numberOfLines={1}
          >
            @{user.username}
          </Text>
          <Text
            style={{
              fontSize: 13,
              color: theme.colors.grey2,
              marginLeft: 4
            }}
          >
            ·
          </Text>
          <Text
            style={{
              fontSize: 13,
              color: theme.colors.grey2,
              marginLeft: 4
            }}
          >
            {postedAgo}
          </Text>
          <Button
            type="clear"
            containerStyle={{
              alignSelf: "center",
              marginLeft: "auto",
              marginRight: -8
            }}
          >
            <MoreOptionsIcon color={theme.colors.grey2} />
          </Button>
        </View>
        <TweetCardContent
          tweet={tweet}
          style={{ marginTop: theme.spacing.sm }}
        />
        <InteractionButtons
          tweet={tweet}
          style={{ marginTop: theme.spacing.sm }}
        />
      </View>
    </View>
  );
}

export default TweetCard;
