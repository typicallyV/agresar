.outer-wrapper {
  width: 820px;
  height: 480px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 3px 15px #0000001c;
  border-radius: 22px;

  h3,
  p,
  h2 {
    margin: 0;
  }

  .header {
    padding: 20px;
    height: 120px;
    background: #fffcf3;
    box-shadow: 0px 3px 15px #0000001c;
    border-radius: 22px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 8px;

    .text1 {
      font-family: Axiforma Regular;
      font-size: 25px;
      line-height: 27px;
      color: #383336;
    }
    .text2 {
      font-family: Axiforma Heavy;
      font-size: 25px;
      line-height: 27px;
      color: #383336;
    }
  }
  .content {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 40px;

    .left {
      img {
        justify-content: center;
        box-shadow: 0px 3px 15px #0000001c;
        border-radius: 22px;
        padding: 20px;
      }
    }

    .right {
      h3 {
        font-family: Axiforma Black;
        font-size: 26px;
        line-height: 29px;
        color: #383336;
        margin-bottom: 15px;
      }
      .bank-details {
        padding: 15px 0;
        .name {
          font-family: Axiforma Regular;
          font-size: 25px;
          line-height: 27px;
          color: #383336;
        }
        .value {
          font-family: Axiforma Heavy;
          font-size: 25px;
          line-height: 27px;
          color: #383336;
        }
      }
    }
  }
}
Container .outer-sm {
  .content-sm {
    .left-sm {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  
    .right-sm {
      width: 100%;
      position: absolute;
      top: 100%;
      .bank-details-sm {
        padding: 15px 0;
        .name {
          font-family: Axiforma Regular;
          font-size: 25px;
          line-height: 27px;
          color: #383336;
        }
        .value {
          font-family: Axiforma Heavy;
          font-size: 25px;
          line-height: 27px;
          color: #383336;
        }
      }
    }
  }
}