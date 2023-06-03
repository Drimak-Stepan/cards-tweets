import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { TweetsList, FilterContainer } from "./Tweets.styles";
import Button from "../../shared/components/Button";
import TweetItem from "../TweetItem/TweetItem";
import FilterTweets from "../Filter/FilterTweets";
// import SelectedFilters from "../../shared/components/SelectedFilters/SelectedFilters";
import { getTweets } from "../../utils/Api";

const Tweets = () => {
  const [state, setState] = useState({
    loading: false,
    load: false,
    error: null,
  });
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  // const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [follow, setFollow] = useState("");

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
  // const handleFilterOpenChange = (isOpen) => {
  //   setIsFilterOpen(isOpen);
  // };

  // const getFollowLabel = (value) => {
  //   switch (value) {
  //     case "show-all":
  //       return "show all";
  //     case "follow":
  //       return "follow";
  //     case "followings":
  //       return "followings";
  //     default:
  //       return "";
  //   }
  // };
  // const selectedFilters = [
  //   ...(follow ? [{ label: getFollowLabel(follow), value: follow }] : []),
  // ];

  const navigate = useNavigate();
  const goBack = () => navigate("/");
  return (
    <>
      <FilterContainer>
        <Button onClick={goBack} type="button">
          Go Back
        </Button>
        <FilterTweets
          follow={follow}
          setFollow={setFollow}
          // onFilterOpenChange={handleFilterOpenChange}
        />
        {/* {isFilterOpen && (
          <SelectedFilters filters={selectedFilters} setFollow={setFollow} />
        )} */}
      </FilterContainer>
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