export default function Education(props:any) {
    return (
        <a className="transition ease-in-out duration-300 hover:drop-shadow-xl hover:bg-gray-400 hover:rounded-md hover:bg-clip-padding hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-10 pr-8 pl-3 py-2.5 grid grid-cols-3 group hover:text-hightlight"  href={props.item.website} target="_blank" rel="noopener noreferrer">
            <p className="font-semibold text-xs pt-1 pl-4 transition-all motion-reduce:transition-none group-hover:text-text">{props.item.date}</p>
            <div className="grid-cols-subgrid col-span-2 flex flex-col">
                <div className="max-w-xs leading-normal font-medium flex flex-col">
                    <span className="transition-all motion-reduce:transition-none">{props.item.degree}</span>
                    <div className="flex flex-row items-center">
                        <span className="mr-1 transition-all motion-reduce:transition-none">{props.item.university}</span>
                        <svg className="inline size-4 group-hover:translate-x-2 transition-all motion-reduce:transition-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
                            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                        </svg>
                    </div>
                </div>
                {false && <div className="max-w-xs leading-normal transition-all motion-reduce:transition-none">{props.item.location}</div>}
                <div>
                    {props.item.GPA && <span className="mr-1 font-normal transition-all motion-reduce:transition-none group-hover:text-text">GPA{" "+ props.item.GPA + "/4.0 " + (props.item.extraDetail && (" · " +props.item.extraDetail))}</span>}
                </div>
            </div>
        </a>
    )
}