export default function Experience(props) {
    return (
        <div className="py-2.5 grid grid-cols-3">
            <div className="">{props.item.fromDate + " - " + props.item.toDate}</div>
            <div className="grid-cols-subgrid col-span-2 flex-col">
                <div>{props.item.degree}</div>
                <div className="">{props.item.title + " · " + props.item.companyName}</div>
                <div>{props.item.sumResponsibility}</div>
            </div>
        </div>
    )
}