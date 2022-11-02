import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "./features/counter/store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
