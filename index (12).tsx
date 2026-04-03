.outer-wrapper {
  width: 100%;
  overflow-x: hidden;
  position: sticky;
  top: 0;
  background: #fff;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.1098039216);
  z-index: 9999;

  .container-fluid {
    max-width: 100%;
    padding-left: 15px;
    padding-right: 15px;
  }
  .navbar-collapse {
    max-width: 100%;
    overflow-x: hidden;
  }  
  .inner-wrapper {
    max-width: 1200px;
    margin: 0 auto;
    height: 139px;
    // padding: 16px 141px 10px 176px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      width: auto;
    }
    .nav-items {
      display: flex;
      gap: 48px;
    }
  }
}
