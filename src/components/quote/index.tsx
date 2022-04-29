import { DataProps } from "../main";
import { Box, Phrase } from "./styles";

interface Props {
  data: DataProps;
}

export function Quote({ data }: Props) {
  return (
    <Box>
      <Phrase>{data.quote}</Phrase>
      <div>
        <div></div>
        <p>- Kanye West</p>
      </div>
    </Box>
  );
}
