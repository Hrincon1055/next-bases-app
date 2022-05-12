import { FC, ReactNode } from "react";
// INTERFACES
interface Props {
  children?: ReactNode;
}
// INICIO
export const DarkLayout: FC<Props> = ({ children }) => {
  // RENDER
  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.3)",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      <h3>DarkLayout</h3>
      <div>{children}</div>
    </div>
  );
};
