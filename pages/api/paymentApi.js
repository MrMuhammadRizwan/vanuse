import axiosHelper from "../../services/axiosHelper";

export const getAllCards = async (req, res) => {
  try {
    const response = await axiosHelper.getRequest(
      "http://127.0.0.1:8000/payment/my_cards"
    );
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const postSecret = async (id) => {
  try {
    const response = await axiosHelper.postRequest(
      "http://127.0.0.1:8000/payment/secret",
      {
        // card_id: "pm_1KGrEJAnCtxHwdDokTzWAZFV",
        card_id: id,
      }
    );
    console.log("response", response);
    return response.client_secret;
  } catch (err) {
    console.log(err);
  }
};
export const addCard = async (form) => {
  try {
    const response = await axiosHelper.postRequest(
      "http://127.0.0.1:8000/payment/add_card",
      form
      // {
      //   number: "4242424242424242",
      //   exp_month: 12,
      //   exp_year: 2025,
      //   cvc: "111",
      // }
    );
    console.log("response", response);
    return response;
  } catch (err) {
    console.log(err);
  }
};
export const removeCard = async (id) => {
  try {
    const response = await axiosHelper.postRequest(
      "http://127.0.0.1:8000/payment/remove_card",
      {
        card_id: id,
      }
    );
    console.log("response", response);
    return response;
  } catch (err) {
    console.log("err", err);

    console.log(err);
  }
};
