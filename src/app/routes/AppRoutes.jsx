import {Routes, Route} from "react-router-dom";
import { AuthPage } from "../../features/auth/pages/AuthPage";
import { DashboardPage } from "../layouts/DashboardPage";

export const AppRoutes = () => {
    return (
        <Routes>
            {/* Rutas públicas */}
            <Route path="/" element={<AuthPage />} />

            {/* Protegido por Role */}
            <Route path="/dashboard/*" element={<DashboardPage />} />
        </Routes>
    );
}