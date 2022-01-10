// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Axios from "axios";

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }


function getMyItems(req, res) {
  try {
    const response = Axios.get(`http://127.0.0.1:8000/item/category-wise/`)
    return response.data
  } catch (err) {
    console.log(err)
  }
}

const getAllNavMenus = (req, res) => {
  try {
    const response = Axios.get(`http://127.0.0.1:8000/item/category-wise/`)
    return response
  } catch (err) {
    console.log(err)
  }
}

export {
  getMyItems,
  getAllNavMenus
}
