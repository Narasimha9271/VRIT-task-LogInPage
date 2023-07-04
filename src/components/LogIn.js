import { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Alert from "@mui/material/Alert";

export default function LogIn() {
    const [inputs, setinputs] = useState({});
    const [alert, setalert] = useState(false);

    const handlechange = (event) => {
        setinputs({ ...inputs, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    };

    const handlesignup = () => {
        setalert(!alert);
        setTimeout(() => {
            setalert(false);
        }, 3000);
        console.log("Logged in successfully");
    };

    return (
        <>
            {alert && (
                <Alert severity="success">
                    Congrats! You have successfully logged in.
                </Alert>
            )}
            <form
                onSubmit={handleSubmit}
                className="grid w-full max-w-xs mx-auto space-y-2 mt-10"
            >
                <h1 className="text-black font-bold text-3xl text-center">
                    Welcome
                </h1>

                <TextField
                    id="outlined-basic"
                    label="User Name"
                    name="username"
                    variant="outlined"
                    onChange={handlechange}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                {inputs.username === undefined ||
                                inputs.username === "" ? (
                                    <div
                                        style={{
                                            width: "15px",
                                            height: "15px",
                                            backgroundColor: "darkred",
                                            borderRadius: "50%",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        <span
                                            style={{
                                                color: "white",
                                                fontSize: "12px",
                                                lineHeight: 1,
                                            }}
                                        >
                                            !
                                        </span>
                                    </div>
                                ) : null}
                            </InputAdornment>
                        ),
                    }}
                />

                <TextField
                    id="outlined-basic"
                    label="Password"
                    name="password"
                    type="password"
                    variant="outlined"
                    onChange={handlechange}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                {inputs.password === undefined ||
                                inputs.password === "" ? (
                                    <div
                                        style={{
                                            width: "15px",
                                            height: "15px",
                                            backgroundColor: "darkred",
                                            borderRadius: "50%",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        <span
                                            style={{
                                                color: "white",
                                                fontSize: "12px",
                                                lineHeight: 1,
                                            }}
                                        >
                                            !
                                        </span>
                                    </div>
                                ) : null}
                            </InputAdornment>
                        ),
                    }}
                />

                <p className="text-center">
                    <a href="#forgot-password" className="text-black-700 mr-1">
                        Forgot Password
                    </a>
                </p>

                <button
                    type="submit"
                    className="w-[50%] ml-20 mt-20 px-4 py-2 text-black border  border-black "
                    onClick={handlesignup}
                >
                    Log In
                </button>

                <p className="text-center">
                    Don't Have an Account?{" "}
                    <a
                        href="https://www.google.com/"
                        className="text-black-700"
                    >
                        Sign Up
                    </a>
                </p>
            </form>
        </>
    );
}
