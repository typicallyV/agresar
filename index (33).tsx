.outer-wrapper {
  width: 100%;
  background-image: url('/bg.png');
  background-repeat: repeat;
  background-color: #fff;
  padding-bottom: 100px;

  h2,
  p {
    margin: 0;
  }

  .inner-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 50px;
    align-items: center;

    h2 {
      font-family: Axiforma Black;
      font-size: 49px;
      line-height: 54px;
      color: #383336;
      text-align: center;
    }

    p {
      font-family: Axiforma Regular;
      font-size: 21px;
      line-height: 29px;
      color: #383336;
      max-width: 945px;
      text-align: center;
    }

    @media (max-width: 1024px) {
      gap: 36px;
      h2 { font-size: 38px; line-height: 46px; }
      p  { font-size: 18px; line-height: 26px; }
    }

    @media (max-width: 768px) {
      gap: 24px;
      padding: 0 16px;
      img { display: none; }
      h2 { font-size: 28px; line-height: 36px; }
      p  { font-size: 16px; line-height: 24px; max-width: 100%; }
    }

    @media (max-width: 480px) {
      gap: 16px;
      h2 { font-size: 22px; line-height: 30px; }
      p  { font-size: 14px; line-height: 22px; }
    }
  }

  /* ── Lottie + overlaid logos ── */
  .lottie-section {
    position: relative;
    width: 100%;
    max-width: 3500px;
    margin: 0 auto;
    left: 50%;
    transform: translateX(-50%);
  }

  /* Desktop: Lottie on top */
  .lottie-wrapper {
    width: 100%;
    position: relative;
    z-index: 2;

    > div,
    svg {
      width: 100% !important;
      height: auto !important;
    }
  }

  /* Desktop: cards behind lottie */
  .logo-card {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
    background: #ffffff;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    padding: 12px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 14%;
    min-width: 90px;
    max-width: 180px;

    img {
      width: 100%;
      height: auto;
      object-fit: contain;
    }
  }

  .logo-left  { left: 32%; }
  .logo-right { right: 32%; }

  /* ── Tablet ── */
  @media (max-width: 1024px) {
    .lottie-section { width: 110%; }

    .logo-card {
      width: 15%;
      padding: 10px 14px;
    }

    .logo-left  { left: 25%; }
    .logo-right { right: 20%; }
  }

  /* ── Mobile: flip z-index so cards come forward ── */
  @media (max-width: 768px) {
    .lottie-section { width: 100%; left: auto; transform: none; }

    .lottie-wrapper { z-index: 1; }   /* lottie goes behind */

    .logo-card {
      z-index: 2;                      /* cards come forward */
      width: 20%;
      min-width: 65px;
      padding: 8px 10px;
      border-radius: 10px;
    }

    .logo-left  { left: 18%; }
    .logo-right { right: 18%; }
  }

  /* ── Small mobile ── */
  @media (max-width: 480px) {
    .logo-card {
      width: 22%;
      min-width: 50px;
      padding: 6px 8px;
    }

    .logo-left  { left: 15%; }
    .logo-right { right: 15%; }
  }

  @media (max-width: 768px) { padding-bottom: 60px; }
  @media (max-width: 480px) { padding-bottom: 40px; }
}