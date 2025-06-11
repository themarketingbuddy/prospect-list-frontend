import React, { useState } from 'react';
import axios from 'axios';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setData(null);
  };

  const handleUpload = async () => {
    if (!file) return;

    setLoading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post(
        process.env.NEXT_PUBLIC_API_URL,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      setData(response.data);
    } catch (err) {
      console.error("Upload error:", err);
      setData({ error: "Failed to extract contact details." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Upload Business Card</h2>

      <input type="file" onChange={handleFileChange} accept="image/*" />

      <button onClick={handleUpload} style={styles.button} disabled={loading}>
        {loading ? "Processing..." : "Extract Details"}
      </button>

      {data && (
        <div style={styles.output}>
          <h3>Extracted Contact Details:</h3>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: "1.5rem",
    maxWidth: "500px",
    margin: "auto",
    textAlign: "center",
    fontFamily: "sans-serif"
  },
  button: {
    marginTop: "1rem",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer"
  },
  output: {
    marginTop: "2rem",
    textAlign: "left",
    backgroundColor: "#f9f9f9",
    padding: "1rem",
    borderRadius: "6px"
  }
};

export default UploadForm;
