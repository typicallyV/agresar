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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h3 {
      font-family: Axiforma Black;
      font-size: 49px;
      line-height: 54px;
      color: #383336;
      text-align: center;
      margin-bottom: 20px;
    }
    p {
      font-family: Axiforma SemiBold;
      font-size: 33px;
      line-height: 36px;
      color: #00a859;
      text-align: center;
    }
    .cards {
      margin-top: 50px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 64px;
    }

    @media(max-width: 768px) {
      .cards {
        margin-top: 50px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 64px;
        display: flex;
        flex-direction: column;
      }
    }
  }
}
