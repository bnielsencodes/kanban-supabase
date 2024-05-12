"use client";
import React, { FC, useState, useEffect } from "react";
import { createClient } from "@/utils/supabase/client";
import data from "./data";
import Auth from "./_components/login/Auth";
import Header from "./_components/header/Header";
import CurrentBoard from "./_components/taskboard/CurrentBoard";
import NoBoards from "./_components/NoBoards";
import AddBoardModal from "./_components/modals/add-board/AddBoardModal";
import clsx from "clsx";

interface Session {
  user: {
    id: string;
  };
}

const App: FC = () => {
  const supabase = createClient();
  const [session, setSession] = useState<Session | null>(null);
  const [darkMode, setDarkMode] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [showAddBoardModal, setShowAddBoardModal] = useState(false);
  const [showEditBoardModal, setShowEditBoardModal] = useState(false);
  const [showDeleteBoardModal, setShowDeleteBoardModal] = useState(false);
  const [placeholderData, setPlaceholderData] = useState(data);
  const [boardCount, setBoardCount] = useState(placeholderData.length);
  const [currentBoard, setCurrentBoard] = useState(placeholderData[0]);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }: any) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event: any, session: Session | null) => {
      setSession(session);
    });
  }, []);

  // toggle dark mode
  const handleToggleTheme = () => setDarkMode((prevMode) => !prevMode);

  //
  // SAVE BOARD
  //

  // save board function
  function handleSaveBoard(id: number) {
    const filteredList = placeholderData.filter((item) => item.id !== id);
    const mappedList = filteredList.map((item) => ({
      ...item,
      id: filteredList.indexOf(item) + 1,
    }));
    placeholderData.splice(0, placeholderData.length, ...mappedList);
    setBoardCount(boardCount - 1);
    setShowDeleteBoardModal(false);
    setCurrentBoard(placeholderData[0]);
  }

  //
  // REMOVE BOARD
  //

  // remove board function
  function handleRemoveBoard(id: number) {
    const filteredList = placeholderData.filter((item) => item.id !== id);
    const mappedList = filteredList.map((item) => ({
      ...item,
      id: filteredList.indexOf(item) + 1,
    }));
    placeholderData.splice(0, placeholderData.length, ...mappedList);
    setBoardCount(boardCount - 1);
    setShowDeleteBoardModal(false);
    setCurrentBoard(placeholderData[0]);
  }

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className={clsx(
          "flex h-screen w-screen items-center justify-center",
          darkMode ? "bg-neutral-200" : "bg-neutral-700",
        )}
      >
        {/* loader */}
        <span className="loader relative h-12 w-12 overflow-hidden rounded-full bg-primary shadow-[0_5px_12px_rgba(0,0,0,.15),inset_0_0_30px_4px_rgba(0,0,0,.15)] before:absolute before:top-[-40%] before:h-full before:w-full before:animate-wave before:rounded-[30%] before:bg-neutral-500 before:content-[''] after:absolute after:top-[-40%] after:h-full after:w-full after:animate-wave after:rounded-[45%] after:bg-neutral-600 after:content-[''] lg:h-16 lg:w-16"></span>
      </div>
    );
  }

  return (
    <div
      className={clsx(
        "h-screen w-screen",
        darkMode ? "bg-neutral-200" : "bg-neutral-700",
      )}
    >
      {!session ? (
        <Auth {...{ darkMode }} />
      ) : (
        <>
          <Header
            {...{
              session,
              darkMode,
              handleToggleTheme,
              placeholderData,
              setPlaceholderData,
              boardCount,
              setBoardCount,
              currentBoard,
              setCurrentBoard,
              setShowAddBoardModal,
              showEditBoardModal,
              setShowEditBoardModal,
              showDeleteBoardModal,
              setShowDeleteBoardModal,
              handleSaveBoard,
              handleRemoveBoard,
            }}
          />

          <main
            className={`main h-screen ${
              darkMode ? "bg-neutral-200" : "bg-neutral-700"
            }`}
          >
            {/* 
              Show current board.
              If no boards created, show <NoBoards> component 
            */}
            {placeholderData.length > 0 ? <CurrentBoard /> : <NoBoards />}

            {/* AddBoardModal */}
            {showAddBoardModal && (
              <AddBoardModal
                {...{
                  darkMode,
                  placeholderData,
                  setPlaceholderData,
                  boardCount,
                  setBoardCount,
                  setShowAddBoardModal,
                }}
              />
            )}
          </main>
        </>
      )}
    </div>
  );
};

export default App;
