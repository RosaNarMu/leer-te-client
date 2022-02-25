import AppRouter from "./routers/AppRouter";
import { UseContextGeneralProvider } from "./UseContext";


export default function LeerteApp() {
    return (
        <div>
            <UseContextGeneralProvider>
                <AppRouter></AppRouter>
            </UseContextGeneralProvider>
        </div>
    )
}
