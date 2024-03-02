import StyledCard from "../../ui/Card";
import StyledHeading from "../../ui/Heading";
import InfiPhoto from "../../ui/InfiPhoto";
import MotionPath from "../../ui/MotionPath";
import StyledWave from "../../ui/Wave";

function HotSongs() {
  return (
    <>
      <StyledCard $width="100%" $height="100vh" $index={10} $bc="#fff" $bs={1}>
        <StyledHeading>NEW SONGS</StyledHeading>
        <StyledHeading $size="30px">Try to drag</StyledHeading>
        <StyledWave $color="#222" />
        <MotionPath />
      </StyledCard>
      <InfiPhoto />
    </>
  );
}

export default HotSongs;
