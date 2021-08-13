import { useStore } from "./store";

export default function Body() {
    const bears = useStore(store => store.bears);
    const increase = useStore(store => store.increasePopulation);
    const area = useStore(store => store.area);
    const areaActions = useStore(store => store.areaActions);

    return (
        <>
            <div>
                hello {bears} <button onClick={increase}>click!</button>
            </div>
            <div>
                area {area.type} {area.pop} <button onClick={areaActions.inc}>+++</button> <button onClick={areaActions.double}>+++</button>
            </div>
        </>
    );
}
