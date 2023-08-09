import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";

import getCurrentUser from "../actions/getCurrentUser";
import getListings from "../actions/getListings";

import SkillsClient from "./SkillsClient";

const SkillsPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState title="Unauthorized" subtitle="Please Login" />
      </ClientOnly>
    );
  }

  const listings = await getListings({
    userId: currentUser.id,
  });

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No skills found"
          subtitle="Looks like you haven't listed any skills yet."
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <SkillsClient listings={listings} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default SkillsPage;
