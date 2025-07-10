import React, { useState } from "react";

const Upload = () => {
  const [file, setfile] = useState(null);

  const handleFileChange = (e) => {
    // console.log(e.target.files[0])

    let image = e.target.files[0];

    let reader = new FileReader();
    reader.readAsDataURL(image)
    reader.onload=() => {
      console.log(reader.result);
      setfile(reader.result)
    };
  };

  return (
    <div>
      <input type="file" name="" id="" onChange={(e) => handleFileChange(e)} />
    </div>
  );
};

export default Upload;
