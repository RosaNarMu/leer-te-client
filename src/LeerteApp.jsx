import AppRouter from "./routers/AppRouter";
import { UseContext } from "./UseContext";


export default function LeerteApp() {
    return (
        <div>
            <UseContext.Provider>
                <AppRouter></AppRouter>
            </UseContext.Provider>
        </div>
    )
}
