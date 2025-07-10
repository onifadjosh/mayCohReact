import axios from "axios";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";

const Transfer = () => {
  let formik = useFormik({
    initialValues: {
      accountNumber: "",
    },
  });
  const [accountName, setaccountName] = useState("");
  const [resolving, setresolving] = useState(false);
  const [error, seterror] = useState("");

  let token = localStorage.getItem("token");

  useEffect(() => {
    if (formik.values.accountNumber.length === 11) {
      const resolveAccount = async () => {
        setresolving(true);
        console.log("start");

        let accountNumber = formik.values.accountNumber;

        let response = await axios.post(
          "http://localhost:5000/user/resolveAccount",
          { accountNumber },

          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        console.log(response.data);
        if (response.data.status == true) {
            seterror(null);
          setaccountName(
            response.data.firstName + " " + response.data.lastName
          );
          setresolving(false);
        } else {
          seterror(response.data.message);
          console.log(error)
           setresolving(false);
        }
      };
      resolveAccount();
    }
  }, [formik.values.accountNumber]);

  return (
    <div>
      <input type="text" onChange={formik.handleChange} name="accountNumber" /> <br />
      <div className={`${error? "text-danger":"text-success"}`}>
        {resolving ? "resolving account ..." : `${error? error: accountName}`}
      </div>
    </div>
  );
};

export default Transfer;
