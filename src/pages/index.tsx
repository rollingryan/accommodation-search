import { NextPage } from "next";

import * as Styled from "@/pageStyles/appStyles";
import SearchHeader from "@/components/SearchHeader";
import SearchResults from "@/components/SearchResults";
import { results } from "../../__mocks__/results";
import { destinations } from "../../__mocks__/destinations";

const Home: NextPage = () => {
  return (
    <Styled.Box>
      <SearchHeader destinations={destinations} />
      <SearchResults results={results} />
    </Styled.Box>
  );
};

export default Home;
