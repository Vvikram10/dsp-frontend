import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/api/v1/contact`,
    credentials: "include",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  tagTypes: ["Contact"],

  endpoints: (builder) => ({
    // ✅ PUBLIC: Submit contact form
    submitContact: builder.mutation({
      query: (formData) => ({
        url: "/",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["Contact"],
    }),

    // ✅ ADMIN: Get all contacts
    getAllContacts: builder.query({
      query: ({ page = 1, limit = 20 } = {}) => {
        const params = new URLSearchParams();
        params.append("page", page);
        params.append("limit", limit);

        return `/?${params.toString()}`;
      },
      providesTags: (result) =>
        result
          ? [
              ...result.data.map(({ _id }) => ({
                type: "Contact",
                id: _id,
              })),
              { type: "Contact", id: "LIST" },
            ]
          : [{ type: "Contact", id: "LIST" }],
    }),

    // ✅ ADMIN: Get single contact
    getContactById: builder.query({
      query: (id) => `/${id}`,
      providesTags: (result, error, id) => [
        { type: "Contact", id },
      ],
    }),

    // ✅ ADMIN: Update contact
    updateContact: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "Contact", id },
        { type: "Contact", id: "LIST" },
      ],
    }),

    // ✅ ADMIN: Delete contact
    deleteContact: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "Contact", id: "LIST" }],
    }),
  }),
});

export const {
  useSubmitContactMutation,
  useGetAllContactsQuery,
  useGetContactByIdQuery,
  useUpdateContactMutation,
  useDeleteContactMutation,
} = contactApi;