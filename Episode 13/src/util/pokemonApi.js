import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const pokemonApi = createApi({
    reducerPath: 'pokemonApi',
    endpoints: (builder) => ({
        getPokemonByName: builder.query({
            query: (name) => `pokemon/${name}`
        })
    }),
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://pokeapi.co/api/v2/'
    })
})

export const {useGetPokemonByNameQuery} = pokemonApi;