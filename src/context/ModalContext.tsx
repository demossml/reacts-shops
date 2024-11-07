import { connect } from "http2";
import { createContext, useState } from "react";

interface IcreateContext {
  modal: boolean;
  open: () => void;
  close: () => void;
}

export const Modalcontext = createContext<IcreateContext>({
  modal: false,
  open: () => {},
  close: () => {},
});

export const ModalState = ({ children }: { children: React.ReactNode }) => {
  const [modal, setModal] = useState(false);

  const open = () => setModal(true);
  const close = () => setModal(false);

  return (
    <Modalcontext.Provider value={{ modal, open, close }}>
      {children}
    </Modalcontext.Provider>
  );
};
