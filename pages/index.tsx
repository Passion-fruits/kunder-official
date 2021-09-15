import MusicCard from "../components/MusicCard";
import { BASE_WRAPPER, BASE_CONTAINER } from "./../styles/index";

export default function Home() {
  return (
    <BASE_WRAPPER>
      <BASE_CONTAINER>
        <MusicCard />
      </BASE_CONTAINER>
    </BASE_WRAPPER>
  );
}
