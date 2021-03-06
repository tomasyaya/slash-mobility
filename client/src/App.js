import React from "react";
import ItemCtx from "./context/itemCtx";
import ShopGrid from "./views/ShopGrid";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import ErrorBoundary from "./components/ErrorBoundary";

import { MainContainer } from "./AppStyles";

function App() {
  return (
    <ItemCtx>
      <Modal />
      <Navbar />
      <MainContainer>
        <ErrorBoundary>
          <ShopGrid />
        </ErrorBoundary>
      </MainContainer>
      <Footer />
    </ItemCtx>
  );
}

export default App;
