import { NextPage } from "next";

import * as Styled from "@/pageStyles/appStyles";
import { data } from "../../__mocks__/data";
import SearchHeader from "../components/SearchHeader";
import SearchResults from "../components/SearchResults";

const Home: NextPage = () => {
  return (
    <Styled.Container>
      <SearchHeader data={data?.results} />
      <SearchResults data={data?.results} />
    </Styled.Container>
  );
};

export default Home;
