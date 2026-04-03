.outer-wrapper {
  width: 100%;
  background: #fff;
  margin-bottom: 100px;
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
    h2 {
      text-align: center;
      margin-bottom: 70px;
      font-family: Axiforma Black;
      font-size: 49px;
      line-height: 54px;
      color: #383336;
    }
    .content {
      display: flex;
      gap: 200px;

      .years {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 14px;

        .year {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 12px;

          div {
            height: 18px;
            width: 18px;
            border-radius: 50%;
            background: rgb(245, 135, 51);
            background: linear-gradient(
              270deg,
              rgba(245, 135, 51, 1) 0%,
              rgba(254, 171, 32, 1) 50%
            );
          }

          .selected {
            opacity: 1;
            cursor: pointer;
          }
          .unselected {
            opacity: 0.28;
            cursor: pointer;
          }
        }
      }

      .data {
        max-width: 666px;

        .big-text {
          font-family: Axiforma Black;
          font-size: 347px;
          line-height: 382px;
          color: #383336;
        }
        .small-text {
          font-family: Axiforma Regular;
          font-size: 21px;
          line-height: 35px;
          color: #383336;
        }
      }

      @media(max-width: 768px) {
        .data {
          .big-text {
            font-family: Axiforma Black;
            font-size: 100px;
            line-height: 382px;
            color: #383336;
          }
        }
      }
    }

    @media(max-width: 768px) {
      .content {
        gap: 50px;
      }
    }
  }
}
