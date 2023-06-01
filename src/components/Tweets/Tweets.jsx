import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { TweetsList } from "./Tweets.styles";
import Button from "../../shared/components/Button";
import TweetItem from "../TweetItem/TweetItem";
import { getTweets } from "../../utils/Api";

const Tweets = () => {
  const [state, setState] = useState({
    items: [],
    page: 1,
    loading: false,
    error: null,
  });

  useEffect(() => {
    const fechTweets = async () => {
      try {
        setState((prevState) => ({
          ...prevState,
          loading: true,
        }));

        const data = await getTweets();
        setState((prevState) => ({
          ...prevState,
          items: data,
        }));
      } catch (error) {
        setState((prevState) => ({
          ...prevState,
          error,
        }));
      } finally {
        setState((prevState) => ({
          ...prevState,
          loading: false,
        }));
      }
    };

    if (state.page === 1) {
      fechTweets();
    }
  }, [state.page]);

  const loadMore = () => {
    setState((prevState) => ({
      ...prevState,
      page: state.page + 1,
    }));
  };

  const navigate = useNavigate();
  const goBack = () => navigate("/");

  const { items } = state;

  return (
    <>
      <Button onClick={goBack} type="button">
        Go Back
      </Button>
      <TweetsList>
        {items.map((item) => (
          <TweetItem
            key={item.id}
            user={item.user}
            tweets={item.tweets}
            followers={item.followers}
            avatarUrl={item.avatar}
          />
        ))}
      </TweetsList>
      <Button onClick={loadMore} type="button">
        Lore more
      </Button>
    </>
  );
};

export default Tweets;
