import { memo } from "react";
import { useState } from "react";
import {
  Item,
  Avatar,
  Text,
  Svg,
  Pictures,
  Circle,
  Line,
} from "./TweetItem.styles";
import Button from "../../shared/components/Button";
import logo from "../../images/icons.svg";
import Hansel from "../../images/Hansel.png";
import { updateFollowing } from "../../utils/Api";

const TweetItem = ({
  id,
  user,
  tweets,
  followers,
  following,
  avatarUrl = Hansel,
}) => {
  const [follow, setFollow] = useState(following);
  const [follower, setFollower] = useState(followers);

  const handleUpdate = async () => {
    try {
      setFollow(true);
      const updateToFollowing = {
        following: true,
        followers: follower + 1,
      };
      await updateFollowing(id, updateToFollowing);
      setFollower(followers + 1);
    } catch (error) {
      return error;
    }
  };

  const handleCancel = async () => {
    try {
      setFollow(false);
      const updateToFollowing = {
        following: false,
        followers: follower - 1,
      };
      await updateFollowing(id, updateToFollowing);
      setFollower(followers - 1);
    } catch (error) {
      return error;
    }
  };
  return (
    <Item>
      <Svg>
        <use href={`${logo}#icon-logo`}></use>
      </Svg>
      <Circle>
        <Avatar src={avatarUrl} alt="avatar" />
      </Circle>
      <Text>{tweets} TWEETS</Text>
      <Text>{follower.toLocaleString()} FOLLOWERS</Text>
      {follow ? (
        <Button
          onClick={handleCancel}
          type="button"
          style={{ backgroundColor: "#5CD3A8" }}
        >
          FOLLOWING
        </Button>
      ) : (
        <Button onClick={handleUpdate} type="button">
          FOLLOW
        </Button>
      )}
      <Pictures />
      <Line />
    </Item>
  );
};

export default memo(TweetItem);
