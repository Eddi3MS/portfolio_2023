import styled from 'styled-components'

export const Projects = styled.section`
  min-height: calc(100vh - var(--header-height));
  background: var(--bg);
  position: relative;
  z-index: 5;

  display: flex;
  flex-direction: column;
  padding-bottom: 2.5rem;

  h2 {
    text-align: center;
    padding-block: 2.5rem;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
  }

  .projects__slider {
    max-width: 764px;
    width: 96%;
    margin-inline: auto;
    padding: 0.5rem 1.5rem;

    .swiper-slide {
      &.swiper-slide-active .project__card {
        border-color: var(--colors-ignite300);
        transform: scale(1);
        opacity: 1;
      }
    }

    .project__card {
      transform: scale(0.8);
      opacity: 0.8;
      will-change: transform;
      transition: transform 1000ms ease;

      img {
        width: 100%;
        height: auto;
        border-radius: 8px 8px 0 0;
      }

      h3 {
        text-align: center;
        letter-spacing: 0.8px;
        padding: 0.5rem 1.5rem;
      }

      p:nth-of-type(1) {
        padding-bottom: 0.5rem;
        text-align: center;
        color: var(--colors-gray400);
      }
      p:nth-of-type(2) {
        padding-bottom: 1.5rem;
      }

      button {
        margin-inline: auto;
        text-transform: uppercase;
        font-weight: 500;
      }
    }
  }

  .swiper-navigation {
    margin-inline: auto;
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    .swiper-pagination {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      .swiper-pagination-bullet {
        display: inline-block;
        width: 12px;
        height: 12px;
        border-radius: 50%;
        background: var(--primary);
        opacity: 0.3;
        cursor: pointer;

        &-active {
          background: var(--primary);
          opacity: 1;
        }
      }
    }

    .swiper-button-prev,
    .swiper-button-next {
      color: var(--primary);
      cursor: pointer;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid transparent;
      transition: all 0.2s ease-in;

      &:not(.swiper-button-disabled):hover {
        border-color: var(--primary);
      }

      &.swiper-button-disabled {
        opacity: 0.3;
        cursor: not-allowed;
      }
    }
  }
`
