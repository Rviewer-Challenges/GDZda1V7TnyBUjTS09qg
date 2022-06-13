import { useTheme } from "@rneui/themed";
import { StyleProp, View, ViewStyle } from "react-native";
import { Tweet } from "../../types";
import { Image } from "@rneui/themed";
import EnrichedText from "../common/widgets/EnrichedText";

interface TweetCardContentProps {
  tweet: Tweet;
  style?: StyleProp<ViewStyle>;
}

function TweetCardContent({ tweet, style }: TweetCardContentProps) {
  const { theme } = useTheme();
  const { text, medias } = tweet || {};

  const isSingleMedia = medias.length === 1;
  const firstRowMedias = medias.slice(0, 2);
  const lastRowMedias = medias.slice(2);

  return (
    <View style={style}>
      {text ? <EnrichedText>{text}</EnrichedText> : null}
      {medias?.length > 0 ? (
        <View
          style={{
            width: "100%",
            marginTop: theme.spacing.lg,
            borderColor: theme.colors.grey4,
            borderWidth: isSingleMedia ? 1 : 0,
            borderRadius: theme.spacing.xl,
            overflow: "hidden",
            aspectRatio: 1
          }}
        >
          {isSingleMedia ? (
            <Image
              source={{ uri: medias[0].url }}
              containerStyle={{
                width: "100%",
                flex: 1,
                aspectRatio: 1
              }}
            />
          ) : (
            <>
              <View
                style={{
                  width: "100%",
                  flexDirection: "row"
                }}
              >
                {firstRowMedias.map(({ url }) => (
                  <Image
                    source={{ uri: url }}
                    containerStyle={{
                      width: "100%",
                      flex: 1,
                      aspectRatio: 1,
                      borderColor: theme.colors.grey4,
                      borderWidth: 1
                    }}
                  />
                ))}
              </View>
              <View style={{ width: "100%", flexDirection: "row" }}>
                {lastRowMedias.map(({ url }) => (
                  <Image
                    source={{ uri: url }}
                    containerStyle={{
                      width: "100%",
                      flex: 1,
                      aspectRatio: 1,
                      borderColor: theme.colors.grey4,
                      borderWidth: 1
                    }}
                  />
                ))}
              </View>
            </>
          )}
        </View>
      ) : null}
    </View>
  );
}

export default TweetCardContent;
