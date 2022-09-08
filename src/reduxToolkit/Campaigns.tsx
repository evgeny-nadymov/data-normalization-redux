
import { Provider } from "react-redux";
import CampaignsList from "./CampaignsList";
import Commands from "./Commands";
import EditCampaign from "./EditCampaign";
import MagicPage from "./MagicPage";
import MagicPageRedux from "./MagicPageRedux";
import Search from "./Search";
import { store } from "./store";

const Campaigns = () => (
    <Provider store={store}>
        <>
            <MagicPage />
            <MagicPageRedux />
            {/* <Commands />
            <Search />
            <div className="pages">
                <CampaignsList />
                <EditCampaign />
                
            </div> */}
        </>
    </Provider>
);

export default Campaigns;