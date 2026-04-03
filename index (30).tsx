.outer-wrapper {
  width: 100%;
  background-image: url('/bg.png');
  background-repeat: repeat;
  background-color: #fffcf3;
  padding: 78px 0 83px;

  h1,
  h2,
  h3,
  h4,
  h5,
  p {
    margin: 0;
    padding: 0;
  }

  .inner-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;

    h2 {
      font-family: Axiforma Black;
      font-size: 49px;
      text-align: center;
      color: #383336;
    }

    .cards {
      display: flex;
      justify-content: space-between;
      gap: 43px;
      margin-top: 131px;

      .card {
        height: 303px;
        width: 317px;
        box-shadow: 0px 3px 15px #0000001c;
        text-align: center;
        background: #fff;
        border-radius: 22px;
        position: relative;
        padding-top: 70px;

        .icon {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          top: -58px;
        }

        h1 {
          font-family: Axiforma Black;
          font-size: 92px;
          line-height: 123px;
          color: #383336;
        }

        p {
          font-family: Axiforma Bold;
          font-size: 33px;
          line-height: 36px;
          color: #000000;
          margin: 0;
        }
      }
    }

    p {
      margin: 96px auto 140px;
      text-align: center;
      max-width: 945px;
      font-family: Axiforma Regular;
      font-size: 21px;
      line-height: 29px;
      color: #383336;
    }

    /* ── Banner / Loop fix ── */
    .banner-container {
      display: flex;
      justify-content: center;
      width: 100%;

      /* Make the Next.js Image scale correctly */
      img {
        width: 60% !important;
        height: auto !important;
        max-width: 700px;
      }
    }

    /* ── Tablet ── */
    @media (max-width: 1024px) {
      h2 {
        font-size: 38px;
      }

      .banner-container img {
        width: 75% !important;
      }
    }

    /* ── Mobile ── */
    @media (max-width: 768px) {
      h2 {
        font-size: 28px;
        line-height: 36px;
      }

      p {
        font-size: 16px;
        line-height: 24px;
        margin: 60px auto 80px;
      }

      .cards {
        flex-direction: column;
        align-items: center;
        margin-top: 80px;
        gap: 70px; /* extra gap so icons don't clip */

        .card {
          width: 100%;
          max-width: 320px;
        }
      }

      .banner-container img {
        width: 90% !important;
      }
    }

    /* ── Small mobile ── */
    @media (max-width: 480px) {
      h2 {
        font-size: 22px;
        line-height: 30px;
      }

      .banner-container img {
        width: 100% !important;
      }
    }
  }

  /* ── Outer padding reduction on mobile ── */
  @media (max-width: 768px) {
    padding: 50px 0 60px;
  }

  @media (max-width: 480px) {
    padding: 36px 0 48px;
  }
}