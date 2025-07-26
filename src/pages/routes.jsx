import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./home-page";
import { PokemonDetailsPage } from "./pokemon-details-page";

export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/pokemon/:id" element={<PokemonDetailsPage />} />
            </Routes>
        </BrowserRouter>
    );
}
