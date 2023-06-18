import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import "./AddItemForm.css";
import SnackOrBoozeApi from "./Api";


//Component for adding a new menu item
//After submit the form will call the API using the category to set the correct subDivision in the url
//the form also calls a refresh on the API information from the specific category and updates that catregories state
//Finally the form will redirect the user back to the Menu page based on the current category

const AddItemForm = ({category, refresh}) => {
    //Vars
    const INITIAL_VALUES = {
        name: "",
        description: "",
        recipe: "",
        serve: ""
    }
    const navigate = useNavigate();
    //end Vars

    //state
    const [formData, setFormData] = useState(INITIAL_VALUES)
    //end state

    //funcs
    const handleChange = evt => {
        const { name, value } = evt.target;
        setFormData(fData => ({
        ...fData,
        [name]: value
        }));
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
        const formDatatoAdd = {id: formData.name.replace(" ", "-").toLowerCase(), ...formData}
        const response = await SnackOrBoozeApi.postData(category, formDatatoAdd);
        refresh();
        navigate(`/${category}`)
    }
    //end funcs

    //html
    return (
        <>
            <h1>Add a new {category.substring(0, category.length-1)}</h1>
            <form onSubmit={handleSubmit}>
                {Object.keys(INITIAL_VALUES).map(key => (
                        <input
                            key={key}
                            id={key}
                            name={key}
                            type="text"
                            placeholder={`${key}`}
                            value={formData[key]}
                            onChange={handleChange}
                        />
                ))}
                <button>Submit</button>
            </form>
        </>
    )
}

export default AddItemForm;