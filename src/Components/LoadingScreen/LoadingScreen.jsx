import React, { useState } from "react";
import { InfinitySpin } from "react-loader-spinner";

export default function LoadingScreen() {
  return (
    <>
      <InfinitySpin
        visible={true}
        width="200"
        color="#4fa94d"
        ariaLabel="infinity-spin-loading"
      />
    </>
  );
}
