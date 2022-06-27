import { Text, useTheme } from "@rneui/themed";
import { FlatList, ListRenderItem, RefreshControl, View } from "react-native";
import TweetCard from "./TweetCard/TweetCard";
import { Tweet } from "../types";

const keyExtractor = (item: Tweet): string => item.id?.toString?.();

function Separator() {
  const { theme } = useTheme();

  return (
    <View
      style={{
        borderTopColor: theme.colors.grey4,
        borderTopWidth: 1
      }}
    />
  );
}

const renderItem: ListRenderItem<Tweet> = ({ item }) => (
  <TweetCard tweet={item} />
);

function TweetsList({ tweets }: { tweets: Tweet[] }) {
  return (
    <FlatList
      ItemSeparatorComponent={Separator}
      data={tweets}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
}

export default TweetsList;
