import { createContext, useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [user, setUser] = useState(null);
  const [showLogin, setshowLogin] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [credit, setCredit] = useState(null);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const navigate=useNavigate()


  const LoadCreditsData = async () => {
    try {

      console.log("Token:", token);
      console.log("Backend URL:", backendUrl);
      
      const { data } = await axios.get(
        backendUrl + "/api/user/credits",
        { headers: {'token': token } }
      );
      console.log("Loaded credit data:", data);
      if (data.success) {
        setCredit(data.credits);
        console.log("Set credit to:", data.credits)
        setUser(data.user);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };


  const generateImage=async(prompt)=>{
    try {
      const {data}=await axios.post(backendUrl+'/api/image/generate-image',{prompt},{headers:{token}})

      if(data.success){
        LoadCreditsData()
        return data.resultImage
      }
      else{
        toast.error(data.message)
        LoadCreditsData()
        if(data.creditBalance===0){
          navigate('/buy')
        }
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    setUser(null);
  };

  useEffect(() => {
    if (token) {
      LoadCreditsData();
    }
  }, [token]);

  const value = {
    user,
    setUser,
    showLogin,
    setshowLogin,
    backendUrl,
    token,
    setToken,
    credit,
    setCredit,
    LoadCreditsData,
    logout,
    generateImage
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
