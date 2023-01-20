import CardJogos from "../CardJogos"

const Jogos = ({jogosPosts}) => {
    return (
        <section className="container">
            <h2>Jogos</h2>
            <div className="jogos">
                {jogosPosts.map((post, index) => {
                    return (
                        <>
                            <CardJogos post={post} key={index} />
                        </>
                    )
                })}
            </div>
        </section>
    )
}

export default Jogos
