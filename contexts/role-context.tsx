import { createContext, useContext, ReactNode } from "react";

interface RoleContextProps {
  role: Role;
}

const RoleContext = createContext<RoleContextProps | undefined>(undefined);

export const RoleProvider = ({
  role,
  children,
}: {
  role: Role;
  children: ReactNode;
}) => {
  return (
    <RoleContext.Provider value={{ role }}>{children}</RoleContext.Provider>
  );
};

export const useRole = () => {
  const context = useContext(RoleContext);
  if (!context) throw new Error("useRole must be used within a RoleProvider");
  return context;
};
