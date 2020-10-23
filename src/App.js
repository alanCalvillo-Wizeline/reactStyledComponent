import React, { useState } from "react";
import axios from "axios";

import Button from "./components/button";
import NavBar from "./components/navbar/navbar";
import Input from "./components/input";
import Modal from "./components/modal";

import { ModalContent, Close, LabelModal } from "./App.styled";

import "./App.css";

const check_cookie_name = (name) => {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  let returnValue = "";
  if (match) {
    returnValue = match[2];
  }
  return returnValue;
};

function App() {
  const [showModal, setShowModal] = useState(false);
  const [productName, setProductName] = useState("");
  const [productCost, setProductCost] = useState("");
  const [productLocation, setProductLocation] = useState("");

  const saveProduct = () => {
    let formData = new FormData();
    formData.append("productName", productName);
    formData.append("productCost", productCost);
    formData.append("productLocation", productLocation);
    const headerCookie = check_cookie_name("XSRF-TOKEN");
    axios
      .post(`save`, formData, {
        "XSRF-TOKEN": headerCookie,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

  console.log(showModal);
  return (
    <div>
      <NavBar onOpenModal={() => setShowModal(true)} />
      {showModal && (
        <Modal>
          <ModalContent>
            <Close onClick={() => setShowModal(false)}>&times;</Close>
            <div>
              <LabelModal>Product Name</LabelModal>
              <Input
                value={productName}
                type="text"
                placeholder="Product Name"
                onChange={(e) => setProductName(e.target.value)}
              />
              <LabelModal>Product Cost</LabelModal>
              <Input
                value={productCost}
                type="text"
                placeholder="Product Cost"
                onChange={(e) => setProductCost(e.target.value)}
              />
              <LabelModal>Location</LabelModal>
              <Input
                value={productLocation}
                type="text"
                placeholder="Product Location"
                onChange={(e) => setProductLocation(e.target.value)}
              />
              <Button onClick={saveProduct}>Save</Button>
            </div>
          </ModalContent>
        </Modal>
      )}
    </div>
  );
}

export default App;
