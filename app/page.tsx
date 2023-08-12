import Image from "next/image";
import getCurrentUser from "./actions/getCurrentUser";
import getListings, { IlistingParams } from "./actions/getListings";

import ClientOnly from "./components/ClientOnly";
import Container from "./components/Container";
import EmptyState from "./components/EmptyState";
import ListingCard from "./components/listings/ListingCard";
import AuthForm from "./components/AuthForm";

interface HomeProps {
  searchParams: IlistingParams;
}

const Home = async ({ searchParams }: HomeProps) => {
  const listings = await getListings(searchParams);
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }

  return (
    <div
      className="
        flex
        min-h-full
        flex-col
        justify-center
        py-12
        sm:px-6
        lg:px-8
        bg-gray-100
      "
    >
      <div
        className="
            sm:mx-auto
            sm:w-full
            sm:max-w-md
          "
      >
        <Image
          alt="Logo"
          height="48"
          width="48"
          className="mx-auto w-auto"
          src="/images/logo.png"
        />
        <h2
          className="
            mt-6
            text-center
            text-3xl
            font-bold
            tracking-tight
            text-gray-900
          "
        >
          Sign in to your account
        </h2>
      </div>
      <AuthForm />
    </div>

    // <ClientOnly>
    //   <Container>
    //     <div
    //       className="
    //         pt-24
    //         grid
    //         grid-cols-1
    //         sm:grid-cols-2
    //         md:grid-cols-3
    //         lg:grid-cols-4
    //         xl:grid-cols-5
    //         2xl:grid-cols-6
    //         gap-8"
    //     >
    //       {listings.map((listing: any) => {
    //         return (
    //           <ListingCard
    //             currentUser={currentUser}
    //             key={listing.id}
    //             data={listing}
    //           />
    //         );
    //       })}
    //     </div>
    //   </Container>
    // </ClientOnly>
  );
};

export default Home;
