interface Props {
    currentIndexScene: number;
    onChangeScene: (scene: number) => any;
}

const SceneNav = (props: Props) => {
    return (
        <div className="flex flex-col absolute right-0 h-full items-center justify-center mr-3">
            <div className={`h-9 w-4 my-1 rounded-lg ${props.currentIndexScene == 0 ? "bg-slate-400" : "bg-slate-200"}`} onClick={e => props.onChangeScene(0)}></div>
            <div className={`h-9 w-4 my-1 rounded-lg ${props.currentIndexScene == 1 ? "bg-slate-400" : "bg-slate-200"}`} onClick={e => props.onChangeScene(1)}></div>
            <div className={`h-9 w-4 my-1 rounded-lg ${props.currentIndexScene == 2 ? "bg-slate-400" : "bg-slate-200"}`} onClick={e => props.onChangeScene(2)}></div>
        </div>
    );
}

export default SceneNav;