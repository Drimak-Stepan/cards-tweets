import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { TweetsList, FilterContainer } from "./Tweets.styles";
import Button from "../../shared/components/Button";
import TweetItem from "../TweetItem/TweetItem";
import FilterTweets from "../Filter/FilterTweets";
import { getTweets } from "../../utils/Api";
import Loader from "../../shared/Loader/Loader";

const Tweets = () => {
  const [state, setState] = useState({
    loading: false,
    load: false,
    error: null,
  });
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [follow, setFollow] = useState("");

  useEffect(() => {
    const fechTweets = async () => {
      try {
        setState((prevState) => ({
          ...prevState,
          loading: true,
        }));

        const { data } = await getTweets(page);
        if (data.length === 0) {
          setState((prevState) => ({
            ...prevState,
            load: true,
          }));
        }
        setItems((items) => [...items, ...data]);
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

  const handleFilterOpenChange = (isOpen) => {
    setIsFilterOpen(isOpen);
  };

  const navigate = useNavigate();

  const goBack = () => navigate("/");

  const visibleTweets = () => {
    if (isFilterOpen && follow !== "") {
      switch (follow) {
        case "show-all":
          return items;
        case "follow":
          return items.filter((item) => !item.following);
        case "followings":
          return items.filter((item) => item.following);
        default:
          return items;
      }
    }
    return items;
  };

  const tweetsList = visibleTweets();
  return (
    <>
      <FilterContainer>
        <Button onClick={goBack} type="button">
          {state.loading ? <Loader /> : "Go Back"}
        </Button>

        <FilterTweets
          follow={follow}
          setFollow={setFollow}
          onFilterOpenChange={handleFilterOpenChange}
        />
      </FilterContainer>

      <TweetsList>
        {tweetsList.map((item) => (
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

      {tweetsList.length > 2 && (
        <Button disabled={state.load} onClick={loadMore} type="button">
          {state.loading ? <Loader /> : "Lore more"}
        </Button>
      )}
    </>
  );
};

export default Tweets;
