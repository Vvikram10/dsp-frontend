import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:8000";

export const commercialContactApi = createApi({
  reducerPath: "commercialContactApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/api/v1/contact/commercial`,
    credentials: "include",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  tagTypes: ["CommercialContact"],
  endpoints: (builder) => ({
    // PUBLIC: Submit commercial contact form
    submitCommercialContact: builder.mutation({
      query: (formData) => ({
        url: "/",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["CommercialContact"],
    }),

    // ADMIN: Get all commercial contacts
    getAllCommercialContacts: builder.query({
      query: ({
        page = 1,
        limit = 20,
        status,
        service,
        propertyType,
      } = {}) => {
        const params = new URLSearchParams();
        params.append("page", page);
        params.append("limit", limit);
        if (status) params.append("status", status);
        if (service) params.append("service", service);
        if (propertyType) params.append("propertyType", propertyType);
        return `/?${params.toString()}`;
      },
      providesTags: (result) =>
        result
          ? [
              ...result.data.map(({ _id }) => ({
                type: "CommercialContact",
                id: _id,
              })),
              { type: "CommercialContact", id: "LIST" },
            ]
          : [{ type: "CommercialContact", id: "LIST" }],
    }),

    // ADMIN: Get single commercial contact
    getCommercialContactById: builder.query({
      query: (id) => `/${id}`,
      providesTags: (result, error, id) => [
        { type: "CommercialContact", id },
      ],
    }),

    // ADMIN: Update commercial contact status
    updateCommercialContact: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "CommercialContact", id },
        { type: "CommercialContact", id: "LIST" },
      ],
    }),

    // ADMIN: Delete commercial contact
    deleteCommercialContact: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [{ type: "CommercialContact", id: "LIST" }],
    }),

    // ADMIN: Get commercial stats
    getCommercialContactStats: builder.query({
      query: () => "/stats",
      providesTags: [{ type: "CommercialContact", id: "STATS" }],
    }),
  }),
});

export const {
  useSubmitCommercialContactMutation,
  useGetAllCommercialContactsQuery,
  useGetCommercialContactByIdQuery,
  useUpdateCommercialContactMutation,
  useDeleteCommercialContactMutation,
  useGetCommercialContactStatsQuery,
} = commercialContactApi;