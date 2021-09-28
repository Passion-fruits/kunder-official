import { getValue } from "../../lib/context";
import AddPlayListModal from "../AddPlayListModal";
import * as S from "./styles";
import { setValue } from "../../lib/context/index";
import React from "react";
import PrfoileUpdateModal from "../ProfileUpdateModal/index";
import PlaylistUpdateModal from "../PlaylistUpdateModal";

export default function Modal() {
  const contextObj = getValue();
  const modal = contextObj.modal;
  const dispatch = setValue();

  const closeModal = React.useCallback(({ target }) => {
    if (target.id !== "modal-wrapper") return;
    dispatch({
      type: "SET_MODAL",
      modal: null,
    });
  }, []);

  return (
    <>
      {modal && (
        <S.Wrapper id="modal-wrapper" onClick={closeModal}>
          {modal === "addPlayList" ? (
            <AddPlayListModal />
          ) : modal === "updateProfile" ? (
            <PrfoileUpdateModal />
          ) : modal === "updatePlaylist" ? (
            <PlaylistUpdateModal />
          ) : (
            <></>
          )}
        </S.Wrapper>
      )}
    </>
  );
}
