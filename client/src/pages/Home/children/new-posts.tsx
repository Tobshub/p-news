import React, { useState } from "react";
import { Form } from "react-router-dom";

export default function NewPosts() {
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!file) {
      return;
    }

    // send the buffer to the server
    const data = await file.arrayBuffer();
  };
  // TODO: style this form better
  // TODO: add other fields for article entries
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <fieldset className="input-group">
          <input
            className="form-control"
            type="file"
            onChange={e =>
              setFile(e.target.files ? e.target.files[0] : null)
            }
          />
          <button>Submit</button>
        </fieldset>
        <fieldset className="input-group"></fieldset>
      </Form>
    </div>
  );
}
