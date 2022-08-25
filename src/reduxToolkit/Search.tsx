import React, { FC, useCallback, useRef } from "react";
import { shallowEqual, useSelector } from 'react-redux';
import { updateSearch } from "./reducers/campaignsListReducer";
import { RootState, useAppDispatch } from "./store";
import { searchCampaigns } from "./thunk";

const useDebouncedCallback = (
    callback: Function,
    delay: number,
    dependencies?: any[]
  ) => {
    const timeout = useRef<NodeJS.Timeout>();
  
    return useCallback((...args: any) => {
      if (timeout.current != null) {
        clearTimeout(timeout.current);
      }
  
      timeout.current = setTimeout(() => {
        callback(...args);
      }, delay);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [callback, delay, ...(dependencies || [])]);
};

const Search: FC = () => {
    const search = useSelector((state: RootState) => state.campaignsList.search.text, shallowEqual);
    const progress = useSelector((state: RootState) => state.campaignsList.search.text && !state.campaignsList.search.ids, shallowEqual);

    const dispatch = useAppDispatch();

    const debouncedSearch = useDebouncedCallback((text: string) => {
        console.log(`[r] debouncedSearch text=${text}`);
        dispatch(searchCampaigns(text));
    }, 250, [dispatch]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateSearch(event.target.value));
        debouncedSearch(event.target.value);
    }

    console.log(`[r] search text=${search}`);

    return (
        <div className="search">
            Search
            <input value={search} onChange={handleChange}/>
            {progress && <progress />}
        </div>
    );
};

export default Search;