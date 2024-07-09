import { Metadata } from "next";
import React from "react";

type AdminPageProps = {};
export const metadata: Metadata = {
  title: "Admin - Doerz.fun",
  description: "Admin for Doerz.fun",
};
const AdminPage = (props: AdminPageProps) => {
  return <div>Admin</div>;
};

export default AdminPage;
