import { memo } from "react";
import React, { useState } from "react";
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
  const [follow, setFollow] = useState(true);

  const handleUpdate = async () => {
    try {
      const updateToFollowing = {
        following: follow,
      };

      await updateFollowing(id, updateToFollowing);
      setFollow(false);
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
      <Text>{followers.toLocaleString()} FOLLOWERS</Text>
      <Button onClick={handleUpdate} type="button">
        FOLLOW
      </Button>
      <Pictures />
      <Line />
    </Item>
  );
};

export default memo(TweetItem);
