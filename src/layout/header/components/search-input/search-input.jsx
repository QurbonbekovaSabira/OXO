import React from "react";
import { SearchIcon } from "../../../../assets/icon/search-icon";
import { useDebounce } from "../../../../hook/useDebounce";
import { LocationIcon } from "../../../../assets/icon/location-icon";
import { Button } from "../../../../components/button";
export const SearchInput = () => {
  const [input, setInput] = React.useState(false);
  const search = useDebounce(input);
  return (
    <div className="flex items-center gap-5">
      <div className="grid w-full max-w-[90%] grid-cols-2 items-center">
        <div className="relative">
          <input
            value={input ? input : ""}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            className="border-harrison-grey w-full rounded-l-lg border p-[14px] pl-[50px]"
          />
          <button className="absolute left-[16px] top-[50%] translate-y-[-50%]">
            <SearchIcon />
          </button>
        </div>
        <div className="relative">
          <input
            type="text"
            className="border-harrison-grey w-full rounded-r-lg border p-[14px] pl-[50px]"
          />
          <button className="absolute left-[16px] top-[50%] translate-y-[-50%]">
            <LocationIcon />
          </button>
        </div>
      </div>
      <Button variant={"primary"}>Izlash</Button>
    </div>
  );
};
