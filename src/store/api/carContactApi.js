import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

export const carContactApi = createApi({
  reducerPath: "carContactApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/api/v1/contact/car`,
    credentials: "include",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  tagTypes: ["CarContact"],
  endpoints: (builder) => ({
    // PUBLIC: Submit car contact form
    submitCarContact: builder.mutation({
      query: (formData) => ({
        url: "/",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["CarContact"],
    }),

    // ADMIN: Get all car contacts
    getAllCarContacts: builder.query({
      query: ({ page = 1, limit = 20, status, service } = {}) => {
        const params = new URLSearchParams();
        params.append("page", page);
        params.append("limit", limit);
        if (status) params.append("status", status);
        if (service) params.append("service", service);
        return `/?${params.toString()}`;
      },
      providesTags: (result) =>
        result
          ? [
              ...result.data.map(({ _id }) => ({
                type: "CarContact",
                id: _id,
              })),
              { type: "CarContact", id: "LIST" },
            ]
          : [{ type: "CarContact", id: "LIST" }],
    }),

    // ADMIN: Get single car contact
    getCarContactById: builder.query({
      query: (id) => `/${id}`,
      providesTags: (result, error, id) => [{ type: "CarContact", id }],
    }),

    // ADMIN: Update car contact status
    updateCarContact: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "CarContact", id },
        { type: "CarContact", id: "LIST" },
      ],
    }),

    // ADMIN: Delete car contact
    deleteCarContact: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "CarContact", id: "LIST" }],
    }),
  }),
});

export const {
  useSubmitCarContactMutation,
  useGetAllCarContactsQuery,
  useGetCarContactByIdQuery,
  useUpdateCarContactMutation,
  useDeleteCarContactMutation,
} = carContactApi;