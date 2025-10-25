import { useState } from "react";

function FeedBackForm() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        feedback: "",
    })

    const maxChars = 200;

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(`updating ${name}:`, value);
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,


        }));
    };

    const isValid = () => {
        return formData.name && formData.email && formData.feedback;
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if(!isValid()) {
            // Errors
        }
        else {
            // Display the data from the input fields
            console.log("test");
        }
        
    }


    return (
        <>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
            <h1>Feedback Form</h1>
            <form>
                <label>
                    Name:<input type="text" name="name" value={formData.name} onChange={handleChange}/>
                </label>
                <br />
                <label>
                    Email:<input type="email" name="email" value={formData.email} onChange={handleChange}/>
                </label>
                <br />
                <label>
                    FeedBack:<input type="text" name="feedback" value={formData.feedback} onChange={handleChange} rows="4" cols="50" placeholder="Enter your feedback here..." maxLength={maxChars}/>
                </label>
                <div className="text-sm text-gray-500 text-right">
                {formData.feedback.length}/{maxChars} characters
            </div>
            <button id="submit" type="submit" value="Submit">Submit</button>
            </form>
            <br />
            </div>
        </>
    );
}

export default FeedBackForm;