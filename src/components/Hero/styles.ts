import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;

  .hero-text {
    & > p {
      font-size: 2rem;
    }
    h1 {
      font-size: 8rem;
      margin-bottom: 1rem;
    }
    p.small-resume {
      font-size: 1.6rem;
      margin-bottom: 3rem;
    }
    .button {
      margin-top: 3rem;
      padding: 1.4rem 6rem;
    }
  }

  .social-media-container {
    position: fixed;
    left: 2rem;
    top: 50%;
    transform: translateY(-50%);
    .social-media {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      img {
        width: 3rem;
        transition: filter 0.25s;
        &:hover {
          filter: brightness(0.8);
        }
      }
    }
  }

  @media (max-width: 960px) {
    .hero-text {
      h1 {
        font-size: 6rem;
      }
    }
    .social-media-container {
      display: none;
    }
  }

  @media (max-width: 600px) {
    height: auto;
    padding: 15rem 0 5rem;
    .hero-text {
      h1 {
        font-size: 4rem;
      }
    }
  }
`;