"use client";
import { useEffect, useState } from "react";

const HelloWorld = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchMessage = async () => {
      const url = `http://localhost:4000/hello`;
      const response = await fetch(url, {
        method: "GET",
      });
      const data = await response.text();
      setMessage(data);
    };

    fetchMessage();
  }, []);

  return (
    <>
      <div>{message}</div>
    </>
  );
};

export default HelloWorld;
