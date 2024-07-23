export default function Education(props) {
    return (
        <div className="py-2.5 grid grid-cols-3">
            <div className="">{props.item.fromDate + " - " + props.item.toDate}</div>
            <div className="grid-cols-subgrid col-span-2 flex-col">
                <div>{props.item.degree}</div>
                <div className="">{props.item.university}</div>
                <div className="">{props.item.location}</div>
                <div>{props.item.GPA}</div>
                <div>{props.item.extraDetail}</div>
            </div>
        </div>
    )
}