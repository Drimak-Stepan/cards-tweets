import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { TweetsList } from "./Tweets.styles";
import Button from "../../shared/components/Button";
import TweetItem from "../TweetItem/TweetItem";
import { getTweets } from "../../utils/Api";

const Tweets = () => {
  const [state, setState] = useState({
    loading: false,
    load: false,
    error: null,
  });
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fechTweets = async () => {
      try {
        setState((prevState) => ({
          ...prevState,
          loading: true,
        }));

        const { data } = await getTweets(page);
        setItems((items) => [...items, ...data]);
        setState((prevState) => ({
          ...prevState,
          load: true,
        }));

        if (data.length < 3)
          setState((prevState) => ({
            ...prevState,
            load: false,
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
    if (page) {
      fechTweets();
    }
  }, [page]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const navigate = useNavigate();
  const goBack = () => navigate("/");

  return (
    <>
      <Button onClick={goBack} type="button">
        Go Back
      </Button>
      <TweetsList>
        {items.map((item) => (
          <TweetItem
            key={item.id}
            id={item.id}
            user={item.user}
            tweets={item.tweets}
            followers={item.followers}
            avatarUrl={item.avatar}
            following={item.following}
          />
        ))}
      </TweetsList>
      {state.load && (
        <Button onClick={loadMore} type="button">
          Lore more
        </Button>
      )}
    </>
  );
};

export default Tweets;
