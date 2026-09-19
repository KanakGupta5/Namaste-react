import { useGetPokemonByNameQuery } from "../util/pokemonApi";

const Pokemon = () => {
    const { data, error, isLoading } = useGetPokemonByNameQuery('pikachu');
    console.log(data);
    return (
        <>
        {error ? <>Error occured</> : isLoading ? <>Loading ...</> : data ? (
            <>
            <h3>{data.species.name}</h3>
            <img src={data.sprites.front_shiny}></img>
            </>
        ) : null}
        </>
    )
}

export default Pokemon;