import { loginStart, loginSuccess, loginFailure } from "./userRedux";
import { publicRequest, userRequest } from "../middleware/requestMethods";
import { getProductStart, 
         getProductSuccess, 
         getProductFailure, 
         deleteProductStart, 
         deleteProductSuccess, 
         deleteProductFailure,
         updateProductStart, 
         updateProductSuccess, 
         updateProductFailure,
         addProductStart, 
         addProductSuccess, 
         addProductFailure,
       } from "./productRedux";

// Login method
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

// Get method
export const getProducts = async (dispatch) => {
  dispatch(getProductStart());
  try {
    const res = await publicRequest.get("/products");
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};

// Delete method
export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart());
  try {
    // update
    dispatch(deleteProductSuccess(id));
  } catch (err) {
    dispatch(deleteProductFailure());
  }
};

// Upadte method
export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    // const res = await userRequest.get(`/products/${id}`);
    dispatch(updateProductSuccess({id, product}));
  } catch (err) {
    dispatch(updateProductFailure());
  }
};

// Upadte method
export const addProduct = async (product, dispatch) => {
  dispatch(updateProductStart());
  try {
    const res = await userRequest.post(`/products`, product);
    dispatch(addProductSuccess(res.data));
  } catch (err) {
    dispatch(addProductFailure());
  }
};