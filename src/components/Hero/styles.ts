import styled from "styled-components";

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 2fr;
  align-items: center;
  justify-items: center;
  height: 100vh;
  gap: 2rem;

  .social-media-container {
    justify-self: start;
    position: relative;
    .shining-shadow {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 300%;
      height: 300%;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 60%);
      z-index: -1;
      pointer-events: none;
    }
    .social-media {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      img {
        width: 3rem;
        transition: all 0.25s;
        &:hover {
          filter: brightness(0.8);
          transform: scale(1.2);
        }
      }
    }
  }

  .hero-image {
    img {
      max-width: 100%;
      transition: transform 0.3s ease;
      &:hover {
        transform: scale(1.05);
      }
    }
  }

  .hero-text {
    justify-self: start;
    text-align: left;
    & > p {
      font-size: 2rem;
    }
    h1 {
      font-size: 6rem;
      margin-bottom: 1rem;
    }
    p.small-resume {
      font-size: 1.6rem;
      margin-bottom: 3rem;
      color: var(--green);
    }
    .button {
      margin-top: 3rem;
      padding: 1.4rem 6rem;
    }
  }

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    .social-media-container {
      display: none;
    }
    .hero-text {
      justify-self: center;
      text-align: center;
    }
  }
`;