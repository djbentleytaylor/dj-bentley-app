import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import FormModal from "./FormModal";

const BookingForm = (props) => {
    const initInputs = {
        how: "",
        user_name: "",
        user_email: "",
        event_location: "",
        city: "",
        state: "",
        event_type: "",
        requested_date: "",
        details: "",
    };

    const [inputs, setInputs] = useState(initInputs);

    const [requiredFieldError, setRequiredFieldError] = useState("");
    const isDisabled = !(inputs.user_name && inputs.user_email);
    const hasError = !(inputs.user_name && inputs.user_email);
    const [showModal, setShowModal] = useState(false);
    const [formSubmitError, setFormSubmitError] = useState(false)

    useEffect(() => {
        console.log("showModal updated:", showModal);
    }, [showModal]);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setInputs((prevInputs) => ({ ...prevInputs, [name]: value }));
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;

        if (name === "user_name" && value === "") {
            setRequiredFieldError("Name is a required field.");
        } else if (name === "user_email" && value === "") {
            setRequiredFieldError("Email address is a required field.");
        } else {
            setRequiredFieldError("");
        }
    };

    const handleOpenModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    function sendEmail(e) {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_dpcvvfo",
                "template_cnpcy9m",
                e.target,
                "0FMSFkE2DIZ5zpkCX"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    handleOpenModal();
                },
                (error) => {
                    console.log(error.text);
                    setFormSubmitError(true)
                }
            );

        // handleOpenModal();
        console.log(showModal);

        console.log("submitted form!");
        setInputs({
            how: "",
            user_name: "",
            user_email: "",
            event_location: "",
            city: "",
            state: "",
            event_type: "",
            requested_date: "",
            details: "",
        });
    }

    console.log(hasError);

    return (
        <div className="eventPage">
            <form className="bookContent" onSubmit={sendEmail}>
                <select
                    className="input"
                    name="how"
                    onChange={handleChange}
                    onBlur={handleBlur}
                >
                    <option value="">
                        -- How did you hear about DJ Bentley? --
                    </option>
                    <option value="google">Google</option>
                    <option value="social_media">Social media</option>
                    <option value="friend">
                        Recommended by friend or colleague
                    </option>
                    <option value="attended_prior_event">
                        Attended prior event
                    </option>
                    <option value="blog">Blog or other publication</option>
                    <option value="other">Other</option>
                </select>

                <input
                    className="input"
                    type="text"
                    name="user_name"
                    placeholder="Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                />

                <input
                    className="input"
                    type="text"
                    name="user_email"
                    placeholder="Email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                />

                <input
                    className="input"
                    type="text"
                    name="event_location"
                    placeholder="Event Location"
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <input
                    className="input"
                    type="text"
                    name="city"
                    placeholder="City"
                    onChange={handleChange}
                    onBlur={handleBlur}
                />
                <select
                    className="input"
                    name="state"
                    onChange={handleChange}
                    onBlur={handleBlur}
                >
                    <option value="">-- State --</option>
                    <option value="AL">AL</option>
                    <option value="AK">AK</option>
                    <option value="AZ">AZ</option>
                    <option value="AR">AR</option>
                    <option value="CA">CA</option>
                    <option value="CO">CO</option>
                    <option value="CT">CT</option>
                    <option value="DE">DE</option>
                    <option value="FL">FL</option>
                    <option value="GA">GA</option>
                    <option value="HI">HI</option>
                    <option value="ID">ID</option>
                    <option value="IL">IL</option>
                    <option value="IN">IN</option>
                    <option value="IA">IA</option>
                    <option value="KS">KS</option>
                    <option value="KY">KY</option>
                    <option value="LA">LA</option>
                    <option value="ME">ME</option>
                    <option value="MD">MD</option>
                    <option value="MA">MA</option>
                    <option value="MI">MI</option>
                    <option value="MN">MN</option>
                    <option value="MS">MS</option>
                    <option value="MO">MO</option>
                    <option value="MT">MT</option>
                    <option value="NE">NE</option>
                    <option value="NV">NV</option>
                    <option value="NH">NH</option>
                    <option value="NJ">NJ</option>
                    <option value="NM">NM</option>
                    <option value="NY">NY</option>
                    <option value="NC">NC</option>
                    <option value="ND">ND</option>
                    <option value="OH">OH</option>
                    <option value="OK">OK</option>
                    <option value="OR">OR</option>
                    <option value="PA">PA</option>
                    <option value="RI">RI</option>
                    <option value="SC">SC</option>
                    <option value="SD">SD</option>
                    <option value="TN">TN</option>
                    <option value="TX">TX</option>
                    <option value="UT">UT</option>
                    <option value="VT">VT</option>
                    <option value="VA">VA</option>
                    <option value="WA">WA</option>
                    <option value="WV">WV</option>
                    <option value="WI">WI</option>
                    <option value="WY">WY</option>
                </select>
                <select
                    className="input"
                    name="event_type"
                    onChange={handleChange}
                    onBlur={handleBlur}
                >
                    <option value="">--Event Type--</option>
                    <option value="corporate">Corporate event</option>
                    <option value="party">Private party</option>
                    <option value="wedding">Wedding</option>
                    <option value="club">Club event</option>
                    <option value="nonprofit">Non-profit event</option>
                </select>

                <input
                    className="input"
                    type="date"
                    placeholder="date"
                    name="requested_date"
                    onChange={handleChange}
                    onBlur={handleBlur}
                />

                <textarea
                    className="textarea"
                    name="details"
                    placeholder="Additional Details"
                    onChange={handleChange}
                    onBlur={handleBlur}
                />

                {hasError && (
                    <div>
                        <h3 style={{ color: "red", textAlign: "center" }}>
                            {requiredFieldError}
                        </h3>
                    </div>
                )}
                
               {formSubmitError && (
    <div style={{ padding: "2rem" }}>
        <h3 style={{ color: "red", textAlign: "center" }}>
            An error has occurred submitting your request. Please email djbentleytaylor@gmail.com with your request information.
        </h3>
    </div>
)}
                <button type="submit" className="btn" disabled={isDisabled}>
                    Submit
                </button>
            </form>
            <FormModal
                show={showModal}
                handleClose={handleCloseModal}
                setShowModal={setShowModal}
            ></FormModal>
        </div>
    );
};

export default BookingForm;
