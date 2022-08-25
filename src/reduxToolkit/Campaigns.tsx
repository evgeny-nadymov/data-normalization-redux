
import { Provider } from "react-redux";
import CampaignsList from "./CampaignsList";
import Commands from "./Commands";
import EditCampaign from "./EditCampaign";
import Search from "./Search";
import { store } from "./store";

const Campaigns = () => (
    <Provider store={store}>
        <>
            <Commands />
            <Search />
            <div className="pages">
                <CampaignsList />
                <EditCampaign />
            </div>
        </>
    </Provider>
);

export default Campaigns;