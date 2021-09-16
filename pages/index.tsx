import MusicRowCard from "../components/MusicRowCard";
import { BASE_CONTAINER, BASE_WRAPPER } from "../styles";

export default function Home() {
  return (
    <BASE_WRAPPER>
      <BASE_CONTAINER>
        <MusicRowCard />
        <MusicRowCard />
        <MusicRowCard />
        <MusicRowCard />
        <MusicRowCard />
        <MusicRowCard />
      </BASE_CONTAINER>
    </BASE_WRAPPER>
  );
}
