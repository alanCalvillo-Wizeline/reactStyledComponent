import React from 'react';
import axios from 'axios';
import styled, { css } from 'styled-components';
import './App.css';

const Button = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: palevioletred;
  color: ${props => (props.primary ? 'violet' : 'palevioletred')};
  border: ${props =>
    props.primary ? '2px solid violet' : '2px solid palevioletred'};
  margin: 0 1em;
  margin-top 5px;
  padding: 0.25em 1em;
  
  transition: 0.5s all ease-out;
 
  &:hover {
    color: white;
    background-color: ${props =>
      props.primary ? 'violet' : 'palevioletred'};
  }
`;

const ButtonSearch = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  color: gray;
  color: gray;
  
`;

const Nav = styled.div`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
`;
const NavHeader = styled.div`
  max-width: 1010px;
  padding: 26px 20px;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0 auto;
`;
 
const NavLeft = styled.div`
  width: 33.333%;
  text-align: left;
`;
 
const NavCenter = styled.div`
  width: 33.333%;
  text-align: center;
  display:inline;
`;
 
const Input = styled.input`
  border: solid 1px #dbdbdb;
  border-radius: 3px;
  color: #262626;
  padding: 7px 33px;
  border-radius: 3px;
  color: #999;
  cursor: text;
  font-size: 14px;
  
  font-weight: 300;
  text-align: center;
  background: #fafafa;
 
  &:active,
  &:focus {
    text-align: left;
  }
`;
const InputModal = styled.input`
  border: solid 1px #dbdbdb;
  border-radius: 3px;
  color: #262626;
  padding: 7px 33px;
  border-radius: 3px;
  color: #999;
  cursor: text;
  font-size: 14px;
  width : 90%;
  font-weight: 300;
  text-align: center;
  background: #fafafa;

  &:active,
  &:focus {
    text-align: left;
  }
`;
const LabelModal = styled.label`
  font-size: 14px;
  width : 60%;
  font-weight: 300;
  text-align: center;
`;
 
const NavRight = styled.div`
  width: 33.333%;
  text-align: right;
 
  svg {
    margin-right: 20px;
  }
`;

const MenuLink = styled.a``;

const Modal = styled.div`
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
`;
const CloseModal = styled.span`
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  cursor : pointer;
  
`;
const AddProduct = styled.div``;

const check_cookie_name = (name) =>
{
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  let returnValue ='';
  if (match) {
    returnValue=match[2];
  }
  return returnValue;
}

const search = ()=>
{
  console.log('search event');
}

const modalProduct = ()=>
{
  const modal = document.getElementById("modal");   
  const addProductContent = document.getElementById("addProductContent") ;
  modal.style.display = "block";
}

const closeModal = () =>
{
  const modal = document.getElementById("modal");  
  modal.style.display = "none";
}
const saveProduct = ()=>
{
  let formData = new FormData()
  formData.append('productName',document.getElementById('productName').value);
  formData.append('productCost',document.getElementById('productCost').value);
  formData.append('productLocation',document.getElementById('productLocation').value);
  const headerCookie =check_cookie_name('XSRF-TOKEN');
  axios.post(
    `save`, 
    formData ,
    {
      'XSRF-TOKEN': headerCookie
    }
  )
  .then(res => {
    console.log(res);
    console.log(res.data);
  });
}

window.onclick = function(event) {
  const modal = document.getElementById("modal");  
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function App() {
  return (
    <div>
        <Nav>
          <NavHeader>
            <NavLeft>Product Management</NavLeft>
    
            <NavCenter>
                <Input type="text" placeholder="Product Name" /> <ButtonSearch onClick={search}>Search</ButtonSearch>
            </NavCenter>
    
            <NavRight>
              <MenuLink href="#">
                  <Button onClick={modalProduct}>Add Product</Button>
              </MenuLink>
            </NavRight>
          </NavHeader>
        </Nav>
        <Modal id="modal">
            <ModalContent>
                <CloseModal onClick={closeModal}>&times;</CloseModal>
                <AddProduct>
                  <LabelModal>Product Name</LabelModal>
                  <InputModal id="productName"  type="text" placeholder="Product Name" />
                  <LabelModal>Product Cost</LabelModal>
                  <InputModal id="productCost" type="text" placeholder="Product Cost" />
                  <LabelModal>Location</LabelModal>
                  <InputModal id="productLocation" type="text" placeholder="Product Location" />
                  <Button onClick={saveProduct}>Save</Button>
                </AddProduct>
            </ModalContent>
        </Modal>
    </div>
  );
}

export default App;
