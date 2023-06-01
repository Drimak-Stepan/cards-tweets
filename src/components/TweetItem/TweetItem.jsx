import { memo } from "react";
import { Item, Avatar } from "./TweetItem.styles";
import Button from "../../shared/components/Button";

const TweetItem = ({ user, tweets, followers, avatarUrl }) => {
  return (
    <Item>
      <Avatar src={avatarUrl} alt="avatar" />
      <p>{tweets} TWEETS</p>
      <p>{followers} FOLLOWERS</p>
      <Button type="button">FOLLOW</Button>
    </Item>
  );
};

export default memo(TweetItem);
