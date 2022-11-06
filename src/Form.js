import { useState } from "react";

export default function PersonForm() {
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    city: ""
  });

  const onInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div className="container">
      <div>
        <label>
          Name:
          <input name="name" value={formData.name} onChange={onInputChange} />
        </label>
      </div>

      <br />
      <div>
        <label>
          Title:
          <input name="title" value={formData.title} onChange={onInputChange} />
        </label>
      </div>
      <br />

      <div>
        <label>
          City:
          <input name="city" value={formData.city} onChange={onInputChange} />
        </label>
      </div>
    </div>
  );
}
