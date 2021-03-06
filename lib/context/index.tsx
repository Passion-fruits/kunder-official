import React, { useReducer, useContext, createContext, Dispatch } from "react";
import { musicCardObject } from "./../interfaces/music";

type State = {
  musicInformation: musicCardObject;
  list: musicCardObject[] | [];
  modal:
    | "addPlayList"
    | "updateProfile"
    | "updatePlaylist"
    | "addLitComment"
    | "chargeKdt"
    | "donation"
    | null;
  song_id: number | string;
  list_index: number;
};

type Action =
  | { type: "MUSIC_CHANGE"; musicInformation: musicCardObject }
  | { type: "SET_MUSIC_LIST"; list: musicCardObject[] }
  | {
      type: "SET_MODAL";
      modal:
        | "addPlayList"
        | "updateProfile"
        | "updatePlaylist"
        | "addLitComment"
        | "chargeKdt"
        | "donation"
        | null;
    }
  | { type: "SET_MUSIC_ID"; song_id: number | string }
  | { type: "SET_MUSIC_LIST_INDEX"; list_index: number };

type SampleDispatch = Dispatch<Action>;

const SampleStateContext = createContext<State | null>(null);
const SampleDispatchContext = createContext<SampleDispatch | null>(null);

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "MUSIC_CHANGE":
      return {
        ...state,
        musicInformation: action.musicInformation,
      };
    case "SET_MUSIC_LIST":
      return {
        ...state,
        list: action.list,
      };
    case "SET_MODAL":
      return {
        ...state,
        modal: action.modal,
      };
    case "SET_MUSIC_ID":
      return {
        ...state,
        song_id: action.song_id,
      };
    case "SET_MUSIC_LIST_INDEX":
      return {
        ...state,
        list_index: action.list_index,
      };
    default:
      throw new Error("Unhandled action");
  }
}

export function SampleProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, {
    musicInformation: {
      cover_url: "",
      title: "곡이 없습니다",
      artist: "---",
      song_url: "",
      song_id: "",
    },
    list: [],
    modal: null,
    song_id: 0,
    list_index: 0,
  });
  return (
    <SampleStateContext.Provider value={state}>
      <SampleDispatchContext.Provider value={dispatch}>
        {children}
      </SampleDispatchContext.Provider>
    </SampleStateContext.Provider>
  );
}

export function getValue() {
  const state = useContext(SampleStateContext);
  if (!state) throw new Error("Cannot find SampleProvider");
  return state;
}

export function setValue() {
  const dispatch = useContext(SampleDispatchContext);
  if (!dispatch) throw new Error("Cannot find SampleProvider");
  return dispatch;
}
