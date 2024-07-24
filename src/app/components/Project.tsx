export default function Project(props:any) {
    return (
        <div className="py-2.5 grid grid-cols-3">
            <div></div>
            <div className="grid-cols-subgrid col-span-2 flex-col">
                <div>{props.item.projectName}</div>
                <div className="">{props.item.fromDate + " - " + props.item.toDate}</div>
                <div>{props.item.workSummary}</div>
            </div>
        </div>
    )
}