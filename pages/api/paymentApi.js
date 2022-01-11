import axiosHelper from "../../services/axiosHelper"

export const getAllCards=async (req, res)=> {
  try {
     const response = await axiosHelper.getRequest('http://127.0.0.1:8000/payment/my_cards')
    return response.data
  } catch (err) {
    console.log(err)
  }
}
 
export const postSecret=async (req, res)=> {
  try {
     const response = await axiosHelper.postRequest('http://127.0.0.1:8000/payment/secret',{
        "card_id": "pm_1KGrEJAnCtxHwdDokTzWAZFV"
    })
    console.log("response",response)
    return response.client_secret
  } catch (err) {
    console.log(err)
  }
}
 