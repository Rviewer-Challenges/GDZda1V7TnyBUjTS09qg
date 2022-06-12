import { Text } from "@rneui/themed";
import { Tweet } from "../../types";

interface TweetCardContentProps {
  tweet: Tweet;
}

function TweetCardContent({ tweet }: TweetCardContentProps) {
  return <Text style={{ fontFamily: "Franklin Gothic" }}>{tweet.text}</Text>;
}

export default TweetCardContent;
