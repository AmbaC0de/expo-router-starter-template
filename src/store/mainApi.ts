import { createApi } from "@reduxjs/toolkit/query/react";
import { API_BASE_URL } from "@/config/env";
import { axiosBaseQuery } from "@/store/config/baseQuery";

const mainApi = createApi({
  baseQuery: axiosBaseQuery({ baseUrl: `${API_BASE_URL}/api/v1` }),
  endpoints: () => ({}),
  tagTypes: ["Lessons"],
  keepUnusedDataFor: 60 * 5, // 5 minutes
  catchSchemaFailure: (error, info) => ({
    status: "CUSTOM_ERROR",
    error: error.schemaName + " failed validation",
    data: error,
  }),
});

export default mainApi;
