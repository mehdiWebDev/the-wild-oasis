import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import styled from "styled-components";

const Main = styled.main`
background: var(--color-grey-100);
padding: 4rem 4.8rem 6.4rem;
`;

const AppLayoutWrapper = styled.div`
    display: grid;
    height: 100vh;
    grid-template-columns: 26rem 1fr;
    grid-template-rows: auto 1fr;
`

const AppLayout = () => {
    return (
        <AppLayoutWrapper>
            <Header />
            <Sidebar />
            <Main>
                <Outlet />
            </Main>
        </AppLayoutWrapper>
    );
}

export default AppLayout;