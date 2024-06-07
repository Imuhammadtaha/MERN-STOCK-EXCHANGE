import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { toast } from "react-toastify";
import axios from "axios";
import { useAuth } from "../context/auth";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const AddNote = () => {
  const [auth] = useAuth();
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState([]);
  const token = auth?.token;

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8080/api/v1/auth/get-notes",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setNotes(res.data.notes);
      } catch (error) {
        console.log(error);
        toast.error("Failed to fetch notes");
      }
    };

    if (auth?.user) {
      fetchNotes();
    }
  }, [auth, token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("note", note);
      const res = await axios.post(
        "http://localhost:8080/api/v1/auth/add-note",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res) {
        toast.success("Note added");
        setNote("");
        setNotes([...notes, res.data.note]); // Add the new note to the list of notes
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout>
      {auth?.user ? (
        <>
          <div className="container-fluid ps-5 pe-5 pt-0">
            <div className="container p-5">
              <form className="ps-5 pe-5" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="note" className="form-label">
                    Add Note
                  </label>
                  <input
                    type="text"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Your note here"
                    className="form-control cs-form text-white"
                    id="note"
                    required
                  />
                </div>
                <button type="submit" className="reg me-2">
                  Add Note
                </button>
              </form>
              <hr />
              <div className="container">
                <h1 className="rale">Your All Notes</h1>
                {notes.length > 0 ? (
                  <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                      <tr>
                        <th style={styles.th} className="mulish rale">
                          Notes
                        </th>
                      </tr>
                    </thead>
                    <tbody style={{ backgroundColor: "rgb(34, 48, 67)" }}>
                      {notes.map((note, index) => (
                        <tr key={index} style={styles.tr}>
                          <td style={styles.td} className="rale">
                            {note}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p>No notes found</p>
                )}
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div
            className="container-fluid"
            style={{
              height: "60vh",
              width: "60vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className="container"
              style={{
                height: "50vh",
                width: "50vw",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="row">
                <h2 className="text-center rale">
                  Create Your Notes For Later Investments
                </h2>
                <Link to={"/login"}>
                  {" "}
                  <h4
                    className="text-center rale"
                    style={{
                      color: "rgb(0, 181, 151)",
                    }}
                  >
                    Register Now or Login
                    <FaArrowRightLong
                      size={30}
                      color="rgb(0, 181, 151)"
                      className="ms-1"
                    />
                  </h4>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </Layout>
  );
};

const styles = {
  th: {
    padding: "8px",
    backgroundColor: "rgb(34, 48, 67)",
    color: "#fff",
  },
  td: {
    padding: "8px",
    color: "white",
  },
  tr: {
    textAlign: "left",
  },
};

export default AddNote;
