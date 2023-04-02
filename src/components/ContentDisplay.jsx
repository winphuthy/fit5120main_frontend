
export const ContentDisplay = (content) => {

    const display =  content.map(value=>(
        <p>{value.p}</p>
    ))

    return (
        <>{display}</>
    )
}