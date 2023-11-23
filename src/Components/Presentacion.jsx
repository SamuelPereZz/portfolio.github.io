import styled from "@emotion/styled";
import { typography } from "../Styles";
import photo from "../assets/Photo.jpg";
import { keyframes } from "@emotion/react";

export const slideInBlurredLeft = keyframes`
  0% {
    transform: translateX(-1000px) scaleX(2.5) scaleY(0.2);
    transform-origin: 100% 50%;
    filter: blur(40px);
    opacity: 0;
  }
  100% {
    transform: translateX(0) scaleY(1) scaleX(1);
    transform-origin: 50% 50%;
    filter: blur(0);
    opacity: 1;
  }
`;

const FirstSection = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 9rem 10rem;
  margin: 0 auto;
  @media (max-width: 1100px) {
    flex-direction: column-reverse;
    justify-content: center;
    padding: 3rem 6rem;
  }
  @media (max-width: 500px) {
    padding: 2rem 3rem;
  }
`;

const SummaryMeContainer = styled.div`
  padding: 0 64px;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  span {
    color: #385b93;
  }
  animation: ${slideInBlurredLeft} 1s ease-in-out;
  @media (max-width: 1100px) {
    padding: 0;
  }
  @media (max-width: 500px) {
    animation: ${slideInBlurredLeft} 0s ease-in-out;
  }
`;

const PhotoDiv = styled.div`
  border-radius: 8px;
  width: 220px;
  height: 320px;
  display: flex;
  @media (max-width: 1100px) {
    max-width: 200px;
    max-height: 250px;
  }
  animation: ${slideInBlurredLeft} 1s ease-in-out;
`;

const PhotoMe = styled.img`
  border-radius: 8px;
  filter: drop-shadow(4px 4px 8px #999999);
  z-index: 1;
  object-fit: cover;
  transition: all 0.8s;
  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 1100px) {
    max-width: 200px;
    max-height: 250px;
  }
`;

const Greeting = styled.p`
  color: #0e1425;
  ${typography.head.head2}
  @media (max-width: 1100px) {
    ${typography.head.head4}
  }
  @media (max-width: 500px) {
    ${typography.head.head5}
  }
`;

const SummaryMe = styled.p`
  color: #0e1425;
  ${typography.head.head5}
  @media (max-width: 1100px) {
    ${typography.head.head5}
  }
  @media (max-width: 500px) {
    ${typography.text.body1}
  }
`;

function Presentacion() {
  return (
    <FirstSection>
      <SummaryMeContainer>
        <Greeting>
          Hi there! I'm <span>Samuel Pérez</span>, a passionate{" "}
          <span>developer</span> on a journey of endless curiosity.
        </Greeting>
        <SummaryMe>
          I thrive on crafting elegant and robust solutions, bringing ideas to
          life through code. <br /> With a keen eye for detail, I ensure not
          only functionality but also aesthetics in all my projects. My love for
          technology extends beyond coding I'm constantly exploring new
          technologies and methodologies to stay at the forefront of the
          ever-evolving tech landscape.
        </SummaryMe>
      </SummaryMeContainer>
      <PhotoDiv>
        <PhotoMe src={photo} alt="Photo Samuel Pérez" />
      </PhotoDiv>
    </FirstSection>
  );
}

export default Presentacion;
