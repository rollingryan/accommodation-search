import { NextPage } from "next";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import axios from "axios";

import * as Styled from "@/pageStyles/appStyles";
import SearchHeader from "@/components/SearchHeader";
import SearchResults from "@/components/SearchResults";
import { results } from "../../__mocks__/results";
import { destinations } from "../../__mocks__/destinations";
import { selectedDestinationAtom } from "../app/recoil/atoms/selectedDestinationAtom";
import { allDestinationsAtom } from "../app/recoil/atoms/allDestinationsAtom";

const Home: NextPage = () => {
  const selectedDestination = useRecoilState(selectedDestinationAtom);
  const [allDestinations, setAllDestinations] =
    useRecoilState(allDestinationsAtom);

  // TODO: Fetch destinations from API currently getting CORS error
  // const fetchDestinations = async () => {
  //   const url =
  //     "https://topflight-assessment.s3.us-east-2.amazonaws.com/destinations.json";

  //   axios.get(url).then((res) => {
  //     console.log(res);
  //     return res;
  //   });
  // };

  useEffect(() => {
    return () => {
      // const destinations = fetchDestinations();
      setAllDestinations(destinations);
    };
  });

  const filteredResults = results.filter((result) => {
    return result.address.includes(selectedDestination[0]);
  });

  return (
    <Styled.Box>
      <SearchHeader destinations={allDestinations} />
      <SearchResults results={filteredResults} />
    </Styled.Box>
  );
};

export default Home;
