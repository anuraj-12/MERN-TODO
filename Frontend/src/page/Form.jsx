import { useEffect, useState } from "react";
import api from "../api/Axios";
import { toast } from "react-toastify";


const Form = () => {
  const [editData, setEditData] = useState(null);
  
  const [data, setData] = useState({
    title: "",
    description: "",
  });

  const [getData, setGetData] = useState([]);

  const getFetchData = async () => {
    try {
      const response = await api.get("/get");

      const data = await response.data;
      console.log(data);
      setGetData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFetchData();
  }, []);

  const handlechange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/add", data);
      toast.success(response.data.message);
      getFetchData();

      setData({
        title: "",
        description: "",
      });
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  const handleClick = async (id) => {
    try {
      const response = await api.delete(`/delete/${id}`);
      const data = await response.data;
      toast.success(data.message);
      getFetchData();
    } catch (error) {
      toast.error(error.response?.data?.message || "Delete failed");
    }
  };

  // edit

  const handleEdit = (id) => {
    const product = getData.find((item) => item._id === id);
    console.log(product);
    setEditData(product);
  };


  const handleUpdate = async() =>{
    try
    {

      const response = await api.patch(`/update/${editData._id}`, {
        title:editData.title,
        description:editData.description
      });
      const data = await response.data;
      toast.success(data.message);
      setEditData(null)
      getFetchData();

    }
    catch(error){
      console.log(error)
    }}

  return (
    <div>
      <form
        method="post"
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 w-70 rounded-lg px-5 py-5 mx-auto mt-10 text-white bg-gray-900 shadow"
      >
        <div>
          <input
            type="text"
            name="title"
            placeholder="Enter Your title"
            value={data.title}
            onChange={handlechange}
            required
            className="border-2  border-white px-1 rounded-sm focus:outline-amber-500 w-60"
          />
        </div>
        <div>
          <textarea
            name="description"
            id="des"
            placeholder="Enter Description"
            rows="3"
            value={data.description}
            onChange={handlechange}
            cols="29"
            required
            className="border-2  border-white rounded-sm focus:outline-amber-500 px-1"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-sky-600 rounded-lg py-1 cursor-pointer"
        >
          Submit
        </button>
      </form>

      <div className="grid  grid-cols-1 lg:grid-cols-3  md:grid-cols-3  gap-5 px-5 md:px-5 lg:px-50 py-20">
        {getData?.map((data) => {
          return (
            <div
              key={data._id}
              className="  border-l-5 border-amber-400 px-2 py-5 flex flex-col gap-2 rounded-lg shadow bg-gray-800 text-white  "
            >
              <h4 className="font-semibold text-lg">{data.title}</h4>
              <p>{data.description}</p>
              <div className="flex gap-2 ">
                <button
                  className="bg-sky-600  cursor-pointer px-5 py-1 rounded-sm"
                  onClick={() => handleEdit(data._id)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500  cursor-pointer px-5 py-1 rounded-sm"
                  onClick={() => handleClick(data._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {editData && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="relative bg-gray-800 text-white w-96 p-6 rounded-lg shadow-lg">
            <button
              onClick={() => setEditData(null)}
              className="absolute right-4 top-3 text-xl font-bold cursor-pointer"
            >
              ✕
            </button>

             <h2 className="text-xl font-bold mb-5">
              Edit Product
            </h2>
                        <input
              type="text"
              value={editData.title}
              onChange={(e) =>
                setEditData({
                  ...editData,
                  title: e.target.value,
                })
              }
              className="border border-gray-400 p-2 w-full mb-3 rounded"
            />


            <textarea
              value={editData.description}
              onChange={(e) =>
                setEditData({
                  ...editData,
                  description: e.target.value,
                })
              }
              rows="4"
              className="border border-gray-400 p-2 w-full rounded"
            />

              <button
              onClick={handleUpdate}
              className="bg-sky-600 text-white px-5 py-2 mt-4 rounded cursor-pointer"
            >
              Update
            </button>

          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
