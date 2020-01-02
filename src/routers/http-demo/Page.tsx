import React, { useState } from "react";
import { AbortContext } from "../../interfaces/abortContext";
import { HttpService } from "../../services/httpService";

const Page: React.FC = () => {
  const abortContext: AbortContext = {};
  const [stateData, setData] = useState<object>({});
  const [stateError, setError] = useState<object>({});

  const getData = async () => {
    try {
      const url = `/i18n/data.json`;
      const data = await HttpService.request({ url }, abortContext);
      setData(data);
    } catch (error) {
      setError(error);
    }
  };

  const abort = () => {
    if (typeof abortContext.abort === "function") {
      abortContext.abort();
      abortContext.abort = undefined;
    }
  };

  const clear = () => {
    setData({});
    setError({});
  };

  return (
    <div style={{ padding: 10 }}>
      <div>
        <button onClick={getData}>get data</button>
        <span> / </span>
        <button onClick={abort}>abort</button>
        <span> / </span>
        <button onClick={clear}>clear</button>
      </div>
      <br />
      <div>data: {JSON.stringify(stateData)}</div>
      <br />
      <div>error: {JSON.stringify(stateError)}</div>
    </div>
  );
};

export default Page;
