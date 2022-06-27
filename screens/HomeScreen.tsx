import { RootTabScreenProps } from "../types";
import TweetsList from "../components/TweetsList";
import mockedTweets from "../constants/mocked-tweets";

export default function HomeScreen({
  navigation
}: RootTabScreenProps<"TabOne">) {
  return <TweetsList tweets={mockedTweets} />;
}
