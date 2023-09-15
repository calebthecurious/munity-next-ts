import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";

import getCurrentUser from "../actions/getCurrentUser";
import DashboardClient from "./DashboardClient";

const DashboardPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Unauthorized" subtitle="Please Login" />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <DashboardClient currentUser={currentUser} />
    </ClientOnly>
  );
};

export default DashboardPage;
