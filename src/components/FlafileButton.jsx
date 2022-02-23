import React from "react";
import { FlatfileButton } from "@flatfile/react";
import ENV from "../env";

const LICENSE_KEY = ENV.FLATFILE_LICENSE_KEY;

const FlafileButton = () => {
  const onDataCapture = async (data) => {
    // save data to a backend service
  };

  return (
    <div className="btn-container">
      <FlatfileButton
        licenseKey={LICENSE_KEY}
        customer={{
          companyId: "ubuntu",
          companyName: "Ubuntu Corp",
          email: "info@ubuntu.corp",
          name: "John Doe",
          userId: "john_doe",
        }}
        settings={{
          type: "Players",
          managed: true,
          fields: [
            {
              label: "First name",
              key: "first_name",
              validators: [{ validate: "required" }],
            },
            {
              label: "Surname",
              key: "surname",
              validators: [{ validate: "required" }],
            },
            { label: "Weight(kg)", key: "weight_kg" },
            {
              label: "Email",
              key: "email",
              validators: [{ validate: "required" }, { validate: "unique" }],
            },
          ],
        }}
        onData={onDataCapture}
        style={{
          padding: "10px 15px",
          borderRadius: "5px",
          border:"none",
          backgroundColor:"#3b2fc9",
          color:"white",
          fontWeight:"600"
        }}
      >
        Import Players
      </FlatfileButton>
    </div>
  );
};

export default FlafileButton;
