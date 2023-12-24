import { useEffect, useState } from "react";
import { RESTAURANT_DETAIL_URL } from "../components/config";

const useRestaurant = (id) => {
  const [details, setDetails] = useState(null);
  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = async () => {
    let res = await fetch(
      `${RESTAURANT_DETAIL_URL}${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    res = await res.json();
    setDetails(res?.data?.cards[0]?.card?.card?.info);
  };
  return details;
};
export default useRestaurant;
