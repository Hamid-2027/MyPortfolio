import styled from "styled-components";

export const Container = styled.section`
  padding: 0 10rem;

  @media (max-width: 740px){
    padding: 0 4rem;
  }

  @media(max-width: 360px){
    padding: 0 2rem;
  }
  background-color: #2b2b2b;
  padding-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  .hard-skills{
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;
  }
  .hability{
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
      width: 3.4rem;
    }
  }

  h2{
    display: inline-block;
    margin-bottom: 2rem;
    // border-bottom: 0.2rem solid var(--blue);
    font-size :3rem;
    margin-top: 0rem;
    color: var(--green);
  }

  h3{
    margin-top: 2rem;
    color: var(--green);
  }
  .greenText{
    // margin-top: 2rem;
    color: var(--green);
  }
  p{
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
    word-break: break-word;
  }
  
  

  .about-image{
   img{
    border:1.6px solid green;
    //  margin-top: 2rem;
     width: 75%;
      border-radius: 65px;
      border-top-left-radius: 140px; 
      border-bottom-right-radius: 140px; 
     filter: grayscale(0);
     transition: filter 0.5s;
     &:hover{
       filter: grayscale(0);
     }
   }
  }

  @media only screen and (max-width: 480px) {
    .about-image {
      max-width: 100%;
      margin-top: 4rem;
      img{
        margin-top: 2rem;
        width: 100%;
        filter: grayscale(0);
        transition: filter 0.5s;
        &:hover{
          filter: grayscale(0);
        }
    }
  }

  @media (max-width: 960px){
    grid-template-columns: 1fr;
    text-align: center;

    .about-image {
      justify-self: center;
    }
    
    .hard-skills{
      justify-content: center;
    }
  }

`