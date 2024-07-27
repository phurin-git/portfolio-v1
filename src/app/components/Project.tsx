export default function Project(props:any) {
    return (
        <a className="transition ease-in-out duration-300 hover:drop-shadow-xl hover:bg-gray-400 hover:rounded-md hover:bg-clip-padding hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-10 pr-8 pl-3 py-5 grid grid-cols-3 group hover:text-highlight" href={props.item.link} target="_blank" rel="noopener noreferrer">
            <div className="brightness-75 group-hover:brightness-100 m-4 mt-1">
                <img className="size-auto rounded outline-4 outline-none group-hover:outline group-hover:outline-current outline-offset-0" src={props.item.previewImage} alt="" />
            </div>
            <div className="leading-normal font-medium grid-cols-subgrid col-span-2 flex flex-col">
                <div className="flex flex-row content-center items-center">
                <span className="mr-1 transition-all motion-reduce:transition-none">{props.item.projectName}</span>
                    <svg className="size-4 group-hover:translate-x-2 transition-all motion-reduce:transition-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor">
                        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                    </svg>
                </div>
                <div className="font-normal transition-all motion-reduce:transition-none">{props.item.workSummary}</div>
            </div>
        </a>
    )
}