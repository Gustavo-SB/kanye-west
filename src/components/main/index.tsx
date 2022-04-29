import { useEffect, useState } from "react";
import { Quote } from "../quote";
import { api } from "./../../services/api";
import { Box, Button } from "./styles";
import { FiRotateCcw } from "react-icons/fi";

export interface DataProps {
  quote: string;
}

export function MainBanner(){
  const [data, setData] = useState<DataProps>({} as DataProps);

  useEffect(() => {
    api.get("").then((response) => {
      console.log(response.data);
      setData(response.data);
    });
  }, []);

  function handleRefreshQuote() {
    api.get("").then((response) => {
      setData(response.data);
    });
  }

  return (
    <>
      <Box>
        <Button onClick={handleRefreshQuote}>
          <div>
            <FiRotateCcw />
          </div>
          Refresh
        </Button>
      </Box>
      <Quote data={data} />
    </>
  );
};
