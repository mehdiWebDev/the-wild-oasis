import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import GlobalStyles from "./styles/GlobaleStyles.js";
import Dashborad from "./pages/Dashboard.jsx";
import Bookings from "./pages/Bookings.jsx";
import Cabins from "./pages/Cabins.jsx";
import Users from "./pages/Users.jsx";
import Settings from "./pages/Settings.jsx";
import Account from "./pages/Account.jsx";
import Login from "./pages/Login.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import AppLayout from "./ui/AppLayout.jsx";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { ReactQueryDevtools } from '@tanstack/react-query-devtools'




const queryClient = new QueryClient({
    defaultOptions: {
        staleTime: 1000 * 60 * 5, // 5 minutes
        gcTime: 1000 * 60 * 60, // 1 hour
    }
});

function App() {
    return (
        <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />

        <GlobalStyles/>
        <BrowserRouter>
            <Routes>
                <Route element={<AppLayout/>}>
                    <Route index element={<Navigate replace to="dashboard"/>} />
                    <Route path="dashboard" element={<Dashborad/>} />
                    <Route path="bookings" element={<Bookings/>} />
                    <Route path="cabins" element={<Cabins/>} />
                    <Route path="users" element={<Users/>} />
                    <Route path="settings" element={<Settings/>} />
                    <Route path="account" element={<Account/>} />
                </Route>
                <Route path="login" element={<Login/>} />
                <Route path="*" element={<PageNotFound/>} />
            </Routes>
        </BrowserRouter>
        </QueryClientProvider>
    );
}
export default App;