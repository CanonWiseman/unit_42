import React, {useState, useEffect} from "react";
import SnackOrBoozeApi from "../Api";


//useFetch will set the state inside of the component called by it
//the state will contain the data from the database
//the useEffect will update the state the first time that the function is called and everytime the changeRefresh function is used
//the loading aspect still needs work

const useFetch = (initialValue, category) =>{

    const [data, setData] = useState(initialValue);
    const [refresh, setRefresh] = useState(["Yes"]);
    const [isLoading, setIsLoading] = useState(true);

    function changeRefresh () {
      const newRefresh = ["Yes"];
      setRefresh(newRefresh);
    }

    useEffect(() => {
        async function getData() {
          try{
            let result = await SnackOrBoozeApi.getData(category);
            setData(result);
            setIsLoading(false);
          }
          catch(e){
            
          }
          
        }
        getData();
      }, [refresh]);

    return {data, isLoading, changeRefresh}
}

export default useFetch;